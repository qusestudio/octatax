import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    return {
        host: "https://www.octatax.co.za",
        sitemap: "https://www.octatax.co.za/sitemap.xml",
        rules: [
            { userAgent: "*", allow: "/" },
            { userAgent: "*", disallow: ["/api/*"] },
        ],
    }
}
