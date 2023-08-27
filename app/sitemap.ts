import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://luckblock.com',
            lastModified: new Date(),
        },
        {
            url: 'https://luckblock.com/about',
            lastModified: new Date(),
        },
        {
            url: 'https://luckblock.com/page_name',
            lastModified: new Date(),
        },
    ]
}