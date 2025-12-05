# Rename API folder to avoid export errors (Next.js static export doesn't support API routes)
if (Test-Path "src/app/api") {
    Write-Host "Temporarily renaming API folder..."
    Rename-Item "src/app/api" "api_backup"
}

# Build Next.js app
Write-Host "Building Next.js app..."
npm run build

# Restore API folder
if (Test-Path "src/app/api_backup") {
    Write-Host "Restoring API folder..."
    Rename-Item "src/app/api_backup" "api"
}

# Check if build was successful
if (!(Test-Path "out")) {
    Write-Error "Build failed or 'out' directory not found."
    exit 1
}

# Create assets directory in Expo app
$dest = "expo-app/assets/web"
if (Test-Path $dest) {
    Remove-Item -Recurse -Force $dest
}
New-Item -ItemType Directory -Force -Path $dest | Out-Null

# Copy static files
Write-Host "Copying assets to Expo app..."
Copy-Item -Recurse "out/*" $dest

Write-Host "Done! You can now build the mobile app with:"
Write-Host "cd expo-app"
Write-Host "npx expo run:android"
