import {useState, type ReactNode} from "react";
import {HeadContent, Outlet, Scripts, createRootRoute} from "@tanstack/react-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {UrlNormalizer} from "@/components/UrlNormalizer";
import Page404 from "@/pages/Page404";
import {PLATFORM_META, PLATFORM_SCRIPTS} from "@/platform/scripts.gen";
import {HMR_CLIENT} from "@/platform/dev-hmr";
import appCss from "@/index.css?url";

const TITLE = "ОртоЦентр — индивидуальные ортоаппараты и туторы в Мытищах";
const DESCRIPTION =
    "Индивидуальные анатомические ортезы, аппараты на голеностоп и на всю ногу, туторы. Оплата электронными сертификатами ТСР, гарантия на изделия 6 месяцев. Мытищи.";
const OG_IMAGE = "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/og-image-1781862349330.jpg";

const NOT_FOUND_TITLE = "Страница не найдена (404) — ОртоЦентр";
const NOT_FOUND_DESCRIPTION = "Такой страницы нет на сайте ОртоЦентра. Перейдите в каталог, к статьям или на главную.";

const METRIKA = `(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () {
        (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) {
            return;
        }
    }
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(101026698, "init", {
    trustedDomains: ["poehali.dev", "orto.center"],
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
    trackHash: true
});`;

export const Route = createRootRoute({
    head: ({matches}) => {
        const notFound = matches.some((m) => m.status === "notFound" || ("_notFound" in m && m._notFound === true));
        return {
        meta: [
            {charSet: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1.0"},
            ...(notFound
                ? [
                    {title: NOT_FOUND_TITLE},
                    {name: "description", content: NOT_FOUND_DESCRIPTION},
                    {name: "robots", content: "noindex, nofollow"},
                ]
                : [{title: TITLE}, {name: "description", content: DESCRIPTION}]),
            {name: "author", content: "ОртоЦентр"},
            {name: "yandex-verification", content: "d6ea05983bf4f57c"},
            {property: "og:type", content: "website"},
            {property: "og:site_name", content: "ОртоЦентр"},
            {property: "og:locale", content: "ru_RU"},
            {property: "og:title", content: TITLE},
            {property: "og:description", content: DESCRIPTION},
            {property: "og:image", content: OG_IMAGE},
            {property: "og:image:width", content: "4800"},
            {property: "og:image:height", content: "2520"},
            {property: "og:image:alt", content: "ОртоЦентр — лаборатория индивидуального ортезирования в Мытищах"},
            {name: "twitter:image", content: OG_IMAGE},
            ...PLATFORM_META,
        ],
        links: [
            {rel: "stylesheet", href: appCss},
            {rel: "icon", type: "image/svg+xml", href: "/favicon.svg"},
        ],
        // IMPORTANT: DO NOT REMOVE PLATFORM SCRIPTS AND THE DEV HMR CLIENT!
        scripts: [
            ...(import.meta.env.DEV ? [{children: HMR_CLIENT}] : []),
            ...PLATFORM_SCRIPTS,
            {children: METRIKA},
        ],
        };
    },
    component: RootComponent,
    notFoundComponent: NotFoundPage,
});

function NotFoundPage() {
    return (
        <Page404/>
    );
}

function RootComponent() {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <RootDocument>
            <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                    <Toaster/>
                    <Sonner/>
                    <UrlNormalizer/>
                    <Outlet/>
                </TooltipProvider>
            </QueryClientProvider>
        </RootDocument>
    );
}

function RootDocument({children}: { children: ReactNode }) {
    return (
        <html lang="ru">
        <head>
            <HeadContent/>
        </head>
        <body>
        {children}
        <noscript>
            <div><img src="https://mc.yandex.ru/watch/101026698" style={{position: "absolute", left: "-9999px"}} alt=""/></div>
        </noscript>
        <Scripts/>
        </body>
        </html>
    );
}