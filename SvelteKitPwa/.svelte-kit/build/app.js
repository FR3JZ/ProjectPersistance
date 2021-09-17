import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "..\\..\\src\\hooks.ts";

const template = ({ head, body }) => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<link rel=\"icon\" href=\"/favicon.ico\" />\r\n\t\t<script src=\"https://kit.fontawesome.com/31ace7099a.js\" crossorigin=\"anonymous\"></script>\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\r\n\t\t" + head + "\r\n\t\t<style>\r\n\t\t\t@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');\r\n\t\t\tbody{\r\n\t\t\t\tmargin: 0;\r\n\t\t\t\tfont-family:'Roboto', sans-serif;\r\n\t\t\t\tbackground-color:#DEF2F1;\r\n\t\t\t}\r\n\t\t\t.container{\r\n\t\t\t\twidth: 80%;\r\n\t\t\t\tmargin: auto auto;\r\n\t\t\t}\r\n\t\t</style>\r\n\t</head>\r\n\r\n\t<body>\r\n\t\t<div id=\"svelte\">" + body + "</div>\r\n\t</body>\r\n</html>\r\n";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-aea389df.js",
			css: ["/./_app/assets/start-a8cd1609.css"],
			js: ["/./_app/start-aea389df.js","/./_app/chunks/vendor-aba279ef.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"apple-icon-180.png","size":5234,"type":"image/png"},{"file":"apple-splash-1125-2436.jpg","size":48897,"type":"image/jpeg"},{"file":"apple-splash-1136-640.jpg","size":17398,"type":"image/jpeg"},{"file":"apple-splash-1170-2532.jpg","size":51811,"type":"image/jpeg"},{"file":"apple-splash-1242-2208.jpg","size":52599,"type":"image/jpeg"},{"file":"apple-splash-1242-2688.jpg","size":56170,"type":"image/jpeg"},{"file":"apple-splash-1284-2778.jpg","size":58403,"type":"image/jpeg"},{"file":"apple-splash-1334-750.jpg","size":21159,"type":"image/jpeg"},{"file":"apple-splash-1536-2048.jpg","size":63142,"type":"image/jpeg"},{"file":"apple-splash-1620-2160.jpg","size":67883,"type":"image/jpeg"},{"file":"apple-splash-1668-2224.jpg","size":70051,"type":"image/jpeg"},{"file":"apple-splash-1668-2388.jpg","size":72176,"type":"image/jpeg"},{"file":"apple-splash-1792-828.jpg","size":23547,"type":"image/jpeg"},{"file":"apple-splash-2048-1536.jpg","size":52834,"type":"image/jpeg"},{"file":"apple-splash-2048-2732.jpg","size":92017,"type":"image/jpeg"},{"file":"apple-splash-2160-1620.jpg","size":56842,"type":"image/jpeg"},{"file":"apple-splash-2208-1242.jpg","size":40976,"type":"image/jpeg"},{"file":"apple-splash-2224-1668.jpg","size":59104,"type":"image/jpeg"},{"file":"apple-splash-2388-1668.jpg","size":59760,"type":"image/jpeg"},{"file":"apple-splash-2436-1125.jpg","size":35559,"type":"image/jpeg"},{"file":"apple-splash-2532-1170.jpg","size":38062,"type":"image/jpeg"},{"file":"apple-splash-2688-1242.jpg","size":41567,"type":"image/jpeg"},{"file":"apple-splash-2732-2048.jpg","size":78153,"type":"image/jpeg"},{"file":"apple-splash-2778-1284.jpg","size":43582,"type":"image/jpeg"},{"file":"apple-splash-640-1136.jpg","size":23426,"type":"image/jpeg"},{"file":"apple-splash-750-1334.jpg","size":28014,"type":"image/jpeg"},{"file":"apple-splash-828-1792.jpg","size":33344,"type":"image/jpeg"},{"file":"favicon.ico","size":1150,"type":"image/vnd.microsoft.icon"},{"file":"manifest.webmanifest","size":461,"type":"application/manifest+json"},{"file":"pwa-192x192.png","size":5537,"type":"image/png"},{"file":"pwa-512x512.png","size":18707,"type":"image/png"},{"file":"robots.txt","size":70,"type":"text/plain"},{"file":"svelte-welcome.png","size":360807,"type":"image/png"},{"file":"svelte-welcome.webp","size":115470,"type":"image/webp"},{"file":"trailer.jpg","size":333000,"type":"image/jpeg"},{"file":"TRIMM.png","size":23051,"type":"image/png"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, render }) => render(request))
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("..\\..\\src\\routes\\__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components\\error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/./_app/pages/__layout.svelte-e271d57c.js","css":["/./_app/assets/pages/__layout.svelte-a0386caa.css"],"js":["/./_app/pages/__layout.svelte-e271d57c.js","/./_app/chunks/vendor-aba279ef.js"],"styles":null},".svelte-kit/build/components/error.svelte":{"entry":"/./_app/error.svelte-cfa611a6.js","css":[],"js":["/./_app/error.svelte-cfa611a6.js","/./_app/chunks/vendor-aba279ef.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-469b59de.js","css":["/./_app/assets/pages/index.svelte-ded6350f.css"],"js":["/./_app/pages/index.svelte-469b59de.js","/./_app/chunks/vendor-aba279ef.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}