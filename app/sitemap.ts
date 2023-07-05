import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://blockrover.com',
            lastModified: new Date(),
        },
        {
            url: 'https://blockrover.com/about',
            lastModified: new Date(),
        },
        {
            url: 'https://blockrover.com/page_name',
            lastModified: new Date(),
        },
    ]
}