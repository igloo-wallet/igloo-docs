(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{426:function(e,t,s){"use strict";s.r(t);var n=s(11),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"permissions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[e._v("#")]),e._v(" Permissions")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Developer Preview Software")]),e._v(" "),s("p",[e._v("Snaps is pre-release software. To try Snaps, install "),s("a",{attrs:{href:"https://metamask.io/flask",target:"_blank",rel:"noopener noreferrer"}},[e._v("MetaMask Flask"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Feature Requests")]),e._v(" "),s("p",[e._v("Do you have feature requests? Other ideas? We'd love to hear about them! "),s("a",{attrs:{href:"https://github.com/MetaMask/snaps-skunkworks/discussions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Click here"),s("OutboundLink")],1),e._v(" to join the discussion.")])]),e._v(" "),s("p",[e._v("To access certain powerful JavaScript globals or JSON-RPC methods, your snap will need to ask the user for permission. Snaps follow the "),s("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-2255",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP-2255 wallet permissions specification"),s("OutboundLink")],1),e._v(", and your snap's required permissions must be specified in the "),s("code",[e._v("initialPermissions")]),e._v(" field of your "),s("RouterLink",{attrs:{to:"/guide/snaps-development-guide.html#the-snap-manifest"}},[s("code",[e._v("snap.manifest.json")]),e._v(" file")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table of Contents")]),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#table-of-contents"}},[e._v("Table of Contents")])]),s("li",[s("a",{attrs:{href:"#endowments"}},[e._v("Endowments")]),s("ul",[s("li",[s("a",{attrs:{href:"#endowment-long-running"}},[e._v("endowment:long-running")])]),s("li",[s("a",{attrs:{href:"#endowment-network-access"}},[e._v("endowment:network-access")])])])]),s("li",[s("a",{attrs:{href:"#rpc-permissions"}},[e._v("RPC Permissions")])])])]),s("p"),e._v(" "),s("h2",{attrs:{id:"endowments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endowments"}},[e._v("#")]),e._v(" Endowments")]),e._v(" "),s("h3",{attrs:{id:"endowment-long-running"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endowment-long-running"}},[e._v("#")]),e._v(" "),s("code",[e._v("endowment:long-running")])]),e._v(" "),s("p",[e._v("For snaps that are computationally heavy and can't finish execution within "),s("RouterLink",{attrs:{to:"/guide/snaps-development-guide.html#the-snap-lifecycle"}},[e._v("the snap lifecycle requirements")]),e._v(", the snap can request the "),s("code",[e._v("endowment:long-running")]),e._v(" permission.\nThis permission will effectively allow snaps to run indefinitely while processing RPC requests.")],1),e._v(" "),s("h3",{attrs:{id:"endowment-network-access"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endowment-network-access"}},[e._v("#")]),e._v(" "),s("code",[e._v("endowment:network-access")])]),e._v(" "),s("p",[e._v("For snaps that need to access the internet, the snap can request the "),s("code",[e._v("endowment:network-access")]),e._v(" permission. This permission will expose the global networking APIs "),s("code",[e._v("fetch")]),e._v(" and "),s("code",[e._v("WebSocket")]),e._v(" to the snap execution environment. Without this permission, these globals will not be available.")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Avoid XMLHttpRequest")]),e._v(" "),s("p",[s("code",[e._v("XMLHttpRequest")]),e._v(" is never available in snaps, and you should replace it with "),s("code",[e._v("fetch")]),e._v(". If your dependencies are using "),s("code",[e._v("XMLHttpRequest")]),e._v(", you can learn how to patch it away "),s("RouterLink",{attrs:{to:"/guide/snaps-patching-dependencies.html#patching-the-use-of-xmlhttprequest"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),s("h2",{attrs:{id:"rpc-permissions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rpc-permissions"}},[e._v("#")]),e._v(" RPC Permissions")]),e._v(" "),s("p",[e._v("To use any restricted RPC method, a snap will need to request permissions to access that method. For a list of available RPC methods and thus valid RPC permissions see "),s("RouterLink",{attrs:{to:"/guide/snaps-rpc-api.html#restricted-methods"}},[e._v("JSON-RPC API")])],1)])}),[],!1,null,null,null);t.default=a.exports}}]);