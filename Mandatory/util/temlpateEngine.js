import fs from "fs"

export default function renderPage(pagePath, config={})
{

    const navbar = fs.readFileSync("./components/navbar/navbar.html").toString()
    .replace("$TAB_TITLE", config.tabTitle || "Notes")
    .replace("$CSS_LINK", config.cssLink || "")
    const footer = fs.readFileSync("./components/footer/footer.html").toString()
    const page = fs.readFileSync(pagePath).toString()
    return navbar + page + footer
}