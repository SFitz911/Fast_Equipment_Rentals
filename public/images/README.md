# Images Directory

Place all your image files in this directory.

## Recommended Structure

- `hero/` - Hero section background images
- `equipment/` - Equipment photos
- `testimonials/` - Customer photos (optional)
- `logos/` - Company logos and branding

## Usage in Components

You can reference images from this directory using:

```tsx
// Using Next.js Image component (recommended)
import Image from 'next/image';
<Image src="/images/hero/background.jpg" alt="Hero" width={1920} height={1080} />

// Or using background images in CSS
style={{ backgroundImage: 'url(/images/equipment/excavator.jpg)' }}
```

## File Naming

Use lowercase with hyphens: `equipment-excavator.jpg` instead of `Equipment_Excavator.jpg`