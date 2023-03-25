import fs from "fs"

export default function renderPage(pagePath, config={})
{

    const navbar = fs.readFileSync("./components/navbar/navbar.html").toString()
    .replace("$TAB_TITLE", config.tabTitle || "Upper")
    .replace("$CSS_LINK", config.cssLink || "")
    const footer = fs.readFileSync("./components/footer/footer.html").toString().replace("$FOOTER_YEAR", `© ${new Date().getFullYear()}`)
    const page =fs.readFileSync(pagePath).toString()
    return navbar + page + footer
}