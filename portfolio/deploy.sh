#!/bin/bash

# Ayush Kunjadia Portfolio - Deployment Script
# This script builds and prepares the portfolio for deployment

echo "🚀 Starting deployment process for Ayush Kunjadia Portfolio..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build the project
echo "🏗️ Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful! Ready for deployment."
    echo ""
    echo "🎉 Portfolio is ready to deploy!"
    echo "📁 Build files are in the .next folder"
    echo ""
    echo "🌐 Deployment options:"
    echo "  - Vercel: git push to main branch (auto-deploy)"
    echo "  - Netlify: Upload .next folder"
    echo "  - Manual: npm run start"
    echo ""
    echo "🔗 Don't forget to update the domain in layout.tsx metadata!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi