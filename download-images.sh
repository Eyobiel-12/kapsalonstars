#!/bin/bash

# Create directories if they don't exist
mkdir -p public/team

# Download placeholder images for team members
curl -o public/team/adli.jpeg https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=600&auto=format&fit=crop
curl -o public/team/na3mat.jpeg https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop
curl -o public/team/hasko.jpeg https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop

# Download placeholder image for salon interior
curl -o public/salon-interior.jpg https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=800&auto=format&fit=crop

echo "Images downloaded successfully!" 