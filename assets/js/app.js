// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import "phoenix_html"
import "bootstrap";

// Import local files
//

require("./calendar.js")
