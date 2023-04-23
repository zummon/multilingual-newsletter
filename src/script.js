// This part you need to edit to be yours
document.addEventListener("DOMContentLoaded", function () {
	// store all languages as an array of objects
	var languages = [
		{
			locale: "en",
			name: "English",
			fontFamily: "'Akaya Telivigala', cursive",
			title: "Multilingual Newsletter",
			head_line: "Newsletter",
			translate_by: "(written by zummon)",
			whats_it:
				"I create this small website to share how to write code for multilingual website. Go to view source code to see all the code. Then begin learning how to create one like this website by viewing the code or copy to create on your own from this template. Hope you will learn something or inspire you to create or apply to your own website.",
			other_text_1:
				"Integer porta dictum augue, id suscipit est hendrerit at. Nullam facilisis, libero quis porttitor dapibus, erat dui dictum justo, in ultrices quam ipsum vitae enim. Suspendisse eu erat eget enim malesuada ullamcorper. Donec eu ultrices diam. Vestibulum porta orci in aliquet molestie. Nunc tincidunt facilisis metus, sit amet volutpat ante vestibulum porttitor. Nunc efficitur feugiat leo, facilisis eleifend quam efficitur vel. In hac habitasse platea dictumst.",
			other_text_2:
				"Vestibulum finibus nisl sagittis, viverra justo at, porta ligula. Proin tincidunt diam non massa posuere condimentum. Aenean ut accumsan lorem. Nulla in turpis sed quam laoreet venenatis at blandit ex. Nulla urna eros, dictum vitae finibus eu, tristique a nisi. Proin efficitur vehicula sapien quis vehicula. Cras nec scelerisque neque, eu condimentum nunc. Nam vitae ultrices libero. In hac habitasse platea dictumst.",
			other_text_3:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			made_by: "Made by zummon"
		},
		{
			locale: "zh",
			name: "中国人",
			fontFamily: "'Noto Serif SC', serif",
			title: "多语种通讯",
			head_line: "通讯",
			translate_by: "（自动翻译，不会完全正确）",
			whats_it:
				"我创建了这个小型网站，以分享如何为多语言网站编写代码。 转到查看源代码以查看所有代码。 然后，通过查看代码或通过此模板复制以自行创建，来开始学习如何创建一个类似此网站的网站。 希望您能学到一些东西或激发您创建或应用到自己的网站。",
			other_text_1:
				"色刈来月郷連新将用聴作査刊城農東題提温。読並詳高省生将報万力強続強辞点。更伎宿聞権刊石禁字利追係見徴働文講。高糊試月社覧刊回行委持問話布泣。話浮紙究日水能禁必市得健材悩部。道表航集航問馬最川開語早響境。読一甘両合道福全伝同一夢治。阻数鈴求数風円入口属国意。治骨込井辛品樽新入子加玲。更中切切手流福能金住表料敗見挑景来。",
			other_text_2:
				"美決奨裁和際聞旅変輸加応覧馬山気幸氏。天蓉政士文転今投立賞位縷教質能情村有系。水再研官男重書校県剖際治後。所湖戻疾日彰組登者具金康一光進男見民得面。類多洛案道住問消震深形芸税。減死供従濃飛民技替日佐硬幕連渡市行門負地。救金直米本便燼領雲懲係愛黒済社州。撃将白内回長法島面読館恐扱用福速。一出面続工結仁転番松記火。",
			other_text_3:
				"Lorem Ipsum，也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。",
			made_by: "由 ZUMMON 制造"
		},
		{
			locale: "th",
			name: "ไทย",
			fontFamily: "'Sriracha', cursive",
			title: "หนังสือพิมพ์หลายภาษา",
			translate_by: "(แปลโดย zummon)",
			head_line: "หนังสือพิมพ์",
			whats_it:
				"ฉันสร้างเว็บไซต์เล็กๆ นี้ขึ้น เพื่อแบ่งปันวิธีการเขียนโค้ดสำหรับเว็บไซต์หลายภาษา ไปที่ดูซอร์สโค้ด เพื่อดูโค้ดทั้งหมด จากนั้นเริ่มเรียนรู้วิธีสร้างเว็บไซต์แบบนี้ โดยการดูโค้ด หรือคัดลอก เพื่อสร้างขึ้นด้วยตนเองจากเทมเพลตนี้ หวังว่าคุณจะได้เรียนรู้บางสิ่งบางอย่าง หรือสร้างแรงบันดาลใจให้คุณสร้าง หรือนำไปใช้กับเว็บไซต์ของคุณเอง",
			other_text_1:
				"แจ๊ส ซากุระต่อรองสแตนเลสแหม็บเทวาธิราช จิ๊กพูลราสเบอร์รีมัฟฟินแต๋ว แพกเกจโบรกเกอร์พาวเวอร์ แทงกั๊กรุมบ้าสปอต คอนแทคทัวริสต์ภคันทลาพาธเธค พอเพียงวัคค์อันเดอร์คอนเซ็ปต์มะกัน ป๋อหลอม็อบตุ๊ดเบญจมบพิตร ตนเองจังโก้แผดเผาจตุคาม ซีอีโอเหี่ยวย่นโปรดิวเซอร์เวิร์กยะเยือก ซังเตเพียบแปร้ สปิริตจัมโบ้ชนะเลิศ เสือโคร่งเบิร์ด แป๋วบูติค ตาปรือคูลเลอร์ผิดพลาดเซอร์ เก๋ากี้โปสเตอร์คาร์โก้พะเรอ",
			other_text_2:
				"รีดไถคอนเฟิร์ม ชาร์จไฮเปอร์ทาวน์ เวิร์กช็อปแฟรี แมชีนแจม เซี้ยวเนอะแคมป์ทรู ออร์แกนิกแดนเซอร์แล็บผลักดันละติน สไปเดอร์คอนเซปต์ครัวซองธรรมาภิบาล ใช้งานวอลนัทกู๋ไรเฟิล ดิกชันนารีแฟนตาซีแจมวีนตนเอง โอเลี้ยงคาราโอเกะวีไอพีหม่านโถว เห็นด้วย เบอร์รีหน่อมแน้ม เกรย์สเตริโอสารขัณฑ์อ่วมเซอร์ เกรดเทียมทาน คูลเลอร์เทวาธิราช แจม",
			other_text_3:
				"Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์ มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่ 16 เมื่อเครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่งตัวอักษรเพื่อทำหนังสือตัวอย่าง Lorem Ipsum อยู่ยงคงกระพันมาไม่ใช่แค่เพียงห้าศตวรรษ แต่อยู่มาจนถึงยุคที่พลิกโฉมเข้าสู่งานเรียงพิมพ์ด้วยวิธีทางอิเล็กทรอนิกส์ และยังคงสภาพเดิมไว้อย่างไม่มีการเปลี่ยนแปลง มันได้รับความนิยมมากขึ้นในยุค ค.ศ. 1960 เมื่อแผ่น Letraset วางจำหน่ายโดยมีข้อความบนนั้นเป็น Lorem Ipsum และล่าสุดกว่านั้น คือเมื่อซอฟท์แวร์การทำสื่อสิ่งพิมพ์ (Desktop Publishing) อย่าง Aldus PageMaker ได้รวมเอา Lorem Ipsum เวอร์ชั่นต่างๆ เข้าไว้ในซอฟท์แวร์ด้วย",
			made_by: "สร้างโดย zummon"
		}
	];
	// to keep current language, set an empty object first
	var language = {};
	// get user's setting
	var user_setting = languages[0].locale; //localStorage.getItem("language")

	// a function to change current language
	function handleLanguage(locale) {
		// if don't get the parameter, will automatically get from user's setting
		if (typeof locale === "undefined") {
			locale = user_setting;
		}
		// find the language in languages variable
		var filtered = languages.filter(function (item) {
			return item.locale === locale;
		});
		// get the actual existing language
		if (filtered.length >= 1) {
			language = filtered[0];
		} else {
			language = languages[0];
		}
		// do stuff on this website
		// get the elements that are going to change more than one attribute
		var element_head_line = document.getElementById("head_line");

		// change to appropriate attribute
		document.documentElement.lang = language.locale;
		document.documentElement.style.fontFamily = language.fontFamily;
		element_head_line.style.fontFamily = language.fontFamily;

		// change translation texts
		document.title = language.title;
		element_head_line.textContent = language.head_line;
		document.getElementById("translate_by").textContent = language.translate_by;
		document.getElementById("whats_it").textContent = language.whats_it;
		document.getElementById("other_text_1").textContent = language.other_text_1;
		document.getElementById("other_text_2").textContent = language.other_text_2;
		document.getElementById("other_text_3").textContent = language.other_text_3;
		document.getElementById("made_by").textContent = language.made_by;

		// save to user's setting
		// localStorage.setItem("language", language.locale)
	}

	// get the element for an user to interact to change the language
	var element_setting = document.getElementById("setting");

	// do stuff when this website loads or an user opens this website
	// run the function when this website is opening
	handleLanguage();

	// build options to the element for an user to select
	languages.forEach(function (item) {
		var node_option = document.createElement("option");
		node_option.value = item.locale;
		node_option.text = item.name;

		element_setting.appendChild(node_option);
	});
	// automatically select the current language
	element_setting.value = language.locale;

	// set the function to run when an user changes the language
	element_setting.addEventListener("change", function (event) {
		handleLanguage(event.currentTarget.value);
	});
});

// Below you don't need to do anything it's from CSS framework
/*! UIkit 3.14.1 | https://www.getuikit.com | (c) 2014 - 2022 YOOtheme | MIT License */ (function (
	de,
	fe
) {
	typeof exports == "object" && typeof module < "u"
		? (module.exports = fe())
		: typeof define == "function" && define.amd
		? define("uikit", fe)
		: ((de = typeof globalThis < "u" ? globalThis : de || self),
		  (de.UIkit = fe()));
})(this, function () {
	"use strict";
	const { hasOwnProperty: de, toString: fe } = Object.prototype;
	function Nt(t, e) {
		return de.call(t, e);
	}
	const Un = /\B([A-Z])/g,
		Mt = nt((t) => t.replace(Un, "-$1").toLowerCase()),
		tr = /-(\w)/g,
		Yt = nt((t) => t.replace(tr, hs)),
		wt = nt((t) => (t.length ? hs(null, t.charAt(0)) + t.slice(1) : ""));
	function hs(t, e) {
		return e ? e.toUpperCase() : "";
	}
	function lt(t, e) {
		return t == null || t.startsWith == null ? void 0 : t.startsWith(e);
	}
	function Gt(t, e) {
		return t == null || t.endsWith == null ? void 0 : t.endsWith(e);
	}
	function g(t, e) {
		return t == null || t.includes == null ? void 0 : t.includes(e);
	}
	function bt(t, e) {
		return t == null || t.findIndex == null ? void 0 : t.findIndex(e);
	}
	const { isArray: st, from: bi } = Array,
		{ assign: xt } = Object;
	function dt(t) {
		return typeof t == "function";
	}
	function At(t) {
		return t !== null && typeof t == "object";
	}
	function Pt(t) {
		return fe.call(t) === "[object Object]";
	}
	function Dt(t) {
		return At(t) && t === t.window;
	}
	function pe(t) {
		return yi(t) === 9;
	}
	function xi(t) {
		return yi(t) >= 1;
	}
	function Xt(t) {
		return yi(t) === 1;
	}
	function yi(t) {
		return !Dt(t) && At(t) && t.nodeType;
	}
	function Le(t) {
		return typeof t == "boolean";
	}
	function O(t) {
		return typeof t == "string";
	}
	function Jt(t) {
		return typeof t == "number";
	}
	function Et(t) {
		return Jt(t) || (O(t) && !isNaN(t - parseFloat(t)));
	}
	function ge(t) {
		return !(st(t) ? t.length : At(t) ? Object.keys(t).length : !1);
	}
	function Y(t) {
		return t === void 0;
	}
	function $i(t) {
		return Le(t)
			? t
			: t === "true" || t === "1" || t === ""
			? !0
			: t === "false" || t === "0"
			? !1
			: t;
	}
	function _t(t) {
		const e = Number(t);
		return isNaN(e) ? !1 : e;
	}
	function y(t) {
		return parseFloat(t) || 0;
	}
	function V(t) {
		return b(t)[0];
	}
	function b(t) {
		return (t && (xi(t) ? [t] : Array.from(t).filter(xi))) || [];
	}
	function Kt(t) {
		var e;
		if (Dt(t)) return t;
		t = V(t);
		const i = pe(t) ? t : (e = t) == null ? void 0 : e.ownerDocument;
		return i?.defaultView || window;
	}
	function me(t, e) {
		return (
			t === e ||
			(At(t) &&
				At(e) &&
				Object.keys(t).length === Object.keys(e).length &&
				yt(t, (i, s) => i === e[s]))
		);
	}
	function ki(t, e, i) {
		return t.replace(new RegExp(e + "|" + i, "g"), (s) => (s === e ? i : e));
	}
	function ve(t) {
		return t[t.length - 1];
	}
	function yt(t, e) {
		for (const i in t) if (e(t[i], i) === !1) return !1;
		return !0;
	}
	function We(t, e) {
		return t.slice().sort((i, s) => {
			let { [e]: n = 0 } = i,
				{ [e]: r = 0 } = s;
			return n > r ? 1 : r > n ? -1 : 0;
		});
	}
	function cs(t, e) {
		const i = new Set();
		return t.filter((s) => {
			let { [e]: n } = s;
			return i.has(n) ? !1 : i.add(n);
		});
	}
	function U(t, e, i) {
		return (
			e === void 0 && (e = 0),
			i === void 0 && (i = 1),
			Math.min(Math.max(_t(t) || 0, e), i)
		);
	}
	function E() {}
	function Si() {
		for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
			e[i] = arguments[i];
		return [
			["bottom", "top"],
			["right", "left"]
		].every((s) => {
			let [n, r] = s;
			return (
				Math.min(
					...e.map((o) => {
						let { [n]: a } = o;
						return a;
					})
				) -
					Math.max(
						...e.map((o) => {
							let { [r]: a } = o;
							return a;
						})
					) >
				0
			);
		});
	}
	function je(t, e) {
		return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
	}
	function Ti(t, e, i) {
		const s = e === "width" ? "height" : "width";
		return { [s]: t[e] ? Math.round((i * t[s]) / t[e]) : t[s], [e]: i };
	}
	function us(t, e) {
		t = { ...t };
		for (const i in t) t = t[i] > e[i] ? Ti(t, i, e[i]) : t;
		return t;
	}
	function er(t, e) {
		t = us(t, e);
		for (const i in t) t = t[i] < e[i] ? Ti(t, i, e[i]) : t;
		return t;
	}
	const we = { ratio: Ti, contain: us, cover: er };
	function Zt(t, e, i, s) {
		i === void 0 && (i = 0), s === void 0 && (s = !1), (e = b(e));
		const { length: n } = e;
		return n
			? ((t = Et(t)
					? _t(t)
					: t === "next"
					? i + 1
					: t === "previous"
					? i - 1
					: e.indexOf(V(t))),
			  s ? U(t, 0, n - 1) : ((t %= n), t < 0 ? t + n : t))
			: -1;
	}
	function nt(t) {
		const e = Object.create(null);
		return (i) => e[i] || (e[i] = t(i));
	}
	class Re {
		constructor() {
			this.promise = new Promise((e, i) => {
				(this.reject = i), (this.resolve = e);
			});
		}
	}
	function k(t, e, i) {
		if (At(e)) {
			for (const n in e) k(t, n, e[n]);
			return;
		}
		if (Y(i)) {
			var s;
			return (s = V(t)) == null ? void 0 : s.getAttribute(e);
		} else for (const n of b(t)) dt(i) && (i = i.call(n, k(n, e))), i === null ? be(n, e) : n.setAttribute(e, i);
	}
	function Bt(t, e) {
		return b(t).some((i) => i.hasAttribute(e));
	}
	function be(t, e) {
		const i = b(t);
		for (const s of e.split(" ")) for (const n of i) n.removeAttribute(s);
	}
	function rt(t, e) {
		for (const i of [e, "data-" + e]) if (Bt(t, i)) return k(t, i);
	}
	const ir = {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		menuitem: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	};
	function Ci(t) {
		return b(t).some((e) => ir[e.tagName.toLowerCase()]);
	}
	function q(t) {
		return b(t).some(
			(e) => e.offsetWidth || e.offsetHeight || e.getClientRects().length
		);
	}
	const xe = "input,select,textarea,button";
	function Ii(t) {
		return b(t).some((e) => H(e, xe));
	}
	const qe = xe + ",a[href],[tabindex]";
	function Ve(t) {
		return H(t, qe);
	}
	function A(t) {
		var e;
		return (e = V(t)) == null ? void 0 : e.parentElement;
	}
	function ye(t, e) {
		return b(t).filter((i) => H(i, e));
	}
	function H(t, e) {
		return b(t).some((i) => i.matches(e));
	}
	function ot(t, e) {
		return (
			lt(e, ">") && (e = e.slice(1)),
			Xt(t)
				? t.closest(e)
				: b(t)
						.map((i) => ot(i, e))
						.filter(Boolean)
		);
	}
	function F(t, e) {
		return O(e) ? H(t, e) || !!ot(t, e) : t === e || V(e).contains(V(t));
	}
	function $e(t, e) {
		const i = [];
		for (; (t = A(t)); ) (!e || H(t, e)) && i.push(t);
		return i;
	}
	function D(t, e) {
		t = V(t);
		const i = t ? b(t.children) : [];
		return e ? ye(i, e) : i;
	}
	function Qt(t, e) {
		return e ? b(t).indexOf(V(e)) : D(A(t)).indexOf(t);
	}
	function $t(t, e) {
		return Ai(t, fs(t, e));
	}
	function ke(t, e) {
		return Se(t, fs(t, e));
	}
	function Ai(t, e) {
		return V(ps(t, e, "querySelector"));
	}
	function Se(t, e) {
		return b(ps(t, e, "querySelectorAll"));
	}
	const sr = /(^|[^\\],)\s*[!>+~-]/,
		ds = nt((t) => t.match(sr));
	function fs(t, e) {
		return (
			e === void 0 && (e = document),
			(O(t) && ds(t)) || pe(e) ? e : e.ownerDocument
		);
	}
	const nr = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g,
		rr = nt((t) => t.replace(nr, "$1 *"));
	function ps(t, e, i) {
		if ((e === void 0 && (e = document), !t || !O(t))) return t;
		if (((t = rr(t)), ds(t))) {
			const s = ar(t);
			t = "";
			for (let n of s) {
				let r = e;
				if (n[0] === "!") {
					const o = n.substr(1).trim().split(" ");
					if (
						((r = ot(A(e), o[0])),
						(n = o.slice(1).join(" ").trim()),
						!n.length && s.length === 1)
					)
						return r;
				}
				if (n[0] === "-") {
					const o = n.substr(1).trim().split(" "),
						a = (r || e).previousElementSibling;
					(r = H(a, n.substr(1)) ? a : null), (n = o.slice(1).join(" "));
				}
				r && (t += (t ? "," : "") + lr(r) + " " + n);
			}
			e = document;
		}
		try {
			return e[i](t);
		} catch {
			return null;
		}
	}
	const or = /.*?[^\\](?:,|$)/g,
		ar = nt((t) => t.match(or).map((e) => e.replace(/,$/, "").trim()));
	function lr(t) {
		const e = [];
		for (; t.parentNode; ) {
			const i = k(t, "id");
			if (i) {
				e.unshift("#" + Pi(i));
				break;
			} else {
				let { tagName: s } = t;
				s !== "HTML" && (s += ":nth-child(" + (Qt(t) + 1) + ")"),
					e.unshift(s),
					(t = t.parentNode);
			}
		}
		return e.join(" > ");
	}
	function Pi(t) {
		return O(t) ? CSS.escape(t) : "";
	}
	function T() {
		for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
			e[i] = arguments[i];
		let [s, n, r, o, a = !1] = Ei(e);
		o.length > 1 && (o = cr(o)),
			a != null && a.self && (o = ur(o)),
			r && (o = hr(r, o));
		for (const l of n) for (const h of s) h.addEventListener(l, o, a);
		return () => Ut(s, n, o, a);
	}
	function Ut() {
		for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
			e[i] = arguments[i];
		let [s, n, , r, o = !1] = Ei(e);
		for (const a of n) for (const l of s) l.removeEventListener(a, r, o);
	}
	function j() {
		for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
			e[i] = arguments[i];
		const [s, n, r, o, a = !1, l] = Ei(e),
			h = T(
				s,
				n,
				r,
				(u) => {
					const d = !l || l(u);
					d && (h(), o(u, d));
				},
				a
			);
		return h;
	}
	function p(t, e, i) {
		return _i(t).every((s) => s.dispatchEvent(zt(e, !0, !0, i)));
	}
	function zt(t, e, i, s) {
		return (
			e === void 0 && (e = !0),
			i === void 0 && (i = !1),
			O(t) && (t = new CustomEvent(t, { bubbles: e, cancelable: i, detail: s })),
			t
		);
	}
	function Ei(t) {
		return (
			(t[0] = _i(t[0])),
			O(t[1]) && (t[1] = t[1].split(" ")),
			dt(t[2]) && t.splice(2, 0, !1),
			t
		);
	}
	function hr(t, e) {
		return (i) => {
			const s =
				t[0] === ">"
					? Se(t, i.currentTarget)
							.reverse()
							.filter((n) => F(i.target, n))[0]
					: ot(i.target, t);
			s && ((i.current = s), e.call(this, i));
		};
	}
	function cr(t) {
		return (e) => (st(e.detail) ? t(e, ...e.detail) : t(e));
	}
	function ur(t) {
		return function (e) {
			if (e.target === e.currentTarget || e.target === e.current)
				return t.call(null, e);
		};
	}
	function gs(t) {
		return t && "addEventListener" in t;
	}
	function dr(t) {
		return gs(t) ? t : V(t);
	}
	function _i(t) {
		return st(t) ? t.map(dr).filter(Boolean) : O(t) ? Se(t) : gs(t) ? [t] : b(t);
	}
	function kt(t) {
		return t.pointerType === "touch" || !!t.touches;
	}
	function te(t) {
		var e, i;
		const { clientX: s, clientY: n } =
			((e = t.touches) == null ? void 0 : e[0]) ||
			((i = t.changedTouches) == null ? void 0 : i[0]) ||
			t;
		return { x: s, y: n };
	}
	function ms(t, e) {
		const i = {
			data: null,
			method: "GET",
			headers: {},
			xhr: new XMLHttpRequest(),
			beforeSend: E,
			responseType: "",
			...e
		};
		return Promise.resolve()
			.then(() => i.beforeSend(i))
			.then(() => fr(t, i));
	}
	function fr(t, e) {
		return new Promise((i, s) => {
			const { xhr: n } = e;
			for (const r in e)
				if (r in n)
					try {
						n[r] = e[r];
					} catch {}
			n.open(e.method.toUpperCase(), t);
			for (const r in e.headers) n.setRequestHeader(r, e.headers[r]);
			T(n, "load", () => {
				n.status === 0 || (n.status >= 200 && n.status < 300) || n.status === 304
					? i(n)
					: s(xt(Error(n.statusText), { xhr: n, status: n.status }));
			}),
				T(n, "error", () => s(xt(Error("Network Error"), { xhr: n }))),
				T(n, "timeout", () => s(xt(Error("Network Timeout"), { xhr: n }))),
				n.send(e.data);
		});
	}
	function vs(t, e, i) {
		return new Promise((s, n) => {
			const r = new Image();
			(r.onerror = (o) => {
				n(o);
			}),
				(r.onload = () => {
					s(r);
				}),
				i && (r.sizes = i),
				e && (r.srcset = e),
				(r.src = t);
		});
	}
	const pr = {
		"animation-iteration-count": !0,
		"column-count": !0,
		"fill-opacity": !0,
		"flex-grow": !0,
		"flex-shrink": !0,
		"font-weight": !0,
		"line-height": !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		"stroke-dasharray": !0,
		"stroke-dashoffset": !0,
		widows: !0,
		"z-index": !0,
		zoom: !0
	};
	function c(t, e, i, s) {
		s === void 0 && (s = "");
		const n = b(t);
		for (const r of n)
			if (O(e)) {
				if (((e = Oi(e)), Y(i))) return getComputedStyle(r).getPropertyValue(e);
				r.style.setProperty(e, Et(i) && !pr[e] ? i + "px" : i || Jt(i) ? i : "", s);
			} else if (st(e)) {
				const o = {};
				for (const a of e) o[a] = c(r, a);
				return o;
			} else At(e) && ((s = i), yt(e, (o, a) => c(r, a, o, s)));
		return n[0];
	}
	const gr = /^\s*(["'])?(.*?)\1\s*$/;
	function Ye(t, e) {
		return (
			e === void 0 && (e = document.documentElement),
			c(e, "--uk-" + t).replace(gr, "$2")
		);
	}
	const Oi = nt((t) => mr(t)),
		ws = ["webkit", "moz"];
	function mr(t) {
		if (t[0] === "-") return t;
		t = Mt(t);
		const { style: e } = document.documentElement;
		if (t in e) return t;
		let i = ws.length,
			s;
		for (; i--; ) if (((s = "-" + ws[i] + "-" + t), s in e)) return s;
	}
	function w(t) {
		for (
			var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1;
			s < e;
			s++
		)
			i[s - 1] = arguments[s];
		bs(t, i, "add");
	}
	function _(t) {
		for (
			var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1;
			s < e;
			s++
		)
			i[s - 1] = arguments[s];
		bs(t, i, "remove");
	}
	function Ni(t, e) {
		k(t, "class", (i) =>
			(i || "").replace(new RegExp("\\b" + e + "\\b", "g"), "")
		);
	}
	function Mi(t) {
		!(arguments.length <= 1) &&
			arguments[1] &&
			_(t, arguments.length <= 1 ? void 0 : arguments[1]),
			!(arguments.length <= 2) &&
				arguments[2] &&
				w(t, arguments.length <= 2 ? void 0 : arguments[2]);
	}
	function S(t, e) {
		return ([e] = Di(e)), !!e && b(t).some((i) => i.classList.contains(e));
	}
	function R(t, e, i) {
		const s = Di(e);
		Y(i) || (i = !!i);
		for (const n of b(t)) for (const r of s) n.classList.toggle(r, i);
	}
	function bs(t, e, i) {
		e = e.reduce((s, n) => s.concat(Di(n)), []);
		for (const s of b(t)) s.classList[i](...e);
	}
	function Di(t) {
		return String(t).split(/\s|,/).filter(Boolean);
	}
	function xs(t, e, i, s) {
		return (
			i === void 0 && (i = 400),
			s === void 0 && (s = "linear"),
			Promise.all(
				b(t).map(
					(n) =>
						new Promise((r, o) => {
							for (const l in e) {
								const h = c(n, l);
								h === "" && c(n, l, h);
							}
							const a = setTimeout(() => p(n, "transitionend"), i);
							j(
								n,
								"transitionend transitioncanceled",
								(l) => {
									let { type: h } = l;
									clearTimeout(a),
										_(n, "uk-transition"),
										c(n, {
											transitionProperty: "",
											transitionDuration: "",
											transitionTimingFunction: ""
										}),
										h === "transitioncanceled" ? o() : r(n);
								},
								{ self: !0 }
							),
								w(n, "uk-transition"),
								c(n, {
									transitionProperty: Object.keys(e).map(Oi).join(","),
									transitionDuration: i + "ms",
									transitionTimingFunction: s,
									...e
								});
						})
				)
			)
		);
	}
	const I = {
			start: xs,
			stop(t) {
				return p(t, "transitionend"), Promise.resolve();
			},
			cancel(t) {
				p(t, "transitioncanceled");
			},
			inProgress(t) {
				return S(t, "uk-transition");
			}
		},
		Te = "uk-animation-";
	function Bi(t, e, i, s, n) {
		return (
			i === void 0 && (i = 200),
			Promise.all(
				b(t).map(
					(r) =>
						new Promise((o, a) => {
							p(r, "animationcanceled");
							const l = setTimeout(() => p(r, "animationend"), i);
							j(
								r,
								"animationend animationcanceled",
								(h) => {
									let { type: u } = h;
									clearTimeout(l),
										u === "animationcanceled" ? a() : o(r),
										c(r, "animationDuration", ""),
										Ni(r, Te + "\\S*");
								},
								{ self: !0 }
							),
								c(r, "animationDuration", i + "ms"),
								w(r, e, Te + (n ? "leave" : "enter")),
								lt(e, Te) &&
									(s && w(r, "uk-transform-origin-" + s), n && w(r, Te + "reverse"));
						})
				)
			)
		);
	}
	const vr = new RegExp(Te + "(enter|leave)"),
		ft = {
			in: Bi,
			out(t, e, i, s) {
				return Bi(t, e, i, s, !0);
			},
			inProgress(t) {
				return vr.test(k(t, "class"));
			},
			cancel(t) {
				p(t, "animationcanceled");
			}
		},
		Ht = { width: ["left", "right"], height: ["top", "bottom"] };
	function $(t) {
		const e = Xt(t)
			? V(t).getBoundingClientRect()
			: { height: L(t), width: Ie(t), top: 0, left: 0 };
		return {
			height: e.height,
			width: e.width,
			top: e.top,
			left: e.left,
			bottom: e.top + e.height,
			right: e.left + e.width
		};
	}
	function C(t, e) {
		const i = $(t);
		if (t) {
			const { scrollY: n, scrollX: r } = Kt(t),
				o = { height: n, width: r };
			for (const a in Ht) for (const l of Ht[a]) i[l] += o[a];
		}
		if (!e) return i;
		const s = c(t, "position");
		yt(c(t, ["left", "top"]), (n, r) =>
			c(t, r, e[r] - i[r] + y(s === "absolute" && n === "auto" ? Ge(t)[r] : n))
		);
	}
	function Ge(t) {
		let { top: e, left: i } = C(t);
		const {
			ownerDocument: { body: s, documentElement: n },
			offsetParent: r
		} = V(t);
		let o = r || n;
		for (; o && (o === s || o === n) && c(o, "position") === "static"; )
			o = o.parentNode;
		if (Xt(o)) {
			const a = C(o);
			(e -= a.top + y(c(o, "borderTopWidth"))),
				(i -= a.left + y(c(o, "borderLeftWidth")));
		}
		return { top: e - y(c(t, "marginTop")), left: i - y(c(t, "marginLeft")) };
	}
	function Ce(t) {
		const e = [0, 0];
		t = V(t);
		do
			if (
				((e[0] += t.offsetTop),
				(e[1] += t.offsetLeft),
				c(t, "position") === "fixed")
			) {
				const i = Kt(t);
				return (e[0] += i.scrollY), (e[1] += i.scrollX), e;
			}
		while ((t = t.offsetParent));
		return e;
	}
	const L = ys("height"),
		Ie = ys("width");
	function ys(t) {
		const e = wt(t);
		return (i, s) => {
			if (Y(s)) {
				if (Dt(i)) return i["inner" + e];
				if (pe(i)) {
					const n = i.documentElement;
					return Math.max(n["offset" + e], n["scroll" + e]);
				}
				return (
					(i = V(i)),
					(s = c(i, t)),
					(s = s === "auto" ? i["offset" + e] : y(s) || 0),
					s - ee(i, t)
				);
			} else return c(i, t, !s && s !== 0 ? "" : +s + ee(i, t) + "px");
		};
	}
	function ee(t, e, i) {
		return (
			i === void 0 && (i = "border-box"),
			c(t, "boxSizing") === i
				? Ht[e]
						.map(wt)
						.reduce(
							(s, n) => s + y(c(t, "padding" + n)) + y(c(t, "border" + n + "Width")),
							0
						)
				: 0
		);
	}
	function Xe(t) {
		for (const e in Ht)
			for (const i in Ht[e]) if (Ht[e][i] === t) return Ht[e][1 - i];
		return t;
	}
	function Z(t, e, i, s) {
		return (
			e === void 0 && (e = "width"),
			i === void 0 && (i = window),
			s === void 0 && (s = !1),
			O(t)
				? br(t).reduce((n, r) => {
						const o = yr(r);
						return (
							o &&
								(r = $r(
									o === "vh"
										? L(Kt(i))
										: o === "vw"
										? Ie(Kt(i))
										: s
										? i["offset" + wt(e)]
										: $(i)[e],
									r
								)),
							n + y(r)
						);
				  }, 0)
				: y(t)
		);
	}
	const wr = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g,
		br = nt((t) => t.toString().replace(/\s/g, "").match(wr) || []),
		xr = /(?:v[hw]|%)$/,
		yr = nt((t) => (t.match(xr) || [])[0]);
	function $r(t, e) {
		return (t * y(e)) / 100;
	}
	function zi(t) {
		if (document.readyState !== "loading") {
			t();
			return;
		}
		j(document, "DOMContentLoaded", t);
	}
	function pt(t, e) {
		var i;
		return (
			(t == null || (i = t.tagName) == null ? void 0 : i.toLowerCase()) ===
			e.toLowerCase()
		);
	}
	function kr(t) {
		return Hi(t, "");
	}
	function Ot(t, e) {
		return Y(e) ? m(t).innerHTML : Hi(t, e);
	}
	const Hi = Ae("replaceChildren"),
		Sr = Ae("prepend"),
		G = Ae("append"),
		Fi = Ae("before"),
		Je = Ae("after");
	function Ae(t) {
		return function (e, i) {
			var s;
			const n = b(O(i) ? Ft(i) : i);
			return (s = m(e)) == null || s[t](...n), ks(n);
		};
	}
	function ht(t) {
		b(t).forEach((e) => e.remove());
	}
	function Ke(t, e) {
		for (e = V(Fi(t, e)); e.firstChild; ) e = e.firstChild;
		return G(e, t), e;
	}
	function $s(t, e) {
		return b(
			b(t).map((i) => (i.hasChildNodes() ? Ke(b(i.childNodes), e) : G(i, e)))
		);
	}
	function Ze(t) {
		b(t)
			.map(A)
			.filter((e, i, s) => s.indexOf(e) === i)
			.forEach((e) => e.replaceWith(...e.childNodes));
	}
	const Tr = /^\s*<(\w+|!)[^>]*>/,
		Cr = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
	function Ft(t) {
		const e = Cr.exec(t);
		if (e) return document.createElement(e[1]);
		const i = document.createElement("div");
		return (
			Tr.test(t)
				? i.insertAdjacentHTML("beforeend", t.trim())
				: (i.textContent = t),
			ks(i.childNodes)
		);
	}
	function ks(t) {
		return t.length > 1 ? t : t[0];
	}
	function St(t, e) {
		if (!!Xt(t))
			for (e(t), t = t.firstElementChild; t; ) {
				const i = t.nextElementSibling;
				St(t, e), (t = i);
			}
	}
	function m(t, e) {
		return Ss(t) ? V(Ft(t)) : Ai(t, e);
	}
	function N(t, e) {
		return Ss(t) ? b(Ft(t)) : Se(t, e);
	}
	function Ss(t) {
		return O(t) && lt(t.trim(), "<");
	}
	const Lt = typeof window < "u",
		J = Lt && k(document.documentElement, "dir") === "rtl",
		Wt = Lt && "ontouchstart" in window,
		ie = Lt && window.PointerEvent,
		ct = ie ? "pointerdown" : Wt ? "touchstart" : "mousedown",
		se = ie ? "pointermove" : Wt ? "touchmove" : "mousemove",
		gt = ie ? "pointerup" : Wt ? "touchend" : "mouseup",
		jt = ie ? "pointerenter" : Wt ? "" : "mouseenter",
		ne = ie ? "pointerleave" : Wt ? "" : "mouseleave",
		re = ie ? "pointercancel" : "touchcancel",
		B = {
			reads: [],
			writes: [],
			read(t) {
				return this.reads.push(t), Wi(), t;
			},
			write(t) {
				return this.writes.push(t), Wi(), t;
			},
			clear(t) {
				Cs(this.reads, t), Cs(this.writes, t);
			},
			flush: Li
		};
	function Li(t) {
		Ts(B.reads),
			Ts(B.writes.splice(0)),
			(B.scheduled = !1),
			(B.reads.length || B.writes.length) && Wi(t + 1);
	}
	const Ir = 4;
	function Wi(t) {
		B.scheduled ||
			((B.scheduled = !0),
			t && t < Ir
				? Promise.resolve().then(() => Li(t))
				: requestAnimationFrame(() => Li(1)));
	}
	function Ts(t) {
		let e;
		for (; (e = t.shift()); )
			try {
				e();
			} catch (i) {
				console.error(i);
			}
	}
	function Cs(t, e) {
		const i = t.indexOf(e);
		return ~i && t.splice(i, 1);
	}
	function ji() {}
	ji.prototype = {
		positions: [],
		init() {
			this.positions = [];
			let t;
			(this.unbind = T(document, "mousemove", (e) => (t = te(e)))),
				(this.interval = setInterval(() => {
					!t ||
						(this.positions.push(t),
						this.positions.length > 5 && this.positions.shift());
				}, 50));
		},
		cancel() {
			var t;
			(t = this.unbind) == null || t.call(this),
				this.interval && clearInterval(this.interval);
		},
		movesTo(t) {
			if (this.positions.length < 2) return !1;
			const e = t.getBoundingClientRect(),
				{ left: i, right: s, top: n, bottom: r } = e,
				[o] = this.positions,
				a = ve(this.positions),
				l = [o, a];
			return je(a, e)
				? !1
				: [
						[
							{ x: i, y: n },
							{ x: s, y: r }
						],
						[
							{ x: i, y: r },
							{ x: s, y: n }
						]
				  ].some((u) => {
						const d = Ar(l, u);
						return d && je(d, e);
				  });
		}
	};
	function Ar(t, e) {
		let [{ x: i, y: s }, { x: n, y: r }] = t,
			[{ x: o, y: a }, { x: l, y: h }] = e;
		const u = (h - a) * (n - i) - (l - o) * (r - s);
		if (u === 0) return !1;
		const d = ((l - o) * (s - a) - (h - a) * (i - o)) / u;
		return d < 0 ? !1 : { x: i + d * (n - i), y: s + d * (r - s) };
	}
	function oe(t, e, i, s) {
		s === void 0 && (s = !0);
		const n = new IntersectionObserver(
			s
				? (r, o) => {
						r.some((a) => a.isIntersecting) && e(r, o);
				  }
				: e,
			i
		);
		for (const r of b(t)) n.observe(r);
		return n;
	}
	const Pr = Lt && window.ResizeObserver;
	function Ri(t, e, i) {
		return (
			i === void 0 && (i = { box: "border-box" }),
			Pr
				? As(ResizeObserver, t, e, i)
				: (Er(),
				  Pe.add(e),
				  {
						disconnect() {
							Pe.delete(e);
						}
				  })
		);
	}
	let Pe;
	function Er() {
		if (Pe) return;
		Pe = new Set();
		let t;
		const e = () => {
			if (!t) {
				(t = !0), B.read(() => (t = !1));
				for (const i of Pe) i();
			}
		};
		T(window, "load resize", e), T(document, "loadedmetadata load", e, !0);
	}
	function Is(t, e, i) {
		return As(MutationObserver, t, e, i);
	}
	function As(t, e, i, s) {
		const n = new t(i);
		for (const r of b(e)) n.observe(r, s);
		return n;
	}
	const Q = {};
	(Q.events = Q.created = Q.beforeConnect = Q.connected = Q.beforeDisconnect = Q.disconnected = Q.destroy = qi),
		(Q.args = function (t, e) {
			return e !== !1 && qi(e || t);
		}),
		(Q.update = function (t, e) {
			return We(qi(t, dt(e) ? { read: e } : e), "order");
		}),
		(Q.props = function (t, e) {
			if (st(e)) {
				const i = {};
				for (const s of e) i[s] = String;
				e = i;
			}
			return Q.methods(t, e);
		}),
		(Q.computed = Q.methods = function (t, e) {
			return e ? (t ? { ...t, ...e } : e) : t;
		}),
		(Q.data = function (t, e, i) {
			return i
				? Ps(t, e, i)
				: e
				? t
					? function (s) {
							return Ps(t, e, s);
					  }
					: e
				: t;
		});
	function Ps(t, e, i) {
		return Q.computed(dt(t) ? t.call(i, i) : t, dt(e) ? e.call(i, i) : e);
	}
	function qi(t, e) {
		return (
			(t = t && !st(t) ? [t] : t), e ? (t ? t.concat(e) : st(e) ? e : [e]) : t
		);
	}
	function _r(t, e) {
		return Y(e) ? t : e;
	}
	function ae(t, e, i) {
		const s = {};
		if (
			(dt(e) && (e = e.options), e.extends && (t = ae(t, e.extends, i)), e.mixins)
		)
			for (const r of e.mixins) t = ae(t, r, i);
		for (const r in t) n(r);
		for (const r in e) Nt(t, r) || n(r);
		function n(r) {
			s[r] = (Q[r] || _r)(t[r], e[r], i);
		}
		return s;
	}
	function Ee(t, e) {
		e === void 0 && (e = []);
		try {
			return t
				? lt(t, "{")
					? JSON.parse(t)
					: e.length && !g(t, ":")
					? { [e[0]]: t }
					: t.split(";").reduce((i, s) => {
							const [n, r] = s.split(/:(.*)/);
							return n && !Y(r) && (i[n.trim()] = r.trim()), i;
					  }, {})
				: {};
		} catch {
			return {};
		}
	}
	function Es(t) {
		if ((Ue(t) && Vi(t, { func: "playVideo", method: "play" }), Qe(t)))
			try {
				t.play().catch(E);
			} catch {}
	}
	function _s(t) {
		Ue(t) && Vi(t, { func: "pauseVideo", method: "pause" }), Qe(t) && t.pause();
	}
	function Os(t) {
		Ue(t) && Vi(t, { func: "mute", method: "setVolume", value: 0 }),
			Qe(t) && (t.muted = !0);
	}
	function Ns(t) {
		return Qe(t) || Ue(t);
	}
	function Qe(t) {
		return pt(t, "video");
	}
	function Ue(t) {
		return pt(t, "iframe") && (Ms(t) || Ds(t));
	}
	function Ms(t) {
		return !!t.src.match(
			/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
		);
	}
	function Ds(t) {
		return !!t.src.match(/vimeo\.com\/video\/.*/);
	}
	async function Vi(t, e) {
		await Nr(t), Bs(t, e);
	}
	function Bs(t, e) {
		try {
			t.contentWindow.postMessage(JSON.stringify({ event: "command", ...e }), "*");
		} catch {}
	}
	const Yi = "_ukPlayer";
	let Or = 0;
	function Nr(t) {
		if (t[Yi]) return t[Yi];
		const e = Ms(t),
			i = Ds(t),
			s = ++Or;
		let n;
		return (t[Yi] = new Promise((r) => {
			e &&
				j(t, "load", () => {
					const o = () => Bs(t, { event: "listening", id: s });
					(n = setInterval(o, 100)), o();
				}),
				j(window, "message", r, !1, (o) => {
					let { data: a } = o;
					try {
						return (
							(a = JSON.parse(a)),
							a &&
								((e && a.id === s && a.event === "onReady") ||
									(i && Number(a.player_id) === s))
						);
					} catch {}
				}),
				(t.src =
					"" +
					t.src +
					(g(t.src, "?") ? "&" : "?") +
					(e ? "enablejsapi=1" : "api=1&player_id=" + s));
		}).then(() => clearInterval(n)));
	}
	function ti(t, e, i) {
		return (
			e === void 0 && (e = 0),
			i === void 0 && (i = 0),
			q(t)
				? Si(
						...Tt(t)
							.map((s) => {
								const { top: n, left: r, bottom: o, right: a } = ut(s);
								return { top: n - e, left: r - i, bottom: o + e, right: a + i };
							})
							.concat(C(t))
				  )
				: !1
		);
	}
	function Rt(t, e) {
		if ((Dt(t) || pe(t) ? (t = _e(t)) : (t = V(t)), Y(e))) return t.scrollTop;
		t.scrollTop = e;
	}
	function Gi(t, e) {
		let { offset: i = 0 } = e === void 0 ? {} : e;
		const s = q(t) ? Tt(t) : [];
		return s.reduce(
			(a, l, h) => {
				const { scrollTop: u, scrollHeight: d, offsetHeight: f } = l,
					v = ut(l),
					P = d - v.height,
					{ height: x, top: K } = s[h - 1] ? ut(s[h - 1]) : C(t);
				let M = Math.ceil(K - v.top - i + u);
				return (
					i > 0 && f < x + i ? (M += i) : (i = 0),
					M > P ? ((i -= M - P), (M = P)) : M < 0 && ((i -= M), (M = 0)),
					() => n(l, M - u).then(a)
				);
			},
			() => Promise.resolve()
		)();
		function n(a, l) {
			return new Promise((h) => {
				const u = a.scrollTop,
					d = r(Math.abs(l)),
					f = Date.now();
				(function v() {
					const P = o(U((Date.now() - f) / d));
					Rt(a, u + l * P), P === 1 ? h() : requestAnimationFrame(v);
				})();
			});
		}
		function r(a) {
			return 40 * Math.pow(a, 0.375);
		}
		function o(a) {
			return 0.5 * (1 - Math.cos(Math.PI * a));
		}
	}
	function Xi(t, e, i) {
		if ((e === void 0 && (e = 0), i === void 0 && (i = 0), !q(t))) return 0;
		const [s] = Tt(t, /auto|scroll/, !0),
			{ scrollHeight: n, scrollTop: r } = s,
			{ height: o } = ut(s),
			a = n - o,
			l = Ce(t)[0] - Ce(s)[0],
			h = Math.max(0, l - o + e),
			u = Math.min(a, l + t.offsetHeight - i);
		return U((r - h) / (u - h));
	}
	function Tt(t, e, i) {
		e === void 0 && (e = /auto|scroll|hidden/), i === void 0 && (i = !1);
		const s = _e(t);
		let n = $e(t).reverse();
		n = n.slice(n.indexOf(s) + 1);
		const r = bt(n, (o) => c(o, "position") === "fixed");
		return (
			~r && (n = n.slice(r)),
			[s]
				.concat(
					n.filter(
						(o) => e.test(c(o, "overflow")) && (!i || o.scrollHeight > ut(o).height)
					)
				)
				.reverse()
		);
	}
	function ut(t) {
		let e = zs(t);
		e === _e(e) && (e = document.documentElement);
		let i = C(e);
		for (let [s, n, r, o] of [
			["width", "x", "left", "right"],
			["height", "y", "top", "bottom"]
		])
			Dt(zs(e)) || (i[r] += y(c(e, "border" + wt(r) + "Width"))),
				(i[s] = i[n] = (Dt(e) ? _e(e) : e)["client" + wt(s)]),
				(i[o] = i[s] + i[r]);
		return i;
	}
	function _e(t) {
		const {
			document: { scrollingElement: e }
		} = Kt(t);
		return e;
	}
	function zs(t) {
		return t === _e(t) ? window : t;
	}
	const Ct = [
		["width", "x", "left", "right"],
		["height", "y", "top", "bottom"]
	];
	function Hs(t, e, i) {
		i = {
			attach: { element: ["left", "top"], target: ["left", "top"], ...i.attach },
			offset: [0, 0],
			...i
		};
		const s = i.flip ? Ls(t, e, i) : Fs(t, e, i);
		C(t, s);
	}
	function Fs(t, e, i) {
		let { attach: s, offset: n } = {
			attach: { element: ["left", "top"], target: ["left", "top"], ...i.attach },
			offset: [0, 0],
			...i
		};
		const r = C(t),
			o = C(e);
		for (const [a, [l, h, u, d]] of Object.entries(Ct))
			(r[u] = r[h] =
				o[u] + Ws(s.target[a], d, o[l]) - Ws(s.element[a], d, r[l]) + +n[a]),
				(r[d] = r[u] + r[l]);
		return r;
	}
	function Ls(t, e, i) {
		const s = Fs(t, e, i),
			n = C(e);
		let {
				flip: r,
				attach: { element: o, target: a },
				offset: l,
				boundary: h,
				viewport: u,
				viewportPadding: d
			} = i,
			f = Tt(t);
		h === e && (f = f.filter((x) => x !== h));
		const [v] = f;
		f.push(u);
		const P = { ...s };
		for (const [x, [K, M, z, at]] of Object.entries(Ct)) {
			if (r !== !0 && !g(r, M)) continue;
			const Kn = !Rs(s, n, x) && Rs(s, n, 1 - x);
			(u = js(...f.filter(Boolean).map(ut))),
				d && ((u[z] += d), (u[at] -= d)),
				h && !Kn && s[K] <= C(h)[K] && (u = js(u, C(h)));
			const Zn = s[z] >= u[z],
				Qn = s[at] <= u[at];
			if (Zn && Qn) continue;
			let ue;
			if (Kn) {
				if ((o[x] === at && Zn) || (o[x] === z && Qn)) continue;
				if (
					((ue =
						(o[x] === z ? -s[K] : o[x] === at ? s[K] : 0) +
						(a[x] === z ? n[K] : a[x] === at ? -n[K] : 0) -
						l[x] * 2),
					!Ji({ ...s, [z]: s[z] + ue, [at]: s[at] + ue }, v, x))
				) {
					if (Ji(s, v, x)) continue;
					if (i.recursion) return !1;
					const ls = Ls(t, e, {
						...i,
						attach: { element: o.map(qs).reverse(), target: a.map(qs).reverse() },
						offset: l.reverse(),
						flip: r === !0 ? r : [...r, Ct[1 - x][1]],
						recursion: !0
					});
					if (ls && Ji(ls, v, 1 - x)) return ls;
				}
			} else
				ue =
					U(U(s[z], u[z], u[at] - s[K]), n[z] - s[K] + l[x], n[at] - l[x]) - s[z];
			(P[z] = s[M] = s[z] + ue), (P[at] += ue);
		}
		return P;
	}
	function Ws(t, e, i) {
		return t === "center" ? i / 2 : t === e ? i : 0;
	}
	function js() {
		let t = {};
		for (var e = arguments.length, i = new Array(e), s = 0; s < e; s++)
			i[s] = arguments[s];
		for (const n of i)
			for (const [, , r, o] of Ct)
				(t[r] = Math.max(t[r] || 0, n[r])),
					(t[o] = Math.min(...[t[o], n[o]].filter(Boolean)));
		return t;
	}
	function Ji(t, e, i) {
		const s = ut(e),
			[n, , r, o] = Ct[i];
		return (
			(s[r] -= e["scroll" + wt(r)]),
			(s[o] = s[r] + e["scroll" + wt(n)]),
			t[r] >= s[r] && t[o] <= s[o]
		);
	}
	function Rs(t, e, i) {
		const [, , s, n] = Ct[i];
		return t[n] > e[s] && e[n] > t[s];
	}
	function qs(t) {
		for (let e = 0; e < Ct.length; e++) {
			const i = Ct[e].indexOf(t);
			if (~i) return Ct[1 - e][(i % 2) + 2];
		}
	}
	var Mr = Object.freeze({
		__proto__: null,
		ajax: ms,
		getImage: vs,
		transition: xs,
		Transition: I,
		animate: Bi,
		Animation: ft,
		attr: k,
		hasAttr: Bt,
		removeAttr: be,
		data: rt,
		addClass: w,
		removeClass: _,
		removeClasses: Ni,
		replaceClass: Mi,
		hasClass: S,
		toggleClass: R,
		dimensions: $,
		offset: C,
		position: Ge,
		offsetPosition: Ce,
		height: L,
		width: Ie,
		boxModelAdjust: ee,
		flipPosition: Xe,
		toPx: Z,
		ready: zi,
		isTag: pt,
		empty: kr,
		html: Ot,
		replaceChildren: Hi,
		prepend: Sr,
		append: G,
		before: Fi,
		after: Je,
		remove: ht,
		wrapAll: Ke,
		wrapInner: $s,
		unwrap: Ze,
		fragment: Ft,
		apply: St,
		$: m,
		$$: N,
		inBrowser: Lt,
		isRtl: J,
		hasTouch: Wt,
		pointerDown: ct,
		pointerMove: se,
		pointerUp: gt,
		pointerEnter: jt,
		pointerLeave: ne,
		pointerCancel: re,
		on: T,
		off: Ut,
		once: j,
		trigger: p,
		createEvent: zt,
		toEventTargets: _i,
		isTouch: kt,
		getEventPos: te,
		fastdom: B,
		isVoidElement: Ci,
		isVisible: q,
		selInput: xe,
		isInput: Ii,
		selFocusable: qe,
		isFocusable: Ve,
		parent: A,
		filter: ye,
		matches: H,
		closest: ot,
		within: F,
		parents: $e,
		children: D,
		index: Qt,
		hasOwn: Nt,
		hyphenate: Mt,
		camelize: Yt,
		ucfirst: wt,
		startsWith: lt,
		endsWith: Gt,
		includes: g,
		findIndex: bt,
		isArray: st,
		toArray: bi,
		assign: xt,
		isFunction: dt,
		isObject: At,
		isPlainObject: Pt,
		isWindow: Dt,
		isDocument: pe,
		isNode: xi,
		isElement: Xt,
		isBoolean: Le,
		isString: O,
		isNumber: Jt,
		isNumeric: Et,
		isEmpty: ge,
		isUndefined: Y,
		toBoolean: $i,
		toNumber: _t,
		toFloat: y,
		toNode: V,
		toNodes: b,
		toWindow: Kt,
		isEqual: me,
		swap: ki,
		last: ve,
		each: yt,
		sortBy: We,
		uniqueBy: cs,
		clamp: U,
		noop: E,
		intersectRect: Si,
		pointInRect: je,
		Dimensions: we,
		getIndex: Zt,
		memoize: nt,
		Deferred: Re,
		MouseTracker: ji,
		observeIntersection: oe,
		observeResize: Ri,
		observeMutation: Is,
		mergeOptions: ae,
		parseOptions: Ee,
		play: Es,
		pause: _s,
		mute: Os,
		isVideo: Ns,
		positionAt: Hs,
		query: $t,
		queryAll: ke,
		find: Ai,
		findAll: Se,
		escape: Pi,
		css: c,
		getCssVar: Ye,
		propName: Oi,
		isInView: ti,
		scrollTop: Rt,
		scrollIntoView: Gi,
		scrolledOver: Xi,
		scrollParents: Tt,
		offsetViewport: ut
	});
	function Dr(t) {
		const e = t.data;
		(t.use = function (n) {
			if (!n.installed) return n.call(null, this), (n.installed = !0), this;
		}),
			(t.mixin = function (n, r) {
				(r = (O(r) ? t.component(r) : r) || this), (r.options = ae(r.options, n));
			}),
			(t.extend = function (n) {
				n = n || {};
				const r = this,
					o = function (l) {
						this._init(l);
					};
				return (
					(o.prototype = Object.create(r.prototype)),
					(o.prototype.constructor = o),
					(o.options = ae(r.options, n)),
					(o.super = r),
					(o.extend = r.extend),
					o
				);
			}),
			(t.update = function (n, r) {
				n = n ? V(n) : document.body;
				for (const o of $e(n).reverse()) s(o[e], r);
				St(n, (o) => s(o[e], r));
			});
		let i;
		Object.defineProperty(t, "container", {
			get() {
				return i || document.body;
			},
			set(n) {
				i = m(n);
			}
		});
		function s(n, r) {
			if (!!n) for (const o in n) n[o]._connected && n[o]._callUpdate(r);
		}
	}
	function Br(t) {
		(t.prototype._callHook = function (s) {
			var n;
			(n = this.$options[s]) == null || n.forEach((r) => r.call(this));
		}),
			(t.prototype._callConnected = function () {
				this._connected ||
					((this._data = {}),
					(this._computed = {}),
					this._initProps(),
					this._callHook("beforeConnect"),
					(this._connected = !0),
					this._initEvents(),
					this._initObservers(),
					this._callHook("connected"),
					this._callUpdate());
			}),
			(t.prototype._callDisconnected = function () {
				!this._connected ||
					(this._callHook("beforeDisconnect"),
					this._disconnectObservers(),
					this._unbindEvents(),
					this._callHook("disconnected"),
					(this._connected = !1),
					delete this._watch);
			}),
			(t.prototype._callUpdate = function (s) {
				s === void 0 && (s = "update"),
					this._connected &&
						((s === "update" || s === "resize") && this._callWatches(),
						this.$options.update &&
							(this._updates ||
								((this._updates = new Set()),
								B.read(() => {
									this._connected && e.call(this, this._updates), delete this._updates;
								})),
							this._updates.add(s.type || s)));
			}),
			(t.prototype._callWatches = function () {
				if (this._watch) return;
				const s = !Nt(this, "_watch");
				this._watch = B.read(() => {
					this._connected && i.call(this, s), (this._watch = null);
				});
			});
		function e(s) {
			for (const { read: n, write: r, events: o = [] } of this.$options.update) {
				if (!s.has("update") && !o.some((l) => s.has(l))) continue;
				let a;
				n && ((a = n.call(this, this._data, s)), a && Pt(a) && xt(this._data, a)),
					r && a !== !1 && B.write(() => r.call(this, this._data, s));
			}
		}
		function i(s) {
			const {
					$options: { computed: n }
				} = this,
				r = { ...this._computed };
			this._computed = {};
			for (const o in n) {
				const { watch: a, immediate: l } = n[o];
				a &&
					((s && l) || (Nt(r, o) && !me(r[o], this[o]))) &&
					a.call(this, this[o], r[o]);
			}
		}
	}
	function zr(t) {
		let e = 0;
		(t.prototype._init = function (i) {
			(i = i || {}),
				(i.data = Wr(i, this.constructor.options)),
				(this.$options = ae(this.constructor.options, i, this)),
				(this.$el = null),
				(this.$props = {}),
				(this._uid = e++),
				this._initData(),
				this._initMethods(),
				this._initComputeds(),
				this._callHook("created"),
				i.el && this.$mount(i.el);
		}),
			(t.prototype._initData = function () {
				const { data: i = {} } = this.$options;
				for (const s in i) this.$props[s] = this[s] = i[s];
			}),
			(t.prototype._initMethods = function () {
				const { methods: i } = this.$options;
				if (i) for (const s in i) this[s] = i[s].bind(this);
			}),
			(t.prototype._initComputeds = function () {
				const { computed: i } = this.$options;
				if (((this._computed = {}), i)) for (const s in i) Hr(this, s, i[s]);
			}),
			(t.prototype._initProps = function (i) {
				let s;
				i = i || Vs(this.$options, this.$name);
				for (s in i) Y(i[s]) || (this.$props[s] = i[s]);
				const n = [this.$options.computed, this.$options.methods];
				for (s in this.$props) s in i && Fr(n, s) && (this[s] = this.$props[s]);
			}),
			(t.prototype._initEvents = function () {
				this._events = [];
				for (const i of this.$options.events || [])
					if (Nt(i, "handler")) ei(this, i);
					else for (const s in i) ei(this, i[s], s);
			}),
			(t.prototype._unbindEvents = function () {
				this._events.forEach((i) => i()), delete this._events;
			}),
			(t.prototype._initObservers = function () {
				(this._observers = [Rr(this)]),
					this.$options.computed && this.registerObserver(jr(this));
			}),
			(t.prototype.registerObserver = function (i) {
				this._observers.push(i);
			}),
			(t.prototype._disconnectObservers = function () {
				this._observers.forEach((i) => i?.disconnect());
			});
	}
	function Vs(t, e) {
		const i = {},
			{ args: s = [], props: n = {}, el: r } = t;
		if (!n) return i;
		for (const a in n) {
			const l = Mt(a);
			let h = rt(r, l);
			Y(h) ||
				((h = n[a] === Boolean && h === "" ? !0 : Ki(n[a], h)),
				!(l === "target" && (!h || lt(h, "_"))) && (i[a] = h));
		}
		const o = Ee(rt(r, e), s);
		for (const a in o) {
			const l = Yt(a);
			n[l] !== void 0 && (i[l] = Ki(n[l], o[a]));
		}
		return i;
	}
	function Hr(t, e, i) {
		Object.defineProperty(t, e, {
			enumerable: !0,
			get() {
				const { _computed: s, $props: n, $el: r } = t;
				return Nt(s, e) || (s[e] = (i.get || i).call(t, n, r)), s[e];
			},
			set(s) {
				const { _computed: n } = t;
				(n[e] = i.set ? i.set.call(t, s) : s), Y(n[e]) && delete n[e];
			}
		});
	}
	function ei(t, e, i) {
		Pt(e) || (e = { name: i, handler: e });
		let {
			name: s,
			el: n,
			handler: r,
			capture: o,
			passive: a,
			delegate: l,
			filter: h,
			self: u
		} = e;
		if (((n = dt(n) ? n.call(t) : n || t.$el), st(n))) {
			n.forEach((d) => ei(t, { ...e, el: d }, i));
			return;
		}
		!n ||
			(h && !h.call(t)) ||
			t._events.push(
				T(n, s, l ? (O(l) ? l : l.call(t)) : null, O(r) ? t[r] : r.bind(t), {
					passive: a,
					capture: o,
					self: u
				})
			);
	}
	function Fr(t, e) {
		return t.every((i) => !i || !Nt(i, e));
	}
	function Ki(t, e) {
		return t === Boolean
			? $i(e)
			: t === Number
			? _t(e)
			: t === "list"
			? Lr(e)
			: t
			? t(e)
			: e;
	}
	function Lr(t) {
		return st(t)
			? t
			: O(t)
			? t.split(/,(?![^(]*\))/).map((e) => (Et(e) ? _t(e) : $i(e.trim())))
			: [t];
	}
	function Wr(t, e) {
		let { data: i = {} } = t,
			{ args: s = [], props: n = {} } = e;
		st(i) &&
			(i = i
				.slice(0, s.length)
				.reduce((r, o, a) => (Pt(o) ? xt(r, o) : (r[s[a]] = o), r), {}));
		for (const r in i) Y(i[r]) ? delete i[r] : n[r] && (i[r] = Ki(n[r], i[r]));
		return i;
	}
	function jr(t) {
		const { el: e } = t.$options,
			i = new MutationObserver(() => t.$emit());
		return i.observe(e, { childList: !0, subtree: !0 }), i;
	}
	function Rr(t) {
		const { $name: e, $options: i, $props: s } = t,
			{ attrs: n, props: r, el: o } = i;
		if (!r || n === !1) return;
		const a = st(n) ? n : Object.keys(r),
			l = a.map((u) => Mt(u)).concat(e),
			h = new MutationObserver((u) => {
				const d = Vs(i, e);
				u.some((f) => {
					let { attributeName: v } = f;
					const P = v.replace("data-", "");
					return (P === e ? a : [Yt(P), Yt(v)]).some(
						(x) => !Y(d[x]) && d[x] !== s[x]
					);
				}) && t.$reset();
			});
		return (
			h.observe(o, {
				attributes: !0,
				attributeFilter: l.concat(l.map((u) => "data-" + u))
			}),
			h
		);
	}
	function qr(t) {
		const e = t.data;
		(t.prototype.$create = function (s, n, r) {
			return t[s](n, r);
		}),
			(t.prototype.$mount = function (s) {
				const { name: n } = this.$options;
				s[e] || (s[e] = {}),
					!s[e][n] &&
						((s[e][n] = this),
						(this.$el = this.$options.el = this.$options.el || s),
						F(s, document) && this._callConnected());
			}),
			(t.prototype.$reset = function () {
				this._callDisconnected(), this._callConnected();
			}),
			(t.prototype.$destroy = function (s) {
				s === void 0 && (s = !1);
				const { el: n, name: r } = this.$options;
				n && this._callDisconnected(),
					this._callHook("destroy"),
					n != null &&
						n[e] &&
						(delete n[e][r], ge(n[e]) || delete n[e], s && ht(this.$el));
			}),
			(t.prototype.$emit = function (s) {
				this._callUpdate(s);
			}),
			(t.prototype.$update = function (s, n) {
				s === void 0 && (s = this.$el), t.update(s, n);
			}),
			(t.prototype.$getComponent = t.getComponent);
		const i = nt((s) => t.prefix + Mt(s));
		Object.defineProperties(t.prototype, {
			$container: Object.getOwnPropertyDescriptor(t, "container"),
			$name: {
				get() {
					return i(this.$options.name);
				}
			}
		});
	}
	function Vr(t) {
		const e = t.data,
			i = {};
		(t.component = function (s, n) {
			const r = Mt(s);
			if (((s = Yt(r)), !n)) return Pt(i[s]) && (i[s] = t.extend(i[s])), i[s];
			t[s] = function (a, l) {
				const h = t.component(s);
				return h.options.functional
					? new h({ data: Pt(a) ? a : [...arguments] })
					: a
					? N(a).map(u)[0]
					: u();
				function u(d) {
					const f = t.getComponent(d, s);
					if (f)
						if (l) f.$destroy();
						else return f;
					return new h({ el: d, data: l });
				}
			};
			const o = Pt(n) ? { ...n } : n.options;
			return (
				(o.name = s),
				o.install == null || o.install(t, o, s),
				t._initialized &&
					!o.functional &&
					B.read(() => t[s]("[uk-" + r + "],[data-uk-" + r + "]")),
				(i[s] = Pt(n) ? o : n)
			);
		}),
			(t.getComponents = (s) => s?.[e] || {}),
			(t.getComponent = (s, n) => t.getComponents(s)[n]),
			(t.connect = (s) => {
				if (s[e]) for (const n in s[e]) s[e][n]._callConnected();
				for (const n of s.attributes) {
					const r = Ys(n.name);
					r && r in i && t[r](s);
				}
			}),
			(t.disconnect = (s) => {
				for (const n in s[e]) s[e][n]._callDisconnected();
			});
	}
	const Ys = nt((t) =>
			lt(t, "uk-") || lt(t, "data-uk-")
				? Yt(t.replace("data-uk-", "").replace("uk-", ""))
				: !1
		),
		et = function (t) {
			this._init(t);
		};
	(et.util = Mr),
		(et.data = "__uikit__"),
		(et.prefix = "uk-"),
		(et.options = {}),
		(et.version = "3.14.1"),
		Dr(et),
		Br(et),
		zr(et),
		Vr(et),
		qr(et);
	function Yr(t) {
		const { connect: e, disconnect: i } = t;
		if (!Lt || !window.MutationObserver) return;
		B.read(function () {
			document.body && St(document.body, e),
				new MutationObserver((r) => r.forEach(s)).observe(document, {
					childList: !0,
					subtree: !0
				}),
				new MutationObserver((r) => r.forEach(n)).observe(document, {
					attributes: !0,
					subtree: !0
				}),
				(t._initialized = !0);
		});
		function s(r) {
			let { addedNodes: o, removedNodes: a } = r;
			for (const l of o) St(l, e);
			for (const l of a) St(l, i);
		}
		function n(r) {
			var o;
			let { target: a, attributeName: l } = r;
			const h = Ys(l);
			if (!(!h || !(h in t))) {
				if (Bt(a, l)) {
					t[h](a);
					return;
				}
				(o = t.getComponent(a, h)) == null || o.$destroy();
			}
		}
	}
	var tt = {
			connected() {
				!S(this.$el, this.$name) && w(this.$el, this.$name);
			}
		},
		Oe = {
			methods: {
				lazyload(t, e) {
					t === void 0 && (t = this.$el),
						e === void 0 && (e = this.$el),
						this.registerObserver(
							oe(t, (i, s) => {
								for (const n of b(dt(e) ? e() : e))
									N('[loading="lazy"]', n).forEach((r) => be(r, "loading"));
								for (const n of i
									.filter((r) => {
										let { isIntersecting: o } = r;
										return o;
									})
									.map((r) => {
										let { target: o } = r;
										return o;
									}))
									s.unobserve(n);
							})
						);
				}
			}
		},
		It = {
			props: {
				cls: Boolean,
				animation: "list",
				duration: Number,
				velocity: Number,
				origin: String,
				transition: String
			},
			data: {
				cls: !1,
				animation: [!1],
				duration: 200,
				velocity: 0.2,
				origin: !1,
				transition: "ease",
				clsEnter: "uk-togglabe-enter",
				clsLeave: "uk-togglabe-leave",
				initProps: {
					overflow: "",
					height: "",
					paddingTop: "",
					paddingBottom: "",
					marginTop: "",
					marginBottom: "",
					boxShadow: ""
				},
				hideProps: {
					overflow: "hidden",
					height: 0,
					paddingTop: 0,
					paddingBottom: 0,
					marginTop: 0,
					marginBottom: 0,
					boxShadow: "none"
				}
			},
			computed: {
				hasAnimation(t) {
					let { animation: e } = t;
					return !!e[0];
				},
				hasTransition(t) {
					let { animation: e } = t;
					return this.hasAnimation && e[0] === !0;
				}
			},
			methods: {
				toggleElement(t, e, i) {
					return new Promise((s) =>
						Promise.all(
							b(t).map((n) => {
								const r = Le(e) ? e : !this.isToggled(n);
								if (!p(n, "before" + (r ? "show" : "hide"), [this]))
									return Promise.reject();
								const o = (dt(i)
										? i
										: i === !1 || !this.hasAnimation
										? this._toggle
										: this.hasTransition
										? Gs(this)
										: Gr(this))(n, r),
									a = r ? this.clsEnter : this.clsLeave;
								w(n, a), p(n, r ? "show" : "hide", [this]);
								const l = () => {
									_(n, a), p(n, r ? "shown" : "hidden", [this]), this.$update(n);
								};
								return o ? o.then(l, () => (_(n, a), Promise.reject())) : l();
							})
						).then(s, E)
					);
				},
				isToggled(t) {
					return (
						t === void 0 && (t = this.$el),
						([t] = b(t)),
						S(t, this.clsEnter)
							? !0
							: S(t, this.clsLeave)
							? !1
							: this.cls
							? S(t, this.cls.split(" ")[0])
							: q(t)
					);
				},
				_toggle(t, e) {
					if (!t) return;
					e = Boolean(e);
					let i;
					this.cls
						? ((i = g(this.cls, " ") || e !== S(t, this.cls)),
						  i && R(t, this.cls, g(this.cls, " ") ? void 0 : e))
						: ((i = e === t.hidden), i && (t.hidden = !e)),
						N("[autofocus]", t).some((s) => (q(s) ? s.focus() || !0 : s.blur())),
						i && (p(t, "toggled", [e, this]), this.$update(t));
				}
			}
		};
	function Gs(t) {
		let {
			isToggled: e,
			duration: i,
			velocity: s,
			initProps: n,
			hideProps: r,
			transition: o,
			_toggle: a
		} = t;
		return (l, h) => {
			const u = I.inProgress(l),
				d = l.hasChildNodes()
					? y(c(l.firstElementChild, "marginTop")) +
					  y(c(l.lastElementChild, "marginBottom"))
					: 0,
				f = q(l) ? L(l) + (u ? 0 : d) : 0;
			I.cancel(l), e(l) || a(l, !0), L(l, ""), B.flush();
			const v = L(l) + (u ? 0 : d);
			return (
				(i = s * l.offsetHeight + i),
				L(l, f),
				(h
					? I.start(
							l,
							{ ...n, overflow: "hidden", height: v },
							Math.round(i * (1 - f / v)),
							o
					  )
					: I.start(l, r, Math.round(i * (f / v)), o).then(() => a(l, !1))
				).then(() => c(l, n))
			);
		};
	}
	function Gr(t) {
		return (e, i) => {
			ft.cancel(e);
			const { animation: s, duration: n, _toggle: r } = t;
			return i
				? (r(e, !0), ft.in(e, s[0], n, t.origin))
				: ft.out(e, s[1] || s[0], n, t.origin).then(() => r(e, !1));
		};
	}
	var Xs = {
		mixins: [tt, Oe, It],
		props: {
			targets: String,
			active: null,
			collapsible: Boolean,
			multiple: Boolean,
			toggle: String,
			content: String,
			offset: Number
		},
		data: {
			targets: "> *",
			active: !1,
			animation: [!0],
			collapsible: !0,
			multiple: !1,
			clsOpen: "uk-open",
			toggle: "> .uk-accordion-title",
			content: "> .uk-accordion-content",
			offset: 0
		},
		computed: {
			items: {
				get(t, e) {
					let { targets: i } = t;
					return N(i, e);
				},
				watch(t, e) {
					if (e || S(t, this.clsOpen)) return;
					const i =
						(this.active !== !1 && t[Number(this.active)]) ||
						(!this.collapsible && t[0]);
					i && this.toggle(i, !1);
				},
				immediate: !0
			},
			toggles(t) {
				let { toggle: e } = t;
				return this.items.map((i) => m(e, i));
			},
			contents: {
				get(t) {
					let { content: e } = t;
					return this.items.map((i) => m(e, i));
				},
				watch(t) {
					for (const e of t)
						ii(
							e,
							!S(
								this.items.find((i) => i.contains(e)),
								this.clsOpen
							)
						);
				},
				immediate: !0
			}
		},
		connected() {
			this.lazyload();
		},
		events: [
			{
				name: "click",
				delegate() {
					return this.targets + " " + this.$props.toggle;
				},
				handler(t) {
					t.preventDefault(), this.toggle(Qt(this.toggles, t.current));
				}
			}
		],
		methods: {
			toggle(t, e) {
				let i = [this.items[Zt(t, this.items)]];
				const s = ye(this.items, "." + this.clsOpen);
				if (
					(!this.multiple && !g(s, i[0]) && (i = i.concat(s)),
					!(
						!this.collapsible &&
						s.length < 2 &&
						!ye(i, ":not(." + this.clsOpen + ")").length
					))
				)
					for (const n of i)
						this.toggleElement(n, !S(n, this.clsOpen), async (r, o) => {
							R(r, this.clsOpen, o), k(m(this.$props.toggle, r), "aria-expanded", o);
							const a = m((r._wrapper ? "> * " : "") + this.content, r);
							if (e === !1 || !this.hasTransition) {
								ii(a, !o);
								return;
							}
							if (
								(r._wrapper ||
									(r._wrapper = Ke(a, "<div" + (o ? " hidden" : "") + ">")),
								ii(a, !1),
								await Gs(this)(r._wrapper, o),
								ii(a, !o),
								delete r._wrapper,
								Ze(a),
								o)
							) {
								const l = m(this.$props.toggle, r);
								B.read(() => {
									ti(l) || Gi(l, { offset: this.offset });
								});
							}
						});
			}
		}
	};
	function ii(t, e) {
		t && (t.hidden = e);
	}
	var Xr = {
			mixins: [tt, It],
			args: "animation",
			props: { close: String },
			data: {
				animation: [!0],
				selClose: ".uk-alert-close",
				duration: 150,
				hideProps: { opacity: 0, ...It.data.hideProps }
			},
			events: [
				{
					name: "click",
					delegate() {
						return this.selClose;
					},
					handler(t) {
						t.preventDefault(), this.close();
					}
				}
			],
			methods: {
				async close() {
					await this.toggleElement(this.$el), this.$destroy(!0);
				}
			}
		},
		Js = {
			args: "autoplay",
			props: { automute: Boolean, autoplay: Boolean },
			data: { automute: !1, autoplay: !0 },
			connected() {
				(this.inView = this.autoplay === "inview"),
					this.inView && !Bt(this.$el, "preload") && (this.$el.preload = "none"),
					this.automute && Os(this.$el),
					this.registerObserver(oe(this.$el, () => this.$emit(), {}, !1));
			},
			update: {
				read() {
					return Ns(this.$el)
						? {
								visible: q(this.$el) && c(this.$el, "visibility") !== "hidden",
								inView: this.inView && ti(this.$el)
						  }
						: !1;
				},
				write(t) {
					let { visible: e, inView: i } = t;
					!e || (this.inView && !i)
						? _s(this.$el)
						: (this.autoplay === !0 || (this.inView && i)) && Es(this.$el);
				}
			}
		},
		mt = {
			connected() {
				var t;
				this.registerObserver(
					Ri(
						((t = this.$options.resizeTargets) == null ? void 0 : t.call(this)) ||
							this.$el,
						() => this.$emit("resize")
					)
				);
			}
		},
		Jr = {
			mixins: [mt, Js],
			props: { width: Number, height: Number },
			data: { automute: !0 },
			events: {
				"load loadedmetadata"() {
					this.$emit("resize");
				}
			},
			resizeTargets() {
				return [this.$el, A(this.$el)];
			},
			update: {
				read() {
					const { ratio: t, cover: e } = we,
						{ $el: i, width: s, height: n } = this;
					let r = { width: s, height: n };
					if (!r.width || !r.height) {
						const h = {
							width: i.naturalWidth || i.videoWidth || i.clientWidth,
							height: i.naturalHeight || i.videoHeight || i.clientHeight
						};
						r.width
							? (r = t(h, "width", r.width))
							: n
							? (r = t(h, "height", r.height))
							: (r = h);
					}
					const { offsetHeight: o, offsetWidth: a } = Kr(i) || A(i),
						l = e(r, { width: a + (a % 2 ? 1 : 0), height: o + (o % 2 ? 1 : 0) });
					return !l.width || !l.height ? !1 : l;
				},
				write(t) {
					let { height: e, width: i } = t;
					c(this.$el, { height: e, width: i });
				},
				events: ["resize"]
			}
		};
	function Kr(t) {
		for (; (t = A(t)); ) if (c(t, "position") !== "static") return t;
	}
	var le = {
			props: { container: Boolean },
			data: { container: !0 },
			computed: {
				container(t) {
					let { container: e } = t;
					return (e === !0 && this.$container) || (e && m(e));
				}
			}
		},
		Ks = {
			props: { pos: String, offset: null, flip: Boolean },
			data: {
				pos: "bottom-" + (J ? "right" : "left"),
				flip: !0,
				offset: !1,
				viewportPadding: 10
			},
			connected() {
				(this.pos = this.$props.pos.split("-").concat("center").slice(0, 2)),
					(this.axis = g(["top", "bottom"], this.pos[0]) ? "y" : "x");
			},
			methods: {
				positionAt(t, e, i) {
					const [s, n] = this.pos;
					let { offset: r } = this;
					if (!Et(r)) {
						const a = m(r);
						r = a
							? C(a)[this.axis === "x" ? "left" : "top"] -
							  C(e)[this.axis === "x" ? "right" : "bottom"]
							: 0;
					}
					(r = Z(r) + Z(Ye("position-offset", t))),
						(r = [g(["left", "top"], s) ? -r : +r, 0]);
					const o = { element: [Xe(s), n], target: [s, n] };
					if (this.axis === "y") {
						for (const a in o) o[a] = o[a].reverse();
						r = r.reverse();
					}
					Hs(t, e, {
						attach: o,
						offset: r,
						boundary: i,
						viewportPadding: this.boundaryAlign ? 0 : this.viewportPadding,
						flip: this.flip
					});
				}
			}
		};
	let X;
	var Zs = {
		mixins: [le, Oe, Ks, It],
		args: "pos",
		props: {
			mode: "list",
			toggle: Boolean,
			boundary: Boolean,
			boundaryAlign: Boolean,
			delayShow: Number,
			delayHide: Number,
			display: String,
			clsDrop: String
		},
		data: {
			mode: ["click", "hover"],
			toggle: "- *",
			boundary: !0,
			boundaryAlign: !1,
			delayShow: 0,
			delayHide: 800,
			display: null,
			clsDrop: !1,
			animation: ["uk-animation-fade"],
			cls: "uk-open",
			container: !1
		},
		created() {
			this.tracker = new ji();
		},
		beforeConnect() {
			this.clsDrop = this.$props.clsDrop || "uk-" + this.$options.name;
		},
		connected() {
			w(this.$el, this.clsDrop),
				this.toggle &&
					!this.target &&
					((this.target = this.$create("toggle", $t(this.toggle, this.$el), {
						target: this.$el,
						mode: this.mode
					}).$el),
					k(this.target, "aria-haspopup", !0),
					this.lazyload(this.target));
		},
		disconnected() {
			this.isActive() && (X = null);
		},
		events: [
			{
				name: "click",
				delegate() {
					return "." + this.clsDrop + "-close";
				},
				handler(t) {
					t.preventDefault(), this.hide(!1);
				}
			},
			{
				name: "click",
				delegate() {
					return 'a[href^="#"]';
				},
				handler(t) {
					let {
						defaultPrevented: e,
						current: { hash: i }
					} = t;
					!e && i && !F(i, this.$el) && this.hide(!1);
				}
			},
			{
				name: "beforescroll",
				handler() {
					this.hide(!1);
				}
			},
			{
				name: "toggle",
				self: !0,
				handler(t, e) {
					t.preventDefault(),
						this.isToggled() ? this.hide(!1) : this.show(e?.$el, !1);
				}
			},
			{
				name: "toggleshow",
				self: !0,
				handler(t, e) {
					t.preventDefault(), this.show(e?.$el);
				}
			},
			{
				name: "togglehide",
				self: !0,
				handler(t) {
					t.preventDefault(), H(this.$el, ":focus,:hover") || this.hide();
				}
			},
			{
				name: jt + " focusin",
				filter() {
					return g(this.mode, "hover");
				},
				handler(t) {
					kt(t) || this.clearTimers();
				}
			},
			{
				name: ne + " focusout",
				filter() {
					return g(this.mode, "hover");
				},
				handler(t) {
					!kt(t) && t.relatedTarget && this.hide();
				}
			},
			{
				name: "toggled",
				self: !0,
				handler(t, e) {
					!e || (this.clearTimers(), this.position());
				}
			},
			{
				name: "show",
				self: !0,
				handler() {
					(X = this), this.tracker.init();
					for (const t of [
						T(document, ct, (e) => {
							let { target: i } = e;
							return (
								!F(i, this.$el) &&
								j(
									document,
									gt + " " + re + " scroll",
									(s) => {
										let { defaultPrevented: n, type: r, target: o } = s;
										!n &&
											r === gt &&
											i === o &&
											!(this.target && F(i, this.target)) &&
											this.hide(!1);
									},
									!0
								)
							);
						}),
						T(document, "keydown", (e) => {
							e.keyCode === 27 && this.hide(!1);
						}),
						...(this.display === "static"
							? []
							: (() => {
									const e = () => this.$emit();
									return [
										T(window, "resize", e),
										T(document, "scroll", e, !0),
										(() => {
											const i = Ri(Tt(this.$el), e);
											return () => i.disconnect();
										})()
									];
							  })())
					])
						j(this.$el, "hide", t, { self: !0 });
				}
			},
			{
				name: "beforehide",
				self: !0,
				handler() {
					this.clearTimers();
				}
			},
			{
				name: "hide",
				handler(t) {
					let { target: e } = t;
					if (this.$el !== e) {
						X = X === null && F(e, this.$el) && this.isToggled() ? this : X;
						return;
					}
					(X = this.isActive() ? null : X), this.tracker.cancel();
				}
			}
		],
		update: {
			write() {
				this.isToggled() && !S(this.$el, this.clsEnter) && this.position();
			}
		},
		methods: {
			show(t, e) {
				if (
					(t === void 0 && (t = this.target),
					e === void 0 && (e = !0),
					this.isToggled() && t && this.target && t !== this.target && this.hide(!1),
					(this.target = t),
					this.clearTimers(),
					!this.isActive())
				) {
					if (X) {
						if (e && X.isDelaying) {
							this.showTimer = setTimeout(() => H(t, ":hover") && this.show(), 10);
							return;
						}
						let i;
						for (; X && i !== X && !F(this.$el, X.$el); ) (i = X), X.hide(!1);
					}
					this.container &&
						A(this.$el) !== this.container &&
						G(this.container, this.$el),
						(this.showTimer = setTimeout(
							() => this.toggleElement(this.$el, !0),
							(e && this.delayShow) || 0
						));
				}
			},
			hide(t) {
				t === void 0 && (t = !0);
				const e = () => this.toggleElement(this.$el, !1, !1);
				this.clearTimers(),
					(this.isDelaying = Zr(this.$el).some((i) => this.tracker.movesTo(i))),
					t && this.isDelaying
						? (this.hideTimer = setTimeout(this.hide, 50))
						: t && this.delayHide
						? (this.hideTimer = setTimeout(e, this.delayHide))
						: e();
			},
			clearTimers() {
				clearTimeout(this.showTimer),
					clearTimeout(this.hideTimer),
					(this.showTimer = null),
					(this.hideTimer = null),
					(this.isDelaying = !1);
			},
			isActive() {
				return X === this;
			},
			position() {
				_(this.$el, this.clsDrop + "-stack"),
					R(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
				const t = $t(this.boundary, this.$el),
					[e] = Tt(this.$el),
					i = ut(e),
					s = t ? C(t) : i;
				c(this.$el, "maxWidth", "");
				const n = i.width - (this.boundaryAlign ? 0 : 2 * this.viewportPadding);
				if (this.pos[1] === "justify") {
					const r = this.axis === "y" ? "width" : "height",
						o = C(this.target),
						a = this.boundaryAlign ? s : o;
					c(this.$el, r, a[r]);
				} else this.$el.offsetWidth > n && w(this.$el, this.clsDrop + "-stack");
				c(this.$el, "maxWidth", n),
					this.positionAt(this.$el, t && this.boundaryAlign ? t : this.target, t);
			}
		}
	};
	function Zr(t) {
		const e = [];
		return St(t, (i) => c(i, "position") !== "static" && e.push(i)), e;
	}
	var Qr = {
			mixins: [tt],
			args: "target",
			props: { target: Boolean },
			data: { target: !1 },
			computed: {
				input(t, e) {
					return m(xe, e);
				},
				state() {
					return this.input.nextElementSibling;
				},
				target(t, e) {
					let { target: i } = t;
					return (
						i &&
						((i === !0 && A(this.input) === e && this.input.nextElementSibling) ||
							m(i, e))
					);
				}
			},
			update() {
				var t;
				const { target: e, input: i } = this;
				if (!e) return;
				let s;
				const n = Ii(e) ? "value" : "textContent",
					r = e[n],
					o =
						(t = i.files) != null && t[0]
							? i.files[0].name
							: H(i, "select") && (s = N("option", i).filter((a) => a.selected)[0])
							? s.textContent
							: i.value;
				r !== o && (e[n] = o);
			},
			events: [
				{
					name: "change",
					handler() {
						this.$emit();
					}
				},
				{
					name: "reset",
					el() {
						return ot(this.$el, "form");
					},
					handler() {
						this.$emit();
					}
				}
			]
		},
		Qs = {
			mixins: [mt],
			props: { margin: String, firstColumn: Boolean },
			data: { margin: "uk-margin-small-top", firstColumn: "uk-first-column" },
			resizeTargets() {
				return [this.$el, ...bi(this.$el.children)];
			},
			connected() {
				this.registerObserver(Is(this.$el, () => this.$reset(), { childList: !0 }));
			},
			update: {
				read() {
					const t = Zi(this.$el.children);
					return { rows: t, columns: Ur(t) };
				},
				write(t) {
					let { columns: e, rows: i } = t;
					for (const s of i)
						for (const n of s)
							R(n, this.margin, i[0] !== s), R(n, this.firstColumn, e[0].includes(n));
				},
				events: ["resize"]
			}
		};
	function Zi(t) {
		return Us(t, "top", "bottom");
	}
	function Ur(t) {
		const e = [];
		for (const i of t) {
			const s = Us(i, "left", "right");
			for (let n = 0; n < s.length; n++) e[n] = e[n] ? e[n].concat(s[n]) : s[n];
		}
		return J ? e.reverse() : e;
	}
	function Us(t, e, i) {
		const s = [[]];
		for (const n of t) {
			if (!q(n)) continue;
			let r = si(n);
			for (let o = s.length - 1; o >= 0; o--) {
				const a = s[o];
				if (!a[0]) {
					a.push(n);
					break;
				}
				let l;
				if (
					(a[0].offsetParent === n.offsetParent
						? (l = si(a[0]))
						: ((r = si(n, !0)), (l = si(a[0], !0))),
					r[e] >= l[i] - 1 && r[e] !== l[e])
				) {
					s.push([n]);
					break;
				}
				if (r[i] - 1 > l[e] || r[e] === l[e]) {
					a.push(n);
					break;
				}
				if (o === 0) {
					s.unshift([n]);
					break;
				}
			}
		}
		return s;
	}
	function si(t, e) {
		e === void 0 && (e = !1);
		let { offsetTop: i, offsetLeft: s, offsetHeight: n, offsetWidth: r } = t;
		return (
			e && ([i, s] = Ce(t)), { top: i, left: s, bottom: i + n, right: s + r }
		);
	}
	var Ne = {
		connected() {
			to(this._uid, () => this.$emit("scroll"));
		},
		disconnected() {
			eo(this._uid);
		}
	};
	const ni = new Map();
	let Me;
	function to(t, e) {
		(Me =
			Me ||
			T(window, "scroll", () => ni.forEach((i) => i()), {
				passive: !0,
				capture: !0
			})),
			ni.set(t, e);
	}
	function eo(t) {
		ni.delete(t), Me && !ni.size && (Me(), (Me = null));
	}
	var io = {
		extends: Qs,
		mixins: [tt, Ne],
		name: "grid",
		props: { masonry: Boolean, parallax: Number },
		data: {
			margin: "uk-grid-margin",
			clsStack: "uk-grid-stack",
			masonry: !1,
			parallax: 0
		},
		connected() {
			this.masonry && w(this.$el, "uk-flex-top uk-flex-wrap-top");
		},
		update: [
			{
				write(t) {
					let { columns: e } = t;
					R(this.$el, this.clsStack, e.length < 2);
				},
				events: ["resize"]
			},
			{
				read(t) {
					let { columns: e, rows: i } = t;
					if (!e.length || (!this.masonry && !this.parallax) || tn(this.$el))
						return (t.translates = !1), !1;
					let s = !1;
					const n = D(this.$el),
						r = ro(e),
						o = no(n, this.margin) * (i.length - 1),
						a = Math.max(...r) + o;
					this.masonry && ((e = e.map((h) => We(h, "offsetTop"))), (s = so(i, e)));
					let l = Math.abs(this.parallax);
					return (
						l &&
							(l = r.reduce(
								(h, u, d) => Math.max(h, u + o + (d % 2 ? l : l / 8) - a),
								0
							)),
						{ padding: l, columns: e, translates: s, height: s ? a : "" }
					);
				},
				write(t) {
					let { height: e, padding: i } = t;
					c(this.$el, "paddingBottom", i || ""),
						e !== !1 && c(this.$el, "height", e);
				},
				events: ["resize"]
			},
			{
				read() {
					return this.parallax && tn(this.$el)
						? !1
						: {
								scrolled: this.parallax ? Xi(this.$el) * Math.abs(this.parallax) : !1
						  };
				},
				write(t) {
					let { columns: e, scrolled: i, translates: s } = t;
					(i === !1 && !s) ||
						e.forEach((n, r) =>
							n.forEach((o, a) =>
								c(
									o,
									"transform",
									!i && !s
										? ""
										: "translateY(" +
												((s && -s[r][a]) + (i ? (r % 2 ? i : i / 8) : 0)) +
												"px)"
								)
							)
						);
				},
				events: ["scroll", "resize"]
			}
		]
	};
	function tn(t) {
		return D(t).some((e) => c(e, "position") === "absolute");
	}
	function so(t, e) {
		const i = t.map((s) => Math.max(...s.map((n) => n.offsetHeight)));
		return e.map((s) => {
			let n = 0;
			return s.map((r, o) => (n += o ? i[o - 1] - s[o - 1].offsetHeight : 0));
		});
	}
	function no(t, e) {
		const [i] = t.filter((s) => S(s, e));
		return y(i ? c(i, "marginTop") : c(t[0], "paddingLeft"));
	}
	function ro(t) {
		return t.map((e) => e.reduce((i, s) => i + s.offsetHeight, 0));
	}
	var oo = {
		mixins: [mt],
		args: "target",
		props: { target: String, row: Boolean },
		data: { target: "> *", row: !0 },
		computed: {
			elements: {
				get(t, e) {
					let { target: i } = t;
					return N(i, e);
				},
				watch() {
					this.$reset();
				}
			}
		},
		resizeTargets() {
			return [this.$el, ...this.elements];
		},
		update: {
			read() {
				return { rows: (this.row ? Zi(this.elements) : [this.elements]).map(ao) };
			},
			write(t) {
				let { rows: e } = t;
				for (const { heights: i, elements: s } of e)
					s.forEach((n, r) => c(n, "minHeight", i[r]));
			},
			events: ["resize"]
		}
	};
	function ao(t) {
		if (t.length < 2) return { heights: [""], elements: t };
		c(t, "minHeight", "");
		let e = t.map(lo);
		const i = Math.max(...e);
		return {
			heights: t.map((s, n) => (e[n].toFixed(2) === i.toFixed(2) ? "" : i)),
			elements: t
		};
	}
	function lo(t) {
		let e = !1;
		q(t) || ((e = t.style.display), c(t, "display", "block", "important"));
		const i = $(t).height - ee(t, "height", "content-box");
		return e !== !1 && c(t, "display", e), i;
	}
	var ho = {
			mixins: [tt, mt],
			props: {
				expand: Boolean,
				offsetTop: Boolean,
				offsetBottom: Boolean,
				minHeight: Number
			},
			data: { expand: !1, offsetTop: !1, offsetBottom: !1, minHeight: 0 },
			resizeTargets() {
				return [this.$el, document.documentElement];
			},
			update: {
				read(t) {
					let { minHeight: e } = t;
					if (!q(this.$el)) return !1;
					let i = "";
					const s = ee(this.$el, "height", "content-box");
					if (this.expand)
						i = Math.max(
							L(window) -
								($(document.documentElement).height - $(this.$el).height) -
								s,
							0
						);
					else {
						if (((i = "calc(100vh"), this.offsetTop)) {
							const { top: n } = C(this.$el);
							i += n > 0 && n < L(window) / 2 ? " - " + n + "px" : "";
						}
						this.offsetBottom === !0
							? (i += " - " + $(this.$el.nextElementSibling).height + "px")
							: Et(this.offsetBottom)
							? (i += " - " + this.offsetBottom + "vh")
							: this.offsetBottom && Gt(this.offsetBottom, "px")
							? (i += " - " + y(this.offsetBottom) + "px")
							: O(this.offsetBottom) &&
							  (i += " - " + $($t(this.offsetBottom, this.$el)).height + "px"),
							(i += (s ? " - " + s + "px" : "") + ")");
					}
					return { minHeight: i, prev: e };
				},
				write(t) {
					let { minHeight: e } = t;
					c(this.$el, { minHeight: e }),
						this.minHeight &&
							y(c(this.$el, "minHeight")) < this.minHeight &&
							c(this.$el, "minHeight", this.minHeight);
				},
				events: ["resize"]
			}
		},
		en = {
			args: "src",
			props: {
				id: Boolean,
				icon: String,
				src: String,
				style: String,
				width: Number,
				height: Number,
				ratio: Number,
				class: String,
				strokeAnimation: Boolean,
				focusable: Boolean,
				attributes: "list"
			},
			data: {
				ratio: 1,
				include: ["style", "class", "focusable"],
				class: "",
				strokeAnimation: !1
			},
			beforeConnect() {
				this.class += " uk-svg";
			},
			connected() {
				!this.icon &&
					g(this.src, "#") &&
					([this.src, this.icon] = this.src.split("#")),
					(this.svg = this.getSvg().then((t) => {
						if (this._connected) {
							const e = po(t, this.$el);
							return (
								this.svgEl && e !== this.svgEl && ht(this.svgEl),
								this.applyAttributes(e, t),
								(this.svgEl = e)
							);
						}
					}, E)),
					this.strokeAnimation &&
						this.svg.then((t) => {
							this._connected &&
								(nn(t),
								this.registerObserver(
									oe(t, (e, i) => {
										nn(t), i.disconnect();
									})
								));
						});
			},
			disconnected() {
				this.svg.then((t) => {
					this._connected ||
						(Ci(this.$el) && (this.$el.hidden = !1), ht(t), (this.svgEl = null));
				}),
					(this.svg = null);
			},
			methods: {
				async getSvg() {
					return pt(this.$el, "img") &&
						!this.$el.complete &&
						this.$el.loading === "lazy"
						? new Promise((t) => j(this.$el, "load", () => t(this.getSvg())))
						: uo(await co(this.src), this.icon) || Promise.reject("SVG not found.");
				},
				applyAttributes(t, e) {
					for (const r in this.$options.props)
						g(this.include, r) && r in this && k(t, r, this[r]);
					for (const r in this.attributes) {
						const [o, a] = this.attributes[r].split(":", 2);
						k(t, o, a);
					}
					this.id || be(t, "id");
					const i = ["width", "height"];
					let s = i.map((r) => this[r]);
					s.some((r) => r) || (s = i.map((r) => k(e, r)));
					const n = k(e, "viewBox");
					n && !s.some((r) => r) && (s = n.split(" ").slice(2)),
						s.forEach((r, o) => k(t, i[o], y(r) * this.ratio || null));
				}
			}
		};
	const co = nt(async (t) =>
		t
			? lt(t, "data:")
				? decodeURIComponent(t.split(",")[1])
				: (await fetch(t)).text()
			: Promise.reject()
	);
	function uo(t, e) {
		var i;
		return (
			e && g(t, "<symbol") && (t = fo(t, e) || t),
			(t = m(t.substr(t.indexOf("<svg")))),
			((i = t) == null ? void 0 : i.hasChildNodes()) && t
		);
	}
	const sn = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
		ri = {};
	function fo(t, e) {
		if (!ri[t]) {
			(ri[t] = {}), (sn.lastIndex = 0);
			let i;
			for (; (i = sn.exec(t)); )
				ri[t][i[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + i[1] + "svg>";
		}
		return ri[t][e];
	}
	function nn(t) {
		const e = rn(t);
		e && t.style.setProperty("--uk-animation-stroke", e);
	}
	function rn(t) {
		return Math.ceil(
			Math.max(
				0,
				...N("[stroke]", t).map((e) => {
					try {
						return e.getTotalLength();
					} catch {
						return 0;
					}
				})
			)
		);
	}
	function po(t, e) {
		if (Ci(e) || pt(e, "canvas")) {
			e.hidden = !0;
			const s = e.nextElementSibling;
			return on(t, s) ? s : Je(e, t);
		}
		const i = e.lastElementChild;
		return on(t, i) ? i : G(e, t);
	}
	function on(t, e) {
		return pt(t, "svg") && pt(e, "svg") && an(t) === an(e);
	}
	function an(t) {
		return (
			t.innerHTML ||
			new XMLSerializer()
				.serializeToString(t)
				.replace(/<svg.*?>(.*?)<\/svg>/g, "$1")
		).replace(/\s/g, "");
	}
	var go =
			'<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
		mo =
			'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
		vo =
			'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
		wo =
			'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
		bo =
			'<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
		xo =
			'<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
		yo =
			'<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
		$o =
			'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
		ko =
			'<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
		So =
			'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
		To =
			'<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
		Co =
			'<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
		Io =
			'<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
		Ao =
			'<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>',
		Po =
			'<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
		Eo =
			'<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>';
	const oi = {
			spinner: Po,
			totop: Eo,
			marker: vo,
			"close-icon": go,
			"close-large": mo,
			"navbar-toggle-icon": wo,
			"overlay-icon": bo,
			"pagination-next": xo,
			"pagination-previous": yo,
			"search-icon": $o,
			"search-large": ko,
			"search-navbar": So,
			"slidenav-next": To,
			"slidenav-next-large": Co,
			"slidenav-previous": Io,
			"slidenav-previous-large": Ao
		},
		Qi = {
			install: Mo,
			extends: en,
			args: "icon",
			props: ["icon"],
			data: { include: ["focusable"] },
			isIcon: !0,
			beforeConnect() {
				w(this.$el, "uk-icon");
			},
			methods: {
				async getSvg() {
					const t = Do(this.icon);
					if (!t) throw "Icon not found.";
					return t;
				}
			}
		},
		vt = {
			args: !1,
			extends: Qi,
			data: (t) => ({ icon: Mt(t.constructor.options.name) }),
			beforeConnect() {
				w(this.$el, this.$name);
			}
		},
		ln = {
			extends: vt,
			beforeConnect() {
				w(this.$el, "uk-slidenav");
				const t = this.$props.icon;
				this.icon = S(this.$el, "uk-slidenav-large") ? t + "-large" : t;
			}
		},
		_o = {
			extends: vt,
			beforeConnect() {
				this.icon =
					S(this.$el, "uk-search-icon") && $e(this.$el, ".uk-search-large").length
						? "search-large"
						: $e(this.$el, ".uk-search-navbar").length
						? "search-navbar"
						: this.$props.icon;
			}
		},
		Oo = {
			extends: vt,
			beforeConnect() {
				this.icon = "close-" + (S(this.$el, "uk-close-large") ? "large" : "icon");
			}
		},
		No = {
			extends: vt,
			methods: {
				async getSvg() {
					const t = await Qi.methods.getSvg.call(this);
					return (
						this.ratio !== 1 && c(m("circle", t), "strokeWidth", 1 / this.ratio), t
					);
				}
			}
		},
		ai = {};
	function Mo(t) {
		t.icon.add = (e, i) => {
			const s = O(e) ? { [e]: i } : e;
			yt(s, (n, r) => {
				(oi[r] = n), delete ai[r];
			}),
				t._initialized &&
					St(document.body, (n) =>
						yt(t.getComponents(n), (r) => {
							r.$options.isIcon && r.icon in s && r.$reset();
						})
					);
		};
	}
	function Do(t) {
		return oi[t]
			? (ai[t] || (ai[t] = m((oi[Bo(t)] || oi[t]).trim())), ai[t].cloneNode(!0))
			: null;
	}
	function Bo(t) {
		return J ? ki(ki(t, "left", "right"), "previous", "next") : t;
	}
	const zo = Lt && "loading" in HTMLImageElement.prototype;
	var Ho = {
		args: "dataSrc",
		props: {
			dataSrc: String,
			sources: String,
			offsetTop: String,
			offsetLeft: String,
			target: String,
			loading: String
		},
		data: {
			dataSrc: "",
			sources: !1,
			offsetTop: "50vh",
			offsetLeft: "50vw",
			target: !1,
			loading: "lazy"
		},
		connected() {
			if (this.loading !== "lazy") {
				this.load();
				return;
			}
			const t = [this.$el, ...ke(this.$props.target, this.$el)];
			(zo &&
				li(this.$el) &&
				((this.$el.loading = "lazy"), Ui(this.$el), t.length === 1)) ||
				(Ro(this.$el),
				this.registerObserver(
					oe(
						t,
						(e, i) => {
							this.load(), i.disconnect();
						},
						{
							rootMargin:
								Z(this.offsetTop, "height") + "px " + Z(this.offsetLeft, "width") + "px"
						}
					)
				));
		},
		disconnected() {
			this._data.image && (this._data.image.onload = "");
		},
		methods: {
			load() {
				if (this._data.image) return this._data.image;
				const t = li(this.$el)
					? this.$el
					: Lo(this.$el, this.dataSrc, this.sources);
				return be(t, "loading"), Ui(this.$el, t.currentSrc), (this._data.image = t);
			}
		}
	};
	function Ui(t, e) {
		if (li(t)) {
			const i = A(t);
			(qo(i) ? D(i) : [t]).forEach((n) => hn(n, n));
		} else e && !g(t.style.backgroundImage, e) && (c(t, "backgroundImage", "url(" + Pi(e) + ")"), p(t, zt("load", !1)));
	}
	const Fo = ["data-src", "data-srcset", "sizes"];
	function hn(t, e) {
		Fo.forEach((i) => {
			const s = rt(t, i);
			s && k(e, i.replace(/^(data-)+/, ""), s);
		});
	}
	function Lo(t, e, i) {
		const s = new Image();
		return (
			Wo(s, i),
			hn(t, s),
			(s.onload = () => {
				Ui(t, s.currentSrc);
			}),
			k(s, "src", e),
			s
		);
	}
	function Wo(t, e) {
		if (((e = jo(e)), e.length)) {
			const i = Ft("<picture>");
			for (const s of e) {
				const n = Ft("<source>");
				k(n, s), G(i, n);
			}
			G(i, t);
		}
	}
	function jo(t) {
		if (!t) return [];
		if (lt(t, "["))
			try {
				t = JSON.parse(t);
			} catch {
				t = [];
			}
		else t = Ee(t);
		return st(t) || (t = [t]), t.filter((e) => !ge(e));
	}
	function Ro(t) {
		li(t) &&
			!Bt(t, "src") &&
			k(
				t,
				"src",
				'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>'
			);
	}
	function qo(t) {
		return pt(t, "picture");
	}
	function li(t) {
		return pt(t, "img");
	}
	var hi = {
		props: { media: Boolean },
		data: { media: !1 },
		connected() {
			const t = Vo(this.media);
			if (((this.matchMedia = !0), t)) {
				this.mediaObj = window.matchMedia(t);
				const e = () => {
					(this.matchMedia = this.mediaObj.matches),
						p(this.$el, zt("mediachange", !1, !0, [this.mediaObj]));
				};
				(this.offMediaObj = T(this.mediaObj, "change", () => {
					e(), this.$emit("resize");
				})),
					e();
			}
		},
		disconnected() {
			var t;
			(t = this.offMediaObj) == null || t.call(this);
		}
	};
	function Vo(t) {
		if (O(t)) {
			if (lt(t, "@")) {
				const e = "breakpoint-" + t.substr(1);
				t = y(Ye(e));
			} else if (isNaN(t)) return t;
		}
		return t && Et(t) ? "(min-width: " + t + "px)" : "";
	}
	var Yo = {
		mixins: [tt, hi, mt],
		props: { fill: String },
		data: {
			fill: "",
			clsWrapper: "uk-leader-fill",
			clsHide: "uk-leader-hide",
			attrFill: "data-fill"
		},
		computed: {
			fill(t) {
				let { fill: e } = t;
				return e || Ye("leader-fill-content");
			}
		},
		connected() {
			[this.wrapper] = $s(this.$el, '<span class="' + this.clsWrapper + '">');
		},
		disconnected() {
			Ze(this.wrapper.childNodes);
		},
		update: {
			read() {
				return {
					width: Math.trunc(this.$el.offsetWidth / 2),
					fill: this.fill,
					hide: !this.matchMedia
				};
			},
			write(t) {
				let { width: e, fill: i, hide: s } = t;
				R(this.wrapper, this.clsHide, s),
					k(this.wrapper, this.attrFill, new Array(e).join(i));
			},
			events: ["resize"]
		}
	};
	const it = [];
	var ts = {
		mixins: [tt, le, It],
		props: {
			selPanel: String,
			selClose: String,
			escClose: Boolean,
			bgClose: Boolean,
			stack: Boolean
		},
		data: { cls: "uk-open", escClose: !0, bgClose: !0, overlay: !0, stack: !1 },
		computed: {
			panel(t, e) {
				let { selPanel: i } = t;
				return m(i, e);
			},
			transitionElement() {
				return this.panel;
			},
			bgClose(t) {
				let { bgClose: e } = t;
				return e && this.panel;
			}
		},
		beforeDisconnect() {
			g(it, this) && this.toggleElement(this.$el, !1, !1);
		},
		events: [
			{
				name: "click",
				delegate() {
					return this.selClose;
				},
				handler(t) {
					t.preventDefault(), this.hide();
				}
			},
			{
				name: "toggle",
				self: !0,
				handler(t) {
					t.defaultPrevented ||
						(t.preventDefault(), this.isToggled() === g(it, this) && this.toggle());
				}
			},
			{
				name: "beforeshow",
				self: !0,
				handler(t) {
					if (g(it, this)) return !1;
					!this.stack && it.length
						? (Promise.all(it.map((e) => e.hide())).then(this.show),
						  t.preventDefault())
						: it.push(this);
				}
			},
			{
				name: "show",
				self: !0,
				handler() {
					const t = document.documentElement;
					Ie(window) > t.clientWidth &&
						this.overlay &&
						c(document.body, "overflowY", "scroll"),
						this.stack && c(this.$el, "zIndex", y(c(this.$el, "zIndex")) + it.length),
						w(t, this.clsPage),
						this.bgClose &&
							j(
								this.$el,
								"hide",
								T(document, ct, (e) => {
									let { target: i } = e;
									ve(it) !== this ||
										(this.overlay && !F(i, this.$el)) ||
										F(i, this.panel) ||
										j(
											document,
											gt + " " + re + " scroll",
											(s) => {
												let { defaultPrevented: n, type: r, target: o } = s;
												!n && r === gt && i === o && this.hide();
											},
											!0
										);
								}),
								{ self: !0 }
							),
						this.escClose &&
							j(
								this.$el,
								"hide",
								T(document, "keydown", (e) => {
									e.keyCode === 27 && ve(it) === this && this.hide();
								}),
								{ self: !0 }
							);
				}
			},
			{
				name: "shown",
				self: !0,
				handler() {
					Ve(this.$el) || k(this.$el, "tabindex", "-1"),
						m(":focus", this.$el) || this.$el.focus();
				}
			},
			{
				name: "hidden",
				self: !0,
				handler() {
					g(it, this) && it.splice(it.indexOf(this), 1),
						it.length || c(document.body, "overflowY", ""),
						c(this.$el, "zIndex", ""),
						it.some((t) => t.clsPage === this.clsPage) ||
							_(document.documentElement, this.clsPage);
				}
			}
		],
		methods: {
			toggle() {
				return this.isToggled() ? this.hide() : this.show();
			},
			show() {
				return this.container && A(this.$el) !== this.container
					? (G(this.container, this.$el),
					  new Promise((t) => requestAnimationFrame(() => this.show().then(t))))
					: this.toggleElement(this.$el, !0, cn(this));
			},
			hide() {
				return this.toggleElement(this.$el, !1, cn(this));
			}
		}
	};
	function cn(t) {
		let { transitionElement: e, _toggle: i } = t;
		return (s, n) =>
			new Promise((r, o) =>
				j(s, "show hide", () => {
					s._reject == null || s._reject(), (s._reject = o), i(s, n);
					const a = j(
							e,
							"transitionstart",
							() => {
								j(e, "transitionend transitioncancel", r, { self: !0 }),
									clearTimeout(l);
							},
							{ self: !0 }
						),
						l = setTimeout(() => {
							a(), r();
						}, Go(c(e, "transitionDuration")));
				})
			).then(() => delete s._reject);
	}
	function Go(t) {
		return t ? (Gt(t, "ms") ? y(t) : y(t) * 1e3) : 0;
	}
	var Xo = {
		install: Jo,
		mixins: [ts],
		data: {
			clsPage: "uk-modal-page",
			selPanel: ".uk-modal-dialog",
			selClose:
				".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
		},
		events: [
			{
				name: "show",
				self: !0,
				handler() {
					S(this.panel, "uk-margin-auto-vertical")
						? w(this.$el, "uk-flex")
						: c(this.$el, "display", "block"),
						L(this.$el);
				}
			},
			{
				name: "hidden",
				self: !0,
				handler() {
					c(this.$el, "display", ""), _(this.$el, "uk-flex");
				}
			}
		]
	};
	function Jo(t) {
		let { modal: e } = t;
		(e.dialog = function (s, n) {
			const r = e(
				'<div class="uk-modal"> <div class="uk-modal-dialog">' +
					s +
					"</div> </div>",
				n
			);
			return (
				r.show(),
				T(
					r.$el,
					"hidden",
					async () => {
						await Promise.resolve(), r.$destroy(!0);
					},
					{ self: !0 }
				),
				r
			);
		}),
			(e.alert = function (s, n) {
				return i(
					(r) => {
						let { labels: o } = r;
						return (
							'<div class="uk-modal-body">' +
							(O(s) ? s : Ot(s)) +
							'</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' +
							o.ok +
							"</button> </div>"
						);
					},
					n,
					(r) => r.resolve()
				);
			}),
			(e.confirm = function (s, n) {
				return i(
					(r) => {
						let { labels: o } = r;
						return (
							'<form> <div class="uk-modal-body">' +
							(O(s) ? s : Ot(s)) +
							'</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' +
							o.cancel +
							'</button> <button class="uk-button uk-button-primary" autofocus>' +
							o.ok +
							"</button> </div> </form>"
						);
					},
					n,
					(r) => r.reject()
				);
			}),
			(e.prompt = function (s, n, r) {
				return i(
					(o) => {
						let { labels: a } = o;
						return (
							'<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' +
							(O(s) ? s : Ot(s)) +
							'</label> <input class="uk-input" value="' +
							(n || "") +
							'" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' +
							a.cancel +
							'</button> <button class="uk-button uk-button-primary">' +
							a.ok +
							"</button> </div> </form>"
						);
					},
					r,
					(o) => o.resolve(null),
					(o) => m("input", o.$el).value
				);
			}),
			(e.labels = { ok: "Ok", cancel: "Cancel" });
		function i(s, n, r, o) {
			n = { bgClose: !1, escClose: !0, labels: e.labels, ...n };
			const a = e.dialog(s(n), n),
				l = new Re();
			let h = !1;
			return (
				T(a.$el, "submit", "form", (u) => {
					u.preventDefault(), l.resolve(o?.(a)), (h = !0), a.hide();
				}),
				T(a.$el, "hide", () => !h && r(l)),
				(l.promise.dialog = a),
				l.promise
			);
		}
	}
	var Ko = {
			extends: Xs,
			data: { targets: "> .uk-parent", toggle: "> a", content: "> ul" }
		},
		Zo = {
			mixins: [tt, le],
			props: {
				dropdown: String,
				mode: "list",
				align: String,
				offset: Number,
				boundary: Boolean,
				boundaryAlign: Boolean,
				clsDrop: String,
				delayShow: Number,
				delayHide: Number,
				dropbar: Boolean,
				dropbarAnchor: Boolean,
				duration: Number
			},
			data: {
				dropdown: ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle",
				align: J ? "right" : "left",
				clsDrop: "uk-navbar-dropdown",
				mode: void 0,
				offset: void 0,
				delayShow: void 0,
				delayHide: void 0,
				boundaryAlign: void 0,
				flip: "x",
				boundary: !0,
				dropbar: !1,
				dropbarAnchor: !1,
				duration: 200,
				container: !1
			},
			computed: {
				boundary(t, e) {
					let { boundary: i } = t;
					return i === !0 ? e : i;
				},
				dropbarAnchor(t, e) {
					let { dropbarAnchor: i } = t;
					return $t(i, e);
				},
				pos(t) {
					let { align: e } = t;
					return "bottom-" + e;
				},
				dropbar: {
					get(t) {
						let { dropbar: e } = t;
						return e
							? ((e =
									this._dropbar ||
									$t(e, this.$el) ||
									m("+ .uk-navbar-dropbar", this.$el)),
							  e || (this._dropbar = m("<div></div>")))
							: null;
					},
					watch(t) {
						w(t, "uk-navbar-dropbar");
					},
					immediate: !0
				},
				dropContainer(t, e) {
					return this.container || e;
				},
				dropdowns: {
					get(t, e) {
						let { clsDrop: i } = t;
						const s = N("." + i, e);
						if (this.dropContainer !== e)
							for (const r of N("." + i, this.dropContainer)) {
								var n;
								const o = (n = this.getDropdown(r)) == null ? void 0 : n.target;
								!g(s, r) && o && F(o, this.$el) && s.push(r);
							}
						return s;
					},
					watch(t) {
						this.$create(
							"drop",
							t.filter((e) => !this.getDropdown(e)),
							{
								...this.$props,
								boundary: this.boundary,
								pos: this.pos,
								offset: this.dropbar || this.offset
							}
						);
					},
					immediate: !0
				},
				toggles: {
					get(t, e) {
						let { dropdown: i } = t;
						return N(i, e);
					},
					watch() {
						const t = S(this.$el, "uk-navbar-justify");
						for (const e of N(
							".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right",
							this.$el
						))
							c(e, "flexGrow", t ? N(this.dropdown, e).length : "");
					},
					immediate: !0
				}
			},
			disconnected() {
				this.dropbar && ht(this.dropbar), delete this._dropbar;
			},
			events: [
				{
					name: "mouseover focusin",
					delegate() {
						return this.dropdown;
					},
					handler(t) {
						let { current: e } = t;
						const i = this.getActive();
						i &&
							g(i.mode, "hover") &&
							i.target &&
							!F(i.target, e) &&
							!i.isDelaying &&
							i.hide(!1);
					}
				},
				{
					name: "keydown",
					delegate() {
						return this.dropdown;
					},
					handler(t) {
						const { current: e, keyCode: i } = t,
							s = this.getActive();
						i === qt.DOWN &&
							Bt(e, "aria-expanded") &&
							(t.preventDefault(),
							!s || s.target !== e
								? (e.click(),
								  j(this.dropContainer, "show", (n) => {
										let { target: r } = n;
										return dn(r);
								  }))
								: dn(s.$el)),
							un(t, this.toggles, s);
					}
				},
				{
					name: "keydown",
					el() {
						return this.dropContainer;
					},
					delegate() {
						return "." + this.clsDrop;
					},
					handler(t) {
						const { current: e, keyCode: i } = t;
						if (!g(this.dropdowns, e)) return;
						const s = this.getActive(),
							n = N(qe, e),
							r = bt(n, (a) => H(a, ":focus"));
						if (
							(i === qt.UP && (t.preventDefault(), r > 0 && n[r - 1].focus()),
							i === qt.DOWN &&
								(t.preventDefault(), r < n.length - 1 && n[r + 1].focus()),
							i === qt.ESC)
						) {
							var o;
							s == null || (o = s.target) == null || o.focus();
						}
						un(t, this.toggles, s);
					}
				},
				{
					name: "mouseleave",
					el() {
						return this.dropbar;
					},
					filter() {
						return this.dropbar;
					},
					handler() {
						const t = this.getActive();
						t &&
							g(t.mode, "hover") &&
							!this.dropdowns.some((e) => H(e, ":hover")) &&
							t.hide();
					}
				},
				{
					name: "beforeshow",
					el() {
						return this.dropContainer;
					},
					filter() {
						return this.dropbar;
					},
					handler(t, e) {
						let { $el: i } = e;
						!S(i, this.clsDrop) ||
							(A(this.dropbar) || Je(this.dropbarAnchor || this.$el, this.dropbar),
							w(i, this.clsDrop + "-dropbar"));
					}
				},
				{
					name: "show",
					el() {
						return this.dropContainer;
					},
					filter() {
						return this.dropbar;
					},
					handler(t, e) {
						let { $el: i, pos: [s] = [] } = e;
						!S(i, this.clsDrop) ||
							(s === "bottom" &&
								this.transitionTo(
									C(i).bottom - C(this.dropbar).top + y(c(i, "marginBottom")),
									i
								));
					}
				},
				{
					name: "beforehide",
					el() {
						return this.dropContainer;
					},
					filter() {
						return this.dropbar;
					},
					handler(t, e) {
						let { $el: i } = e;
						const s = this.getActive();
						H(this.dropbar, ":hover") &&
							s?.$el === i &&
							!this.toggles.some((n) => s.target !== n && H(n, ":focus")) &&
							t.preventDefault();
					}
				},
				{
					name: "hide",
					el() {
						return this.dropContainer;
					},
					filter() {
						return this.dropbar;
					},
					handler(t, e) {
						let { $el: i } = e;
						if (!S(i, this.clsDrop)) return;
						const s = this.getActive();
						(!s || s?.$el === i) && this.transitionTo(0);
					}
				}
			],
			methods: {
				getActive() {
					return X && F(X.target, this.$el) && X;
				},
				transitionTo(t, e) {
					const { dropbar: i } = this,
						s = q(i) ? L(i) : 0;
					return (
						(e = s < t && e),
						c(e, "clip", "rect(0," + e.offsetWidth + "px," + s + "px,0)"),
						L(i, s),
						I.cancel([e, i]),
						Promise.all([
							I.start(i, { height: t }, this.duration),
							I.start(
								e,
								{ clip: "rect(0," + e.offsetWidth + "px," + t + "px,0)" },
								this.duration
							)
						])
							.catch(E)
							.then(() => {
								c(e, { clip: "" }), this.$update(i);
							})
					);
				},
				getDropdown(t) {
					return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
				}
			}
		};
	function un(t, e, i) {
		const { current: s, keyCode: n } = t,
			r = i?.target || s,
			o = e.indexOf(r);
		n === qt.LEFT && o > 0 && (i?.hide(!1), e[o - 1].focus()),
			n === qt.RIGHT && o < e.length - 1 && (i?.hide(!1), e[o + 1].focus()),
			n === qt.TAB && (r.focus(), i?.hide(!1));
	}
	function dn(t) {
		if (!m(":focus", t)) {
			var e;
			(e = m(qe, t)) == null || e.focus();
		}
	}
	const qt = { TAB: 9, ESC: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };
	var fn = {
		props: { swiping: Boolean },
		data: { swiping: !0 },
		computed: {
			swipeTarget(t, e) {
				return e;
			}
		},
		connected() {
			!this.swiping ||
				ei(this, {
					el: this.swipeTarget,
					name: ct,
					passive: !0,
					handler(t) {
						if (!kt(t)) return;
						const e = te(t),
							i = "tagName" in t.target ? t.target : A(t.target);
						j(document, gt + " " + re + " scroll", (s) => {
							const { x: n, y: r } = te(s);
							((s.type !== "scroll" && i && n && Math.abs(e.x - n) > 100) ||
								(r && Math.abs(e.y - r) > 100)) &&
								setTimeout(() => {
									p(i, "swipe"), p(i, "swipe" + Qo(e.x, e.y, n, r));
								});
						});
					}
				});
		}
	};
	function Qo(t, e, i, s) {
		return Math.abs(t - i) >= Math.abs(e - s)
			? t - i > 0
				? "Left"
				: "Right"
			: e - s > 0
			? "Up"
			: "Down";
	}
	var Uo = {
		mixins: [ts, fn],
		args: "mode",
		props: { mode: String, flip: Boolean, overlay: Boolean },
		data: {
			mode: "slide",
			flip: !1,
			overlay: !1,
			clsPage: "uk-offcanvas-page",
			clsContainer: "uk-offcanvas-container",
			selPanel: ".uk-offcanvas-bar",
			clsFlip: "uk-offcanvas-flip",
			clsContainerAnimation: "uk-offcanvas-container-animation",
			clsSidebarAnimation: "uk-offcanvas-bar-animation",
			clsMode: "uk-offcanvas",
			clsOverlay: "uk-offcanvas-overlay",
			selClose: ".uk-offcanvas-close",
			container: !1
		},
		computed: {
			clsFlip(t) {
				let { flip: e, clsFlip: i } = t;
				return e ? i : "";
			},
			clsOverlay(t) {
				let { overlay: e, clsOverlay: i } = t;
				return e ? i : "";
			},
			clsMode(t) {
				let { mode: e, clsMode: i } = t;
				return i + "-" + e;
			},
			clsSidebarAnimation(t) {
				let { mode: e, clsSidebarAnimation: i } = t;
				return e === "none" || e === "reveal" ? "" : i;
			},
			clsContainerAnimation(t) {
				let { mode: e, clsContainerAnimation: i } = t;
				return e !== "push" && e !== "reveal" ? "" : i;
			},
			transitionElement(t) {
				let { mode: e } = t;
				return e === "reveal" ? A(this.panel) : this.panel;
			}
		},
		update: {
			read() {
				this.isToggled() && !q(this.$el) && this.hide();
			},
			events: ["resize"]
		},
		events: [
			{
				name: "click",
				delegate() {
					return 'a[href^="#"]';
				},
				handler(t) {
					let {
						current: { hash: e },
						defaultPrevented: i
					} = t;
					!i && e && m(e, document.body) && this.hide();
				}
			},
			{
				name: "touchstart",
				passive: !0,
				el() {
					return this.panel;
				},
				handler(t) {
					let { targetTouches: e } = t;
					e.length === 1 && (this.clientY = e[0].clientY);
				}
			},
			{
				name: "touchmove",
				self: !0,
				passive: !1,
				filter() {
					return this.overlay;
				},
				handler(t) {
					t.cancelable && t.preventDefault();
				}
			},
			{
				name: "touchmove",
				passive: !1,
				el() {
					return this.panel;
				},
				handler(t) {
					if (t.targetTouches.length !== 1) return;
					const e = t.targetTouches[0].clientY - this.clientY,
						{ scrollTop: i, scrollHeight: s, clientHeight: n } = this.panel;
					(n >= s || (i === 0 && e > 0) || (s - i <= n && e < 0)) &&
						t.cancelable &&
						t.preventDefault();
				}
			},
			{
				name: "show",
				self: !0,
				handler() {
					this.mode === "reveal" &&
						!S(A(this.panel), this.clsMode) &&
						(Ke(this.panel, "<div>"), w(A(this.panel), this.clsMode)),
						c(document.documentElement, "overflowY", this.overlay ? "hidden" : ""),
						w(document.body, this.clsContainer, this.clsFlip),
						c(document.body, "touch-action", "pan-y pinch-zoom"),
						c(this.$el, "display", "block"),
						w(this.$el, this.clsOverlay),
						w(
							this.panel,
							this.clsSidebarAnimation,
							this.mode !== "reveal" ? this.clsMode : ""
						),
						L(document.body),
						w(document.body, this.clsContainerAnimation),
						this.clsContainerAnimation && ta();
				}
			},
			{
				name: "hide",
				self: !0,
				handler() {
					_(document.body, this.clsContainerAnimation),
						c(document.body, "touch-action", "");
				}
			},
			{
				name: "hidden",
				self: !0,
				handler() {
					this.clsContainerAnimation && ea(),
						this.mode === "reveal" && Ze(this.panel),
						_(this.panel, this.clsSidebarAnimation, this.clsMode),
						_(this.$el, this.clsOverlay),
						c(this.$el, "display", ""),
						_(document.body, this.clsContainer, this.clsFlip),
						c(document.documentElement, "overflowY", "");
				}
			},
			{
				name: "swipeLeft swipeRight",
				handler(t) {
					this.isToggled() && Gt(t.type, "Left") ^ this.flip && this.hide();
				}
			}
		]
	};
	function ta() {
		pn().content += ",user-scalable=0";
	}
	function ea() {
		const t = pn();
		t.content = t.content.replace(/,user-scalable=0$/, "");
	}
	function pn() {
		return (
			m('meta[name="viewport"]', document.head) ||
			G(document.head, '<meta name="viewport">')
		);
	}
	var ia = {
			mixins: [tt, mt],
			props: { selContainer: String, selContent: String, minHeight: Number },
			data: {
				selContainer: ".uk-modal",
				selContent: ".uk-modal-dialog",
				minHeight: 150
			},
			computed: {
				container(t, e) {
					let { selContainer: i } = t;
					return ot(e, i);
				},
				content(t, e) {
					let { selContent: i } = t;
					return ot(e, i);
				}
			},
			resizeTargets() {
				return [this.container, this.content];
			},
			update: {
				read() {
					return !this.content || !this.container || !q(this.$el)
						? !1
						: {
								max: Math.max(
									this.minHeight,
									L(this.container) - ($(this.content).height - L(this.$el))
								)
						  };
				},
				write(t) {
					let { max: e } = t;
					c(this.$el, { minHeight: this.minHeight, maxHeight: e });
				},
				events: ["resize"]
			}
		},
		sa = {
			mixins: [mt],
			props: ["width", "height"],
			resizeTargets() {
				return [this.$el, A(this.$el)];
			},
			connected() {
				w(this.$el, "uk-responsive-width");
			},
			update: {
				read() {
					return q(this.$el) && this.width && this.height
						? { width: Ie(A(this.$el)), height: this.height }
						: !1;
				},
				write(t) {
					L(
						this.$el,
						we.contain({ height: this.height, width: this.width }, t).height
					);
				},
				events: ["resize"]
			}
		},
		na = {
			props: { offset: Number },
			data: { offset: 0 },
			methods: {
				async scrollTo(t) {
					(t = (t && m(t)) || document.body),
						p(this.$el, "beforescroll", [this, t]) &&
							(await Gi(t, { offset: this.offset }),
							p(this.$el, "scrolled", [this, t]));
				}
			},
			events: {
				click(t) {
					t.defaultPrevented || (t.preventDefault(), this.scrollTo(gn(this.$el)));
				}
			}
		};
	function gn(t) {
		return document.getElementById(decodeURIComponent(t.hash).substring(1));
	}
	var ra = {
			mixins: [Ne],
			args: "cls",
			props: {
				cls: String,
				target: String,
				hidden: Boolean,
				offsetTop: Number,
				offsetLeft: Number,
				repeat: Boolean,
				delay: Number
			},
			data: () => ({
				cls: "",
				target: !1,
				hidden: !0,
				offsetTop: 0,
				offsetLeft: 0,
				repeat: !1,
				delay: 0,
				inViewClass: "uk-scrollspy-inview"
			}),
			computed: {
				elements: {
					get(t, e) {
						let { target: i } = t;
						return i ? N(i, e) : [e];
					},
					watch(t, e) {
						this.hidden &&
							c(ye(t, ":not(." + this.inViewClass + ")"), "visibility", "hidden"),
							me(t, e) || this.$reset();
					},
					immediate: !0
				}
			},
			connected() {
				(this._data.elements = new Map()),
					this.registerObserver(
						oe(
							this.elements,
							(t) => {
								const e = this._data.elements;
								for (const { target: i, isIntersecting: s } of t) {
									e.has(i) || e.set(i, { cls: rt(i, "uk-scrollspy-class") || this.cls });
									const n = e.get(i);
									(!this.repeat && n.show) || (n.show = s);
								}
								this.$emit();
							},
							{
								rootMargin:
									Z(this.offsetTop, "height") -
									1 +
									"px " +
									(Z(this.offsetLeft, "width") - 1) +
									"px"
							},
							!1
						)
					);
			},
			disconnected() {
				for (const [t, e] of this._data.elements.entries())
					_(t, this.inViewClass, e?.cls || "");
			},
			update: [
				{
					write(t) {
						for (const [e, i] of t.elements.entries())
							i.show && !i.inview && !i.queued
								? ((i.queued = !0),
								  (t.promise = (t.promise || Promise.resolve())
										.then(() => new Promise((s) => setTimeout(s, this.delay)))
										.then(() => {
											this.toggle(e, !0),
												setTimeout(() => {
													(i.queued = !1), this.$emit();
												}, 300);
										})))
								: !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, !1);
					}
				}
			],
			methods: {
				toggle(t, e) {
					const i = this._data.elements.get(t);
					if (
						(i.off == null || i.off(),
						c(t, "visibility", !e && this.hidden ? "hidden" : ""),
						R(t, this.inViewClass, e),
						R(t, i.cls),
						/\buk-animation-/.test(i.cls))
					) {
						const s = () => Ni(t, "uk-animation-[\\w-]+");
						e ? (i.off = j(t, "animationcancel animationend", s)) : s();
					}
					p(t, e ? "inview" : "outview"), (i.inview = e), this.$update(t);
				}
			}
		},
		oa = {
			mixins: [Ne],
			props: {
				cls: String,
				closest: String,
				scroll: Boolean,
				overflow: Boolean,
				offset: Number
			},
			data: { cls: "uk-active", closest: !1, scroll: !1, overflow: !0, offset: 0 },
			computed: {
				links: {
					get(t, e) {
						return N('a[href^="#"]', e).filter((i) => i.hash);
					},
					watch(t) {
						this.scroll && this.$create("scroll", t, { offset: this.offset || 0 });
					},
					immediate: !0
				},
				elements(t) {
					let { closest: e } = t;
					return ot(this.links, e || "*");
				}
			},
			update: [
				{
					read() {
						const t = this.links.map(gn).filter(Boolean),
							{ length: e } = t;
						if (!e || !q(this.$el)) return !1;
						const [i] = Tt(t, /auto|scroll/, !0),
							{ scrollTop: s, scrollHeight: n } = i,
							r = ut(i),
							o = n - r.height;
						let a = !1;
						if (s === o) a = e - 1;
						else {
							for (
								let l = 0;
								l < t.length && !(C(t[l]).top - r.top - this.offset > 0);
								l++
							)
								a = +l;
							a === !1 && this.overflow && (a = 0);
						}
						return { active: a };
					},
					write(t) {
						let { active: e } = t;
						const i = e !== !1 && !S(this.elements[e], this.cls);
						this.links.forEach((s) => s.blur());
						for (let s = 0; s < this.elements.length; s++)
							R(this.elements[s], this.cls, +s === e);
						i && p(this.$el, "active", [e, this.elements[e]]);
					},
					events: ["scroll", "resize"]
				}
			]
		},
		aa = {
			mixins: [tt, hi, mt, Ne],
			props: {
				position: String,
				top: null,
				bottom: null,
				start: null,
				end: null,
				offset: String,
				overflowFlip: Boolean,
				animation: String,
				clsActive: String,
				clsInactive: String,
				clsFixed: String,
				clsBelow: String,
				selTarget: String,
				showOnUp: Boolean,
				targetOffset: Number
			},
			data: {
				position: "top",
				top: !1,
				bottom: !1,
				start: !1,
				end: !1,
				offset: 0,
				overflowFlip: !1,
				animation: "",
				clsActive: "uk-active",
				clsInactive: "",
				clsFixed: "uk-sticky-fixed",
				clsBelow: "uk-sticky-below",
				selTarget: "",
				showOnUp: !1,
				targetOffset: !1
			},
			computed: {
				selTarget(t, e) {
					let { selTarget: i } = t;
					return (i && m(i, e)) || e;
				}
			},
			resizeTargets() {
				return document.documentElement;
			},
			connected() {
				(this.start = vn(this.start || this.top)),
					(this.end = vn(this.end || this.bottom)),
					(this.placeholder =
						m("+ .uk-sticky-placeholder", this.$el) ||
						m('<div class="uk-sticky-placeholder"></div>')),
					(this.isFixed = !1),
					this.setActive(!1);
			},
			disconnected() {
				this.isFixed && (this.hide(), _(this.selTarget, this.clsInactive)),
					ht(this.placeholder),
					(this.placeholder = null);
			},
			events: [
				{
					name: "resize",
					el() {
						return window;
					},
					handler() {
						this.$emit("resize");
					}
				},
				{
					name: "load hashchange popstate",
					el() {
						return window;
					},
					filter() {
						return this.targetOffset !== !1;
					},
					handler() {
						!location.hash ||
							Rt(window) === 0 ||
							setTimeout(() => {
								const t = C(m(location.hash)),
									e = C(this.$el);
								this.isFixed &&
									Si(t, e) &&
									Rt(
										window,
										t.top -
											e.height -
											Z(this.targetOffset, "height", this.placeholder) -
											Z(this.offset, "height", this.placeholder)
									);
							});
					}
				}
			],
			update: [
				{
					read(t, e) {
						let { height: i, margin: s } = t;
						if (((this.inactive = !this.matchMedia || !q(this.$el)), this.inactive))
							return !1;
						const n = this.active && e.has("resize");
						n && (c(this.selTarget, "transition", "0s"), this.hide()),
							this.active || ((i = C(this.$el).height), (s = c(this.$el, "margin"))),
							n &&
								(this.show(),
								requestAnimationFrame(() => c(this.selTarget, "transition", "")));
						const r = this.isFixed ? this.placeholder : this.$el,
							o = L(window);
						let a = this.position;
						this.overflowFlip && i > o && (a = a === "top" ? "bottom" : "top");
						let l = Z(this.offset, "height", r);
						a === "bottom" && (i < o || this.overflowFlip) && (l += o - i);
						const h = this.overflowFlip ? 0 : Math.max(0, i + l - o),
							u = C(r).top,
							d = (this.start === !1 ? u : mn(this.start, this.$el, u)) - l,
							f =
								this.end === !1
									? document.scrollingElement.scrollHeight - o
									: mn(this.end, this.$el, u + i, !0) - C(this.$el).height + h - l;
						return {
							start: d,
							end: f,
							offset: l,
							overflow: h,
							topOffset: u,
							height: i,
							margin: s,
							width: $(r).width,
							top: Ce(r)[0]
						};
					},
					write(t) {
						let { height: e, margin: i } = t;
						const { placeholder: s } = this;
						c(s, { height: e, margin: i }),
							F(s, document) || (Je(this.$el, s), (s.hidden = !0));
					},
					events: ["resize"]
				},
				{
					read(t) {
						let {
							scroll: e = 0,
							dir: i = "down",
							overflow: s,
							overflowScroll: n = 0,
							start: r,
							end: o
						} = t;
						const a = Rt(window);
						return {
							dir: e <= a ? "down" : "up",
							prevDir: i,
							scroll: a,
							prevScroll: e,
							offsetParentTop: C(
								(this.isFixed ? this.placeholder : this.$el).offsetParent
							).top,
							overflowScroll: U(n + U(a, r, o) - U(e, r, o), 0, s)
						};
					},
					write(t, e) {
						const i = e.has("scroll"),
							{
								initTimestamp: s = 0,
								dir: n,
								prevDir: r,
								scroll: o,
								prevScroll: a = 0,
								top: l,
								start: h,
								topOffset: u,
								height: d
							} = t;
						if (o < 0 || (o === a && i) || (this.showOnUp && !i && !this.isFixed))
							return;
						const f = Date.now();
						if (
							((f - s > 300 || n !== r) && ((t.initScroll = o), (t.initTimestamp = f)),
							!(
								this.showOnUp &&
								!this.isFixed &&
								Math.abs(t.initScroll - o) <= 30 &&
								Math.abs(a - o) <= 10
							))
						)
							if (
								this.inactive ||
								o < h ||
								(this.showOnUp &&
									(o <= h ||
										(n === "down" && i) ||
										(n === "up" && !this.isFixed && o <= u + d)))
							) {
								if (!this.isFixed) {
									ft.inProgress(this.$el) && l > o && (ft.cancel(this.$el), this.hide());
									return;
								}
								(this.isFixed = !1),
									this.animation && o > u
										? (ft.cancel(this.$el),
										  ft.out(this.$el, this.animation).then(() => this.hide(), E))
										: this.hide();
							} else
								this.isFixed
									? this.update()
									: this.animation && o > u
									? (ft.cancel(this.$el),
									  this.show(),
									  ft.in(this.$el, this.animation).catch(E))
									: this.show();
					},
					events: ["resize", "scroll"]
				}
			],
			methods: {
				show() {
					(this.isFixed = !0), this.update(), (this.placeholder.hidden = !1);
				},
				hide() {
					this.setActive(!1),
						_(this.$el, this.clsFixed, this.clsBelow),
						c(this.$el, { position: "", top: "", width: "" }),
						(this.placeholder.hidden = !0);
				},
				update() {
					let {
						width: t,
						scroll: e = 0,
						overflow: i,
						overflowScroll: s = 0,
						start: n,
						end: r,
						offset: o,
						topOffset: a,
						height: l,
						offsetParentTop: h
					} = this._data;
					const u = n !== 0 || e > n;
					let d = "fixed";
					e > r && ((o += r - h), (d = "absolute")),
						i && (o -= s),
						c(this.$el, { position: d, top: o + "px", width: t }),
						this.setActive(u),
						R(this.$el, this.clsBelow, e > a + l),
						w(this.$el, this.clsFixed);
				},
				setActive(t) {
					const e = this.active;
					(this.active = t),
						t
							? (Mi(this.selTarget, this.clsInactive, this.clsActive),
							  e !== t && p(this.$el, "active"))
							: (Mi(this.selTarget, this.clsActive, this.clsInactive),
							  e !== t && p(this.$el, "inactive"));
				}
			}
		};
	function mn(t, e, i, s) {
		if (!t) return 0;
		if (Et(t) || (O(t) && t.match(/^-?\d/))) return i + Z(t, "height", e, !0);
		{
			const n = t === !0 ? A(e) : $t(t, e);
			return C(n).bottom - (s && n && F(e, n) ? y(c(n, "paddingBottom")) : 0);
		}
	}
	function vn(t) {
		return t === "true" ? !0 : t === "false" ? !1 : t;
	}
	var wn = {
			mixins: [Oe, fn, It],
			args: "connect",
			props: { connect: String, toggle: String, itemNav: String, active: Number },
			data: {
				connect: "~.uk-switcher",
				toggle: "> * > :first-child",
				itemNav: !1,
				active: 0,
				cls: "uk-active",
				attrItem: "uk-switcher-item"
			},
			computed: {
				connects: {
					get(t, e) {
						let { connect: i } = t;
						return ke(i, e);
					},
					watch(t) {
						this.swiping && c(t, "touch-action", "pan-y pinch-zoom");
						const e = this.index();
						this.connects.forEach((i) =>
							D(i).forEach((s, n) => R(s, this.cls, n === e))
						);
					},
					immediate: !0
				},
				toggles: {
					get(t, e) {
						let { toggle: i } = t;
						return N(i, e).filter(
							(s) => !H(s, ".uk-disabled *, .uk-disabled, [disabled]")
						);
					},
					watch(t) {
						const e = this.index();
						this.show(~e ? e : t[this.active] || t[0]);
					},
					immediate: !0
				},
				children() {
					return D(this.$el).filter((t) => this.toggles.some((e) => F(e, t)));
				},
				swipeTarget() {
					return this.connects;
				}
			},
			connected() {
				this.lazyload(this.$el, this.connects), zi(() => this.$emit());
			},
			events: [
				{
					name: "click",
					delegate() {
						return this.toggle;
					},
					handler(t) {
						t.preventDefault(), this.show(t.current);
					}
				},
				{
					name: "click",
					el() {
						return this.connects.concat(
							this.itemNav ? ke(this.itemNav, this.$el) : []
						);
					},
					delegate() {
						return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
					},
					handler(t) {
						t.preventDefault(), this.show(rt(t.current, this.attrItem));
					}
				},
				{
					name: "swipeRight swipeLeft",
					filter() {
						return this.swiping;
					},
					el() {
						return this.connects;
					},
					handler(t) {
						let { type: e } = t;
						this.show(Gt(e, "Left") ? "next" : "previous");
					}
				}
			],
			methods: {
				index() {
					return bt(this.children, (t) => S(t, this.cls));
				},
				show(t) {
					const e = this.index(),
						i = Zt(t, this.toggles, e),
						s = Zt(this.children[i], D(this.$el));
					D(this.$el).forEach((r, o) => {
						R(r, this.cls, s === o), k(this.toggles[o], "aria-expanded", s === o);
					});
					const n = e >= 0 && e !== i;
					this.connects.forEach(async (r) => {
						let { children: o } = r;
						await this.toggleElement(
							b(o).filter((a) => S(a, this.cls)),
							!1,
							n
						),
							await this.toggleElement(o[s], !0, n);
					});
				}
			}
		},
		la = {
			mixins: [tt],
			extends: wn,
			props: { media: Boolean },
			data: { media: 960, attrItem: "uk-tab-item" },
			connected() {
				const t = S(this.$el, "uk-tab-left")
					? "uk-tab-left"
					: S(this.$el, "uk-tab-right")
					? "uk-tab-right"
					: !1;
				t &&
					this.$create("toggle", this.$el, {
						cls: t,
						mode: "media",
						media: this.media
					});
			}
		};
	const ha = 32;
	var ca = {
			mixins: [Oe, hi, It],
			args: "target",
			props: { href: String, target: null, mode: "list", queued: Boolean },
			data: { href: !1, target: !1, mode: "click", queued: !0 },
			computed: {
				target: {
					get(t, e) {
						let { href: i, target: s } = t;
						return (s = ke(s || i, e)), (s.length && s) || [e];
					},
					watch() {
						this.updateAria();
					},
					immediate: !0
				}
			},
			connected() {
				!g(this.mode, "media") && !Ve(this.$el) && k(this.$el, "tabindex", "0"),
					this.lazyload(this.$el, this.target),
					zi(() => this.$emit());
			},
			events: [
				{
					name: ct,
					filter() {
						return g(this.mode, "hover");
					},
					handler(t) {
						!kt(t) ||
							this._showState ||
							(p(this.$el, "focus"),
							j(
								document,
								ct,
								() => p(this.$el, "blur"),
								!0,
								(e) => !F(e.target, this.$el)
							),
							g(this.mode, "click") && (this._preventClick = !0));
					}
				},
				{
					name: jt + " " + ne + " focus blur",
					filter() {
						return g(this.mode, "hover");
					},
					handler(t) {
						if (kt(t)) return;
						const e = g([jt, "focus"], t.type),
							i = k(this.$el, "aria-expanded");
						if (
							!(
								!e &&
								((t.type === ne && H(this.$el, ":focus")) ||
									(t.type === "blur" && H(this.$el, ":hover")))
							)
						) {
							if (this._showState && e && i !== this._showState) {
								e || (this._showState = null);
								return;
							}
							(this._showState = e ? i : null),
								this.toggle("toggle" + (e ? "show" : "hide"));
						}
					}
				},
				{
					name: "keydown",
					filter() {
						return g(this.mode, "click") && !pt(this.$el, "input");
					},
					handler(t) {
						t.keyCode === ha && (t.preventDefault(), this.$el.click());
					}
				},
				{
					name: "click",
					handler(t) {
						let e;
						if (
							((ot(t.target, 'a[href="#"], a[href=""]') ||
								((e = ot(t.target, "a[href]")) &&
									(k(this.$el, "aria-expanded") !== "true" ||
										(e.hash && H(this.target, e.hash))))) &&
								t.preventDefault(),
							this._preventClick)
						)
							return (this._preventClick = null);
						!g(this.mode, "click") || this.toggle();
					}
				},
				{
					name: "toggled",
					self: !0,
					el() {
						return this.target;
					},
					handler(t, e) {
						t.target === this.target[0] && this.updateAria(e);
					}
				},
				{
					name: "mediachange",
					filter() {
						return g(this.mode, "media");
					},
					el() {
						return this.target;
					},
					handler(t, e) {
						e.matches ^ this.isToggled(this.target) && this.toggle();
					}
				}
			],
			methods: {
				async toggle(t) {
					if (!p(this.target, t || "toggle", [this])) return;
					if (!this.queued) return this.toggleElement(this.target);
					const e = this.target.filter((s) => S(s, this.clsLeave));
					if (e.length) {
						for (const s of this.target) {
							const n = g(e, s);
							this.toggleElement(s, n, n);
						}
						return;
					}
					const i = this.target.filter(this.isToggled);
					await this.toggleElement(i, !1),
						await this.toggleElement(
							this.target.filter((s) => !g(i, s)),
							!0
						);
				},
				updateAria(t) {
					g(this.mode, "media") ||
						k(this.$el, "aria-expanded", Le(t) ? t : this.isToggled(this.target));
				}
			}
		},
		ua = Object.freeze({
			__proto__: null,
			Accordion: Xs,
			Alert: Xr,
			Cover: Jr,
			Drop: Zs,
			Dropdown: Zs,
			FormCustom: Qr,
			Grid: io,
			HeightMatch: oo,
			HeightViewport: ho,
			Icon: Qi,
			Img: Ho,
			Leader: Yo,
			Margin: Qs,
			Modal: Xo,
			Nav: Ko,
			Navbar: Zo,
			Offcanvas: Uo,
			OverflowAuto: ia,
			Responsive: sa,
			Scroll: na,
			Scrollspy: ra,
			ScrollspyNav: oa,
			Sticky: aa,
			Svg: en,
			Switcher: wn,
			Tab: la,
			Toggle: ca,
			Video: Js,
			Close: Oo,
			Spinner: No,
			SlidenavNext: ln,
			SlidenavPrevious: ln,
			SearchIcon: _o,
			Marker: vt,
			NavbarToggleIcon: vt,
			OverlayIcon: vt,
			PaginationNext: vt,
			PaginationPrevious: vt,
			Totop: vt
		});
	yt(ua, (t, e) => et.component(e, t)), Yr(et);
	const da = ["days", "hours", "minutes", "seconds"];
	var fa = {
		mixins: [tt],
		props: { date: String, clsWrapper: String },
		data: { date: "", clsWrapper: ".uk-countdown-%unit%" },
		connected() {
			(this.date = Date.parse(this.$props.date)), this.start();
		},
		disconnected() {
			this.stop();
		},
		events: [
			{
				name: "visibilitychange",
				el() {
					return document;
				},
				handler() {
					document.hidden ? this.stop() : this.start();
				}
			}
		],
		methods: {
			start() {
				this.stop(), this.update(), (this.timer = setInterval(this.update, 1e3));
			},
			stop() {
				clearInterval(this.timer);
			},
			update() {
				const t = pa(this.date);
				(!this.date || t.total <= 0) &&
					(this.stop(), (t.days = t.hours = t.minutes = t.seconds = 0));
				for (const e of da) {
					const i = m(this.clsWrapper.replace("%unit%", e), this.$el);
					if (!i) continue;
					let s = String(Math.trunc(t[e]));
					(s = s.length < 2 ? "0" + s : s),
						i.textContent !== s &&
							((s = s.split("")),
							s.length !== i.children.length &&
								Ot(i, s.map(() => "<span></span>").join("")),
							s.forEach((n, r) => (i.children[r].textContent = n)));
				}
			}
		}
	};
	function pa(t) {
		const e = t - Date.now();
		return {
			total: e,
			seconds: (e / 1e3) % 60,
			minutes: (e / 1e3 / 60) % 60,
			hours: (e / 1e3 / 60 / 60) % 24,
			days: e / 1e3 / 60 / 60 / 24
		};
	}
	const es = "uk-transition-leave",
		is = "uk-transition-enter";
	function bn(t, e, i, s) {
		s === void 0 && (s = 0);
		const n = ci(e, !0),
			r = { opacity: 1 },
			o = { opacity: 0 },
			a = (u) => () => (n === ci(e) ? u() : Promise.reject()),
			l = a(
				() => (
					w(e, es),
					Promise.all(
						yn(e).map(
							(u, d) =>
								new Promise((f) =>
									setTimeout(() => I.start(u, o, i / 2, "ease").then(f), d * s)
								)
						)
					).then(() => _(e, es))
				)
			),
			h = a(() => {
				const u = L(e);
				return (
					w(e, is),
					t(),
					c(D(e), { opacity: 0 }),
					new Promise((d) =>
						requestAnimationFrame(() => {
							const f = D(e),
								v = L(e);
							c(e, "alignContent", "flex-start"), L(e, u);
							const P = yn(e);
							c(f, o);
							const x = P.map(
								(K, M) =>
									new Promise((z) =>
										setTimeout(() => I.start(K, r, i / 2, "ease").then(z), M * s)
									)
							);
							u !== v &&
								x.push(I.start(e, { height: v }, i / 2 + P.length * s, "ease")),
								Promise.all(x).then(() => {
									_(e, is),
										n === ci(e) &&
											(c(e, { height: "", alignContent: "" }),
											c(f, { opacity: "" }),
											delete e.dataset.transition),
										d();
								});
						})
					)
				);
			});
		return S(e, es)
			? xn(e).then(h)
			: S(e, is)
			? xn(e).then(l).then(h)
			: l().then(h);
	}
	function ci(t, e) {
		return e && (t.dataset.transition = 1 + ci(t)), _t(t.dataset.transition) || 0;
	}
	function xn(t) {
		return Promise.all(
			D(t)
				.filter(I.inProgress)
				.map((e) => new Promise((i) => j(e, "transitionend transitioncanceled", i)))
		);
	}
	function yn(t) {
		return Zi(D(t)).reduce(
			(e, i) =>
				e.concat(
					We(
						i.filter((s) => ti(s)),
						"offsetLeft"
					)
				),
			[]
		);
	}
	function ga(t, e, i) {
		return new Promise((s) =>
			requestAnimationFrame(() => {
				let n = D(e);
				const r = n.map((a) => $n(a, !0)),
					o = c(e, ["height", "padding"]);
				I.cancel(e),
					n.forEach(I.cancel),
					kn(e),
					t(),
					(n = n.concat(D(e).filter((a) => !g(n, a)))),
					Promise.resolve().then(() => {
						B.flush();
						const a = c(e, ["height", "padding"]),
							[l, h] = ma(e, n, r);
						n.forEach((u, d) => h[d] && c(u, h[d])),
							c(e, { display: "block", ...o }),
							requestAnimationFrame(() => {
								const u = n
									.map((d, f) => A(d) === e && I.start(d, l[f], i, "ease"))
									.concat(I.start(e, a, i, "ease"));
								Promise.all(u)
									.then(() => {
										n.forEach(
											(d, f) =>
												A(d) === e && c(d, "display", l[f].opacity === 0 ? "none" : "")
										),
											kn(e);
									}, E)
									.then(s);
							});
					});
			})
		);
	}
	function $n(t, e) {
		const i = c(t, "zIndex");
		return q(t)
			? {
					display: "",
					opacity: e ? c(t, "opacity") : "0",
					pointerEvents: "none",
					position: "absolute",
					zIndex: i === "auto" ? Qt(t) : i,
					...Sn(t)
			  }
			: !1;
	}
	function ma(t, e, i) {
		const s = e.map((r, o) =>
				A(r) && o in i
					? i[o]
						? q(r)
							? Sn(r)
							: { opacity: 0 }
						: { opacity: q(r) ? 1 : 0 }
					: !1
			),
			n = s.map((r, o) => {
				const a = A(e[o]) === t && (i[o] || $n(e[o]));
				if (!a) return !1;
				if (!r) delete a.opacity;
				else if (!("opacity" in r)) {
					const { opacity: l } = a;
					l % 1 ? (r.opacity = 1) : delete a.opacity;
				}
				return a;
			});
		return [s, n];
	}
	function kn(t) {
		c(t.children, {
			height: "",
			left: "",
			opacity: "",
			pointerEvents: "",
			position: "",
			top: "",
			marginTop: "",
			marginLeft: "",
			transform: "",
			width: "",
			zIndex: ""
		}),
			c(t, { height: "", display: "", padding: "" });
	}
	function Sn(t) {
		const { height: e, width: i } = C(t),
			{ top: s, left: n } = Ge(t),
			{ marginLeft: r, marginTop: o } = c(t, ["marginTop", "marginLeft"]);
		return {
			top: s,
			left: n,
			height: e,
			width: i,
			marginLeft: r,
			marginTop: o,
			transform: ""
		};
	}
	var Tn = {
			props: { duration: Number, animation: Boolean },
			data: { duration: 150, animation: "slide" },
			methods: {
				animate(t, e) {
					e === void 0 && (e = this.$el);
					const i = this.animation;
					return (i === "fade"
						? bn
						: i === "delayed-fade"
						? function () {
								for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
									r[o] = arguments[o];
								return bn(...r, 40);
						  }
						: i
						? ga
						: () => (t(), Promise.resolve()))(t, e, this.duration).then(
						() => this.$update(e, "resize"),
						E
					);
				}
			}
		},
		va = {
			mixins: [Tn],
			args: "target",
			props: { target: Boolean, selActive: Boolean },
			data: {
				target: null,
				selActive: !1,
				attrItem: "uk-filter-control",
				cls: "uk-active",
				duration: 250
			},
			computed: {
				toggles: {
					get(t, e) {
						let { attrItem: i } = t;
						return N("[" + i + "],[data-" + i + "]", e);
					},
					watch() {
						if ((this.updateState(), this.selActive !== !1)) {
							const t = N(this.selActive, this.$el);
							this.toggles.forEach((e) => R(e, this.cls, g(t, e)));
						}
					},
					immediate: !0
				},
				children: {
					get(t, e) {
						let { target: i } = t;
						return N(i + " > *", e);
					},
					watch(t, e) {
						e && !ya(t, e) && this.updateState();
					},
					immediate: !0
				}
			},
			events: [
				{
					name: "click",
					delegate() {
						return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
					},
					handler(t) {
						t.preventDefault(), this.apply(t.current);
					}
				}
			],
			methods: {
				apply(t) {
					const e = this.getState(),
						i = In(t, this.attrItem, this.getState());
					wa(e, i) || this.setState(i);
				},
				getState() {
					return this.toggles
						.filter((t) => S(t, this.cls))
						.reduce((t, e) => In(e, this.attrItem, t), {
							filter: { "": "" },
							sort: []
						});
				},
				setState(t, e) {
					e === void 0 && (e = !0),
						(t = { filter: { "": "" }, sort: [], ...t }),
						p(this.$el, "beforeFilter", [this, t]),
						this.toggles.forEach((i) => R(i, this.cls, !!xa(i, this.attrItem, t))),
						Promise.all(
							N(this.target, this.$el).map((i) => {
								const s = () => {
									ba(t, i, D(i)), this.$update(this.$el);
								};
								return e ? this.animate(s, i) : s();
							})
						).then(() => p(this.$el, "afterFilter", [this]));
				},
				updateState() {
					B.write(() => this.setState(this.getState(), !1));
				}
			}
		};
	function Cn(t, e) {
		return Ee(rt(t, e), ["filter"]);
	}
	function wa(t, e) {
		return ["filter", "sort"].every((i) => me(t[i], e[i]));
	}
	function ba(t, e, i) {
		const s = $a(t);
		i.forEach((o) => c(o, "display", s && !H(o, s) ? "none" : ""));
		const [n, r] = t.sort;
		if (n) {
			const o = ka(i, n, r);
			me(o, i) || G(e, o);
		}
	}
	function In(t, e, i) {
		const s = Cn(t, e),
			{ filter: n, group: r, sort: o, order: a = "asc" } = s;
		return (
			(n || Y(o)) &&
				(r
					? n
						? (delete i.filter[""], (i.filter[r] = n))
						: (delete i.filter[r],
						  (ge(i.filter) || "" in i.filter) && (i.filter = { "": n || "" }))
					: (i.filter = { "": n || "" })),
			Y(o) || (i.sort = [o, a]),
			i
		);
	}
	function xa(t, e, i) {
		let {
			filter: s = { "": "" },
			sort: [n, r]
		} = i;
		const { filter: o = "", group: a = "", sort: l, order: h = "asc" } = Cn(t, e);
		return Y(l)
			? (a in s && o === s[a]) || (!o && a && !(a in s) && !s[""])
			: n === l && r === h;
	}
	function ya(t, e) {
		return t.length === e.length && t.every((i) => e.includes(i));
	}
	function $a(t) {
		let { filter: e } = t,
			i = "";
		return yt(e, (s) => (i += s || "")), i;
	}
	function ka(t, e, i) {
		return [...t].sort(
			(s, n) =>
				rt(s, e).localeCompare(rt(n, e), void 0, { numeric: !0 }) *
				(i === "asc" || -1)
		);
	}
	var ss = {
		slide: {
			show(t) {
				return [{ transform: W(t * -100) }, { transform: W() }];
			},
			percent(t) {
				return De(t);
			},
			translate(t, e) {
				return [
					{ transform: W(e * -100 * t) },
					{ transform: W(e * 100 * (1 - t)) }
				];
			}
		}
	};
	function De(t) {
		return Math.abs(c(t, "transform").split(",")[4] / t.offsetWidth) || 0;
	}
	function W(t, e) {
		return (
			t === void 0 && (t = 0),
			e === void 0 && (e = "%"),
			(t += t ? e : ""),
			"translate3d(" + t + ", 0, 0)"
		);
	}
	function he(t) {
		return "scale3d(" + t + ", " + t + ", 1)";
	}
	var An = {
		...ss,
		fade: {
			show() {
				return [{ opacity: 0 }, { opacity: 1 }];
			},
			percent(t) {
				return 1 - c(t, "opacity");
			},
			translate(t) {
				return [{ opacity: 1 - t }, { opacity: t }];
			}
		},
		scale: {
			show() {
				return [
					{ opacity: 0, transform: he(1 - 0.2) },
					{ opacity: 1, transform: he(1) }
				];
			},
			percent(t) {
				return 1 - c(t, "opacity");
			},
			translate(t) {
				return [
					{ opacity: 1 - t, transform: he(1 - 0.2 * t) },
					{ opacity: t, transform: he(1 - 0.2 + 0.2 * t) }
				];
			}
		}
	};
	function Sa(t, e, i, s) {
		let { animation: n, easing: r } = s;
		const { percent: o, translate: a, show: l = E } = n,
			h = l(i),
			u = new Re();
		return {
			dir: i,
			show(d, f, v) {
				f === void 0 && (f = 0);
				const P = v ? "linear" : r;
				return (
					(d -= Math.round(d * U(f, -1, 1))),
					this.translate(f),
					ui(e, "itemin", { percent: f, duration: d, timing: P, dir: i }),
					ui(t, "itemout", { percent: 1 - f, duration: d, timing: P, dir: i }),
					Promise.all([I.start(e, h[1], d, P), I.start(t, h[0], d, P)]).then(() => {
						this.reset(), u.resolve();
					}, E),
					u.promise
				);
			},
			cancel() {
				I.cancel([e, t]);
			},
			reset() {
				for (const d in h[0]) c([e, t], d, "");
			},
			forward(d, f) {
				return (
					f === void 0 && (f = this.percent()), I.cancel([e, t]), this.show(d, f, !0)
				);
			},
			translate(d) {
				this.reset();
				const f = a(d, i);
				c(e, f[1]),
					c(t, f[0]),
					ui(e, "itemtranslatein", { percent: d, dir: i }),
					ui(t, "itemtranslateout", { percent: 1 - d, dir: i });
			},
			percent() {
				return o(t || e, e, i);
			},
			getDistance() {
				return t?.offsetWidth;
			}
		};
	}
	function ui(t, e, i) {
		p(t, zt(e, !1, !1, i));
	}
	var Ta = {
			props: {
				autoplay: Boolean,
				autoplayInterval: Number,
				pauseOnHover: Boolean
			},
			data: { autoplay: !1, autoplayInterval: 7e3, pauseOnHover: !0 },
			connected() {
				this.autoplay && this.startAutoplay();
			},
			disconnected() {
				this.stopAutoplay();
			},
			update() {
				k(this.slides, "tabindex", "-1");
			},
			events: [
				{
					name: "visibilitychange",
					el() {
						return document;
					},
					filter() {
						return this.autoplay;
					},
					handler() {
						document.hidden ? this.stopAutoplay() : this.startAutoplay();
					}
				}
			],
			methods: {
				startAutoplay() {
					this.stopAutoplay(),
						(this.interval = setInterval(
							() =>
								(!this.draggable || !m(":focus", this.$el)) &&
								(!this.pauseOnHover || !H(this.$el, ":hover")) &&
								!this.stack.length &&
								this.show("next"),
							this.autoplayInterval
						));
				},
				stopAutoplay() {
					this.interval && clearInterval(this.interval);
				}
			}
		},
		Ca = {
			props: { draggable: Boolean },
			data: { draggable: !0, threshold: 10 },
			created() {
				for (const t of ["start", "move", "end"]) {
					const e = this[t];
					this[t] = (i) => {
						const s = te(i).x * (J ? -1 : 1);
						(this.prevPos = s === this.pos ? this.prevPos : this.pos),
							(this.pos = s),
							e(i);
					};
				}
			},
			events: [
				{
					name: ct,
					delegate() {
						return this.selSlides;
					},
					handler(t) {
						!this.draggable ||
							(!kt(t) && Ia(t.target)) ||
							ot(t.target, xe) ||
							t.button > 0 ||
							this.length < 2 ||
							this.start(t);
					}
				},
				{
					name: "dragstart",
					handler(t) {
						t.preventDefault();
					}
				}
			],
			methods: {
				start() {
					(this.drag = this.pos),
						this._transitioner
							? ((this.percent = this._transitioner.percent()),
							  (this.drag +=
									this._transitioner.getDistance() * this.percent * this.dir),
							  this._transitioner.cancel(),
							  this._transitioner.translate(this.percent),
							  (this.dragging = !0),
							  (this.stack = []))
							: (this.prevIndex = this.index),
						T(document, se, this.move, { passive: !1 }),
						T(document, gt + " " + re + " input", this.end, !0),
						c(this.list, "userSelect", "none");
				},
				move(t) {
					const e = this.pos - this.drag;
					if (
						e === 0 ||
						this.prevPos === this.pos ||
						(!this.dragging && Math.abs(e) < this.threshold)
					)
						return;
					c(this.list, "pointerEvents", "none"),
						t.cancelable && t.preventDefault(),
						(this.dragging = !0),
						(this.dir = e < 0 ? 1 : -1);
					const { slides: i } = this;
					let { prevIndex: s } = this,
						n = Math.abs(e),
						r = this.getIndex(s + this.dir, s),
						o = this._getDistance(s, r) || i[s].offsetWidth;
					for (; r !== s && n > o; )
						(this.drag -= o * this.dir),
							(s = r),
							(n -= o),
							(r = this.getIndex(s + this.dir, s)),
							(o = this._getDistance(s, r) || i[s].offsetWidth);
					this.percent = n / o;
					const a = i[s],
						l = i[r],
						h = this.index !== r,
						u = s === r;
					let d;
					[this.index, this.prevIndex]
						.filter((f) => !g([r, s], f))
						.forEach((f) => {
							p(i[f], "itemhidden", [this]), u && ((d = !0), (this.prevIndex = s));
						}),
						((this.index === s && this.prevIndex !== s) || d) &&
							p(i[this.index], "itemshown", [this]),
						h &&
							((this.prevIndex = s),
							(this.index = r),
							!u && p(a, "beforeitemhide", [this]),
							p(l, "beforeitemshow", [this])),
						(this._transitioner = this._translate(
							Math.abs(this.percent),
							a,
							!u && l
						)),
						h && (!u && p(a, "itemhide", [this]), p(l, "itemshow", [this]));
				},
				end() {
					if (
						(Ut(document, se, this.move, { passive: !1 }),
						Ut(document, gt + " " + re + " input", this.end, !0),
						this.dragging)
					)
						if (((this.dragging = null), this.index === this.prevIndex))
							(this.percent = 1 - this.percent),
								(this.dir *= -1),
								this._show(!1, this.index, !0),
								(this._transitioner = null);
						else {
							const t =
								(J ? this.dir * (J ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
							(this.index = t ? this.index : this.prevIndex),
								t && (this.percent = 1 - this.percent),
								this.show(
									(this.dir > 0 && !t) || (this.dir < 0 && t) ? "next" : "previous",
									!0
								);
						}
					c(this.list, { userSelect: "", pointerEvents: "" }),
						(this.drag = this.percent = null);
				}
			}
		};
	function Ia(t) {
		return !t.children.length && t.childNodes.length;
	}
	var Aa = {
			data: { selNav: !1 },
			computed: {
				nav(t, e) {
					let { selNav: i } = t;
					return m(i, e);
				},
				selNavItem(t) {
					let { attrItem: e } = t;
					return "[" + e + "],[data-" + e + "]";
				},
				navItems(t, e) {
					return N(this.selNavItem, e);
				}
			},
			update: {
				write() {
					this.nav &&
						this.length !== this.nav.children.length &&
						Ot(
							this.nav,
							this.slides
								.map(
									(t, e) => "<li " + this.attrItem + '="' + e + '"><a href></a></li>'
								)
								.join("")
						),
						this.navItems
							.concat(this.nav)
							.forEach((t) => t && (t.hidden = !this.maxIndex)),
						this.updateNav();
				},
				events: ["resize"]
			},
			events: [
				{
					name: "click",
					delegate() {
						return this.selNavItem;
					},
					handler(t) {
						t.preventDefault(), this.show(rt(t.current, this.attrItem));
					}
				},
				{ name: "itemshow", handler: "updateNav" }
			],
			methods: {
				updateNav() {
					const t = this.getValidIndex();
					for (const e of this.navItems) {
						const i = rt(e, this.attrItem);
						R(e, this.clsActive, _t(i) === t),
							R(
								e,
								"uk-invisible",
								this.finite &&
									((i === "previous" && t === 0) || (i === "next" && t >= this.maxIndex))
							);
					}
				}
			}
		},
		Pn = {
			mixins: [Ta, Ca, Aa, mt],
			props: {
				clsActivated: Boolean,
				easing: String,
				index: Number,
				finite: Boolean,
				velocity: Number,
				selSlides: String
			},
			data: () => ({
				easing: "ease",
				finite: !1,
				velocity: 1,
				index: 0,
				prevIndex: -1,
				stack: [],
				percent: 0,
				clsActive: "uk-active",
				clsActivated: !1,
				Transitioner: !1,
				transitionOptions: {}
			}),
			connected() {
				(this.prevIndex = -1),
					(this.index = this.getValidIndex(this.$props.index)),
					(this.stack = []);
			},
			disconnected() {
				_(this.slides, this.clsActive);
			},
			computed: {
				duration(t, e) {
					let { velocity: i } = t;
					return En(e.offsetWidth / i);
				},
				list(t, e) {
					let { selList: i } = t;
					return m(i, e);
				},
				maxIndex() {
					return this.length - 1;
				},
				selSlides(t) {
					let { selList: e, selSlides: i } = t;
					return e + " " + (i || "> *");
				},
				slides: {
					get() {
						return N(this.selSlides, this.$el);
					},
					watch() {
						this.$reset();
					}
				},
				length() {
					return this.slides.length;
				}
			},
			methods: {
				show(t, e) {
					if ((e === void 0 && (e = !1), this.dragging || !this.length)) return;
					const { stack: i } = this,
						s = e ? 0 : i.length,
						n = () => {
							i.splice(s, 1), i.length && this.show(i.shift(), !0);
						};
					if ((i[e ? "unshift" : "push"](t), !e && i.length > 1)) {
						i.length === 2 &&
							this._transitioner.forward(Math.min(this.duration, 200));
						return;
					}
					const r = this.getIndex(this.index),
						o = S(this.slides, this.clsActive) && this.slides[r],
						a = this.getIndex(t, this.index),
						l = this.slides[a];
					if (o === l) {
						n();
						return;
					}
					if (
						((this.dir = Pa(t, r)),
						(this.prevIndex = r),
						(this.index = a),
						(o && !p(o, "beforeitemhide", [this])) ||
							!p(l, "beforeitemshow", [this, o]))
					) {
						(this.index = this.prevIndex), n();
						return;
					}
					const h = this._show(o, l, e).then(
						() => (
							o && p(o, "itemhidden", [this]),
							p(l, "itemshown", [this]),
							new Promise((u) => {
								B.write(() => {
									i.shift(),
										i.length ? this.show(i.shift(), !0) : (this._transitioner = null),
										u();
								});
							})
						)
					);
					return o && p(o, "itemhide", [this]), p(l, "itemshow", [this]), h;
				},
				getIndex(t, e) {
					return (
						t === void 0 && (t = this.index),
						e === void 0 && (e = this.index),
						U(Zt(t, this.slides, e, this.finite), 0, this.maxIndex)
					);
				},
				getValidIndex(t, e) {
					return (
						t === void 0 && (t = this.index),
						e === void 0 && (e = this.prevIndex),
						this.getIndex(t, e)
					);
				},
				_show(t, e, i) {
					if (
						((this._transitioner = this._getTransitioner(t, e, this.dir, {
							easing: i
								? e.offsetWidth < 600
									? "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
									: "cubic-bezier(0.165, 0.84, 0.44, 1)"
								: this.easing,
							...this.transitionOptions
						})),
						!i && !t)
					)
						return this._translate(1), Promise.resolve();
					const { length: s } = this.stack;
					return this._transitioner[s > 1 ? "forward" : "show"](
						s > 1 ? Math.min(this.duration, 75 + 75 / (s - 1)) : this.duration,
						this.percent
					);
				},
				_getDistance(t, e) {
					return this._getTransitioner(t, t !== e && e).getDistance();
				},
				_translate(t, e, i) {
					e === void 0 && (e = this.prevIndex), i === void 0 && (i = this.index);
					const s = this._getTransitioner(e !== i ? e : !1, i);
					return s.translate(t), s;
				},
				_getTransitioner(t, e, i, s) {
					return (
						t === void 0 && (t = this.prevIndex),
						e === void 0 && (e = this.index),
						i === void 0 && (i = this.dir || 1),
						s === void 0 && (s = this.transitionOptions),
						new this.Transitioner(
							Jt(t) ? this.slides[t] : t,
							Jt(e) ? this.slides[e] : e,
							i * (J ? -1 : 1),
							s
						)
					);
				}
			}
		};
	function Pa(t, e) {
		return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1;
	}
	function En(t) {
		return 0.5 * t + 300;
	}
	var _n = {
			mixins: [Pn],
			props: { animation: String },
			data: {
				animation: "slide",
				clsActivated: "uk-transition-active",
				Animations: ss,
				Transitioner: Sa
			},
			computed: {
				animation(t) {
					let { animation: e, Animations: i } = t;
					return { ...(i[e] || i.slide), name: e };
				},
				transitionOptions() {
					return { animation: this.animation };
				}
			},
			events: {
				beforeitemshow(t) {
					let { target: e } = t;
					w(e, this.clsActive);
				},
				itemshown(t) {
					let { target: e } = t;
					w(e, this.clsActivated);
				},
				itemhidden(t) {
					let { target: e } = t;
					_(e, this.clsActive, this.clsActivated);
				}
			}
		},
		On = {
			mixins: [le, ts, It, _n],
			functional: !0,
			props: {
				delayControls: Number,
				preload: Number,
				videoAutoplay: Boolean,
				template: String
			},
			data: () => ({
				preload: 1,
				videoAutoplay: !1,
				delayControls: 3e3,
				items: [],
				cls: "uk-open",
				clsPage: "uk-lightbox-page",
				selList: ".uk-lightbox-items",
				attrItem: "uk-lightbox-item",
				selClose: ".uk-close-large",
				selCaption: ".uk-lightbox-caption",
				pauseOnHover: !1,
				velocity: 2,
				Animations: An,
				template:
					'<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
			}),
			created() {
				const t = m(this.template),
					e = m(this.selList, t);
				this.items.forEach(() => G(e, "<li>")), this.$mount(G(this.container, t));
			},
			computed: {
				caption(t, e) {
					let { selCaption: i } = t;
					return m(i, e);
				}
			},
			events: [
				{ name: se + " " + ct + " keydown", handler: "showControls" },
				{
					name: "click",
					self: !0,
					delegate() {
						return this.selSlides;
					},
					handler(t) {
						t.defaultPrevented || this.hide();
					}
				},
				{
					name: "shown",
					self: !0,
					handler() {
						this.showControls();
					}
				},
				{
					name: "hide",
					self: !0,
					handler() {
						this.hideControls(), _(this.slides, this.clsActive), I.stop(this.slides);
					}
				},
				{
					name: "hidden",
					self: !0,
					handler() {
						this.$destroy(!0);
					}
				},
				{
					name: "keyup",
					el() {
						return document;
					},
					handler(t) {
						if (!(!this.isToggled(this.$el) || !this.draggable))
							switch (t.keyCode) {
								case 37:
									this.show("previous");
									break;
								case 39:
									this.show("next");
									break;
							}
					}
				},
				{
					name: "beforeitemshow",
					handler(t) {
						this.isToggled() ||
							((this.draggable = !1),
							t.preventDefault(),
							this.toggleElement(this.$el, !0, !1),
							(this.animation = An.scale),
							_(t.target, this.clsActive),
							this.stack.splice(1, 0, this.index));
					}
				},
				{
					name: "itemshow",
					handler() {
						Ot(this.caption, this.getItem().caption || "");
						for (let t = -this.preload; t <= this.preload; t++)
							this.loadItem(this.index + t);
					}
				},
				{
					name: "itemshown",
					handler() {
						this.draggable = this.$props.draggable;
					}
				},
				{
					name: "itemload",
					async handler(t, e) {
						const { source: i, type: s, alt: n = "", poster: r, attrs: o = {} } = e;
						if ((this.setItem(e, "<span uk-spinner></span>"), !i)) return;
						let a;
						const l = {
							frameborder: "0",
							allow: "autoplay",
							allowfullscreen: "",
							style: "max-width: 100%; box-sizing: border-box;",
							"uk-responsive": "",
							"uk-video": "" + this.videoAutoplay
						};
						if (
							s === "image" ||
							i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)
						)
							try {
								const { width: h, height: u } = await vs(i, o.srcset, o.size);
								this.setItem(
									e,
									Be("img", { src: i, width: h, height: u, alt: n, ...o })
								);
							} catch {
								this.setError(e);
							}
						else if (s === "video" || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
							const h = Be("video", {
								src: i,
								poster: r,
								controls: "",
								playsinline: "",
								"uk-video": "" + this.videoAutoplay,
								...o
							});
							T(h, "loadedmetadata", () => {
								k(h, { width: h.videoWidth, height: h.videoHeight }),
									this.setItem(e, h);
							}),
								T(h, "error", () => this.setError(e));
						} else if (s === "iframe" || i.match(/\.(html|php)($|\?)/i))
							this.setItem(
								e,
								Be("iframe", {
									src: i,
									frameborder: "0",
									allowfullscreen: "",
									class: "uk-lightbox-iframe",
									...o
								})
							);
						else if (
							(a = i.match(
								/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/
							))
						)
							this.setItem(
								e,
								Be("iframe", {
									src:
										"https://www.youtube" +
										(a[1] || "") +
										".com/embed/" +
										a[2] +
										(a[3] ? "?" + a[3] : ""),
									width: 1920,
									height: 1080,
									...l,
									...o
								})
							);
						else if ((a = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)))
							try {
								const { height: h, width: u } = await (
									await fetch(
										"https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(i),
										{ credentials: "omit" }
									)
								).json();
								this.setItem(
									e,
									Be("iframe", {
										src:
											"https://player.vimeo.com/video/" + a[1] + (a[2] ? "?" + a[2] : ""),
										width: u,
										height: h,
										...l,
										...o
									})
								);
							} catch {
								this.setError(e);
							}
					}
				}
			],
			methods: {
				loadItem(t) {
					t === void 0 && (t = this.index);
					const e = this.getItem(t);
					this.getSlide(e).childElementCount || p(this.$el, "itemload", [e]);
				},
				getItem(t) {
					return t === void 0 && (t = this.index), this.items[Zt(t, this.slides)];
				},
				setItem(t, e) {
					p(this.$el, "itemloaded", [this, Ot(this.getSlide(t), e)]);
				},
				getSlide(t) {
					return this.slides[this.items.indexOf(t)];
				},
				setError(t) {
					this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
				},
				showControls() {
					clearTimeout(this.controlsTimer),
						(this.controlsTimer = setTimeout(this.hideControls, this.delayControls)),
						w(this.$el, "uk-active", "uk-transition-active");
				},
				hideControls() {
					_(this.$el, "uk-active", "uk-transition-active");
				}
			}
		};
	function Be(t, e) {
		const i = Ft("<" + t + ">");
		return k(i, e), i;
	}
	var Ea = {
		install: _a,
		props: { toggle: String },
		data: { toggle: "a" },
		computed: {
			toggles: {
				get(t, e) {
					let { toggle: i } = t;
					return N(i, e);
				},
				watch() {
					this.hide();
				}
			}
		},
		disconnected() {
			this.hide();
		},
		events: [
			{
				name: "click",
				delegate() {
					return this.toggle + ":not(.uk-disabled)";
				},
				handler(t) {
					t.preventDefault(), this.show(t.current);
				}
			}
		],
		methods: {
			show(t) {
				const e = cs(this.toggles.map(Nn), "source");
				if (Xt(t)) {
					const { source: i } = Nn(t);
					t = bt(e, (s) => {
						let { source: n } = s;
						return i === n;
					});
				}
				return (
					(this.panel =
						this.panel ||
						this.$create("lightboxPanel", { ...this.$props, items: e })),
					T(this.panel.$el, "hidden", () => (this.panel = !1)),
					this.panel.show(t)
				);
			},
			hide() {
				var t;
				return (t = this.panel) == null ? void 0 : t.hide();
			}
		}
	};
	function _a(t, e) {
		t.lightboxPanel || t.component("lightboxPanel", On),
			xt(e.props, t.component("lightboxPanel").options.props);
	}
	function Nn(t) {
		const e = {};
		for (const i of ["href", "caption", "type", "poster", "alt", "attrs"])
			e[i === "href" ? "source" : i] = rt(t, i);
		return (e.attrs = Ee(e.attrs)), e;
	}
	var Oa = {
		mixins: [le],
		functional: !0,
		args: ["message", "status"],
		data: {
			message: "",
			status: "",
			timeout: 5e3,
			group: null,
			pos: "top-center",
			clsContainer: "uk-notification",
			clsClose: "uk-notification-close",
			clsMsg: "uk-notification-message"
		},
		install: Na,
		computed: {
			marginProp(t) {
				let { pos: e } = t;
				return "margin" + (lt(e, "top") ? "Top" : "Bottom");
			},
			startProps() {
				return { opacity: 0, [this.marginProp]: -this.$el.offsetHeight };
			}
		},
		created() {
			const t =
				m("." + this.clsContainer + "-" + this.pos, this.container) ||
				G(
					this.container,
					'<div class="' +
						this.clsContainer +
						" " +
						this.clsContainer +
						"-" +
						this.pos +
						'" style="display: block"></div>'
				);
			this.$mount(
				G(
					t,
					'<div class="' +
						this.clsMsg +
						(this.status ? " " + this.clsMsg + "-" + this.status : "") +
						'"> <a href class="' +
						this.clsClose +
						'" data-uk-close></a> <div>' +
						this.message +
						"</div> </div>"
				)
			);
		},
		async connected() {
			const t = y(c(this.$el, this.marginProp));
			await I.start(c(this.$el, this.startProps), {
				opacity: 1,
				[this.marginProp]: t
			}),
				this.timeout && (this.timer = setTimeout(this.close, this.timeout));
		},
		events: {
			click(t) {
				ot(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close();
			},
			[jt]() {
				this.timer && clearTimeout(this.timer);
			},
			[ne]() {
				this.timeout && (this.timer = setTimeout(this.close, this.timeout));
			}
		},
		methods: {
			async close(t) {
				const e = (i) => {
					const s = A(i);
					p(i, "close", [this]), ht(i), (s != null && s.hasChildNodes()) || ht(s);
				};
				this.timer && clearTimeout(this.timer),
					t || (await I.start(this.$el, this.startProps)),
					e(this.$el);
			}
		}
	};
	function Na(t) {
		t.notification.closeAll = function (e, i) {
			St(document.body, (s) => {
				const n = t.getComponent(s, "notification");
				n && (!e || e === n.group) && n.close(i);
			});
		};
	}
	const di = {
			x: fi,
			y: fi,
			rotate: fi,
			scale: fi,
			color: rs,
			backgroundColor: rs,
			borderColor: rs,
			blur: Vt,
			hue: Vt,
			fopacity: Vt,
			grayscale: Vt,
			invert: Vt,
			saturate: Vt,
			sepia: Vt,
			opacity: Da,
			stroke: Ba,
			bgx: Dn,
			bgy: Dn
		},
		{ keys: ns } = Object;
	var Mn = {
		mixins: [hi],
		props: Hn(ns(di), "list"),
		data: Hn(ns(di), void 0),
		computed: {
			props(t, e) {
				return ns(di).reduce(
					(i, s) => (Y(t[s]) || (i[s] = di[s](s, e, t[s].slice())), i),
					{}
				);
			}
		},
		events: {
			load() {
				this.$emit();
			}
		},
		methods: {
			reset() {
				for (const t in this.getCss(0)) c(this.$el, t, "");
			},
			getCss(t) {
				const e = { transform: "", filter: "" };
				for (const i in this.props) this.props[i](e, t);
				return e;
			}
		}
	};
	function fi(t, e, i) {
		let s = gi(i) || { x: "px", y: "px", rotate: "deg" }[t] || "",
			n;
		return (
			t === "x" || t === "y"
				? ((t = "translate" + wt(t)),
				  (n = (r) => y(y(r).toFixed(s === "px" ? 0 : 6))))
				: t === "scale" &&
				  ((s = ""),
				  (n = (r) => (gi([r]) ? Z(r, "width", e, !0) / e.offsetWidth : r))),
			i.length === 1 && i.unshift(t === "scale" ? 1 : 0),
			(i = ce(i, n)),
			(r, o) => {
				r.transform += " " + t + "(" + ze(i, o) + s + ")";
			}
		);
	}
	function rs(t, e, i) {
		return (
			i.length === 1 && i.unshift(He(e, t, "")),
			(i = ce(i, (s) => Ma(e, s))),
			(s, n) => {
				const [r, o, a] = zn(i, n),
					l = r
						.map((h, u) => ((h += a * (o[u] - h)), u === 3 ? y(h) : parseInt(h, 10)))
						.join(",");
				s[t] = "rgba(" + l + ")";
			}
		);
	}
	function Ma(t, e) {
		return He(t, "color", e)
			.split(/[(),]/g)
			.slice(1, -1)
			.concat(1)
			.slice(0, 4)
			.map(y);
	}
	function Vt(t, e, i) {
		i.length === 1 && i.unshift(0);
		const s = gi(i) || { blur: "px", hue: "deg" }[t] || "%";
		return (
			(t = { fopacity: "opacity", hue: "hue-rotate" }[t] || t),
			(i = ce(i)),
			(n, r) => {
				const o = ze(i, r);
				n.filter += " " + t + "(" + (o + s) + ")";
			}
		);
	}
	function Da(t, e, i) {
		return (
			i.length === 1 && i.unshift(He(e, t, "")),
			(i = ce(i)),
			(s, n) => {
				s[t] = ze(i, n);
			}
		);
	}
	function Ba(t, e, i) {
		i.length === 1 && i.unshift(0);
		const s = gi(i),
			n = rn(e);
		return (
			(i = ce(i.reverse(), (r) => ((r = y(r)), s === "%" ? (r * n) / 100 : r))),
			i.some((r) => {
				let [o] = r;
				return o;
			})
				? (c(e, "strokeDasharray", n),
				  (r, o) => {
						r.strokeDashoffset = ze(i, o);
				  })
				: E
		);
	}
	function Dn(t, e, i) {
		i.length === 1 && i.unshift(0), (t = t.substr(-1));
		const s = t === "y" ? "height" : "width";
		i = ce(i, (r) => Z(r, s, e));
		const n = He(e, "background-position-" + t, "");
		return He(e, "backgroundSize", "") === "cover"
			? za(t, e, i, n, s)
			: Bn(t, i, n);
	}
	function za(t, e, i, s, n) {
		const r = Ha(e);
		if (!r.width) return E;
		const o = i.map((M) => {
				let [z] = M;
				return z;
			}),
			a = Math.min(...o),
			l = Math.max(...o),
			h = o.indexOf(a) < o.indexOf(l),
			u = l - a;
		let d = (h ? -u : 0) - (h ? a : l);
		const f = { width: e.offsetWidth, height: e.offsetHeight },
			v = we.cover(r, f),
			P = v[n] - f[n];
		if (P < u) f[n] = v[n] + u - P;
		else if (P > u) {
			const M = f[n] / Z(s, n, e, !0);
			M && (d -= (P - u) / M);
		}
		const x = we.cover(r, f),
			K = Bn(t, i, d + "px");
		return (M, z) => {
			K(M, z),
				(M.backgroundSize = x.width + "px " + x.height + "px"),
				(M.backgroundRepeat = "no-repeat");
		};
	}
	function Bn(t, e, i) {
		return function (s, n) {
			s["background-position-" + t] = "calc(" + i + " + " + ze(e, n) + "px)";
		};
	}
	const pi = {};
	function Ha(t) {
		const e = c(t, "backgroundImage").replace(
			/^none|url\(["']?(.+?)["']?\)$/,
			"$1"
		);
		if (pi[e]) return pi[e];
		const i = new Image();
		return e && ((i.src = e), !i.naturalWidth)
			? ((i.onload = () => {
					(pi[e] = os(i)), p(t, zt("load", !1));
			  }),
			  os(i))
			: (pi[e] = os(i));
	}
	function os(t) {
		return { width: t.naturalWidth, height: t.naturalHeight };
	}
	function ce(t, e) {
		e === void 0 && (e = y);
		const i = [],
			{ length: s } = t;
		let n = 0;
		for (let r = 0; r < s; r++) {
			let [o, a] = O(t[r]) ? t[r].trim().split(" ") : [t[r]];
			if (
				((o = e(o)),
				(a = a ? y(a) / 100 : null),
				r === 0
					? a === null
						? (a = 0)
						: a && i.push([o, 0])
					: r === s - 1 &&
					  (a === null ? (a = 1) : a !== 1 && (i.push([o, a]), (a = 1))),
				i.push([o, a]),
				a === null)
			)
				n++;
			else if (n) {
				const l = i[r - n - 1][1],
					h = (a - l) / (n + 1);
				for (let u = n; u > 0; u--) i[r - u][1] = l + h * (n - u + 1);
				n = 0;
			}
		}
		return i;
	}
	function zn(t, e) {
		const i =
			bt(t.slice(1), (s) => {
				let [, n] = s;
				return e <= n;
			}) + 1;
		return [t[i - 1][0], t[i][0], (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])];
	}
	function ze(t, e) {
		const [i, s, n] = zn(t, e);
		return Jt(i) ? i + Math.abs(i - s) * n * (i < s ? 1 : -1) : +s;
	}
	const Fa = /^-?\d+(\S*)/;
	function gi(t, e) {
		for (const i of t) {
			const s = i.match == null ? void 0 : i.match(Fa);
			if (s) return s[1];
		}
		return e;
	}
	function He(t, e, i) {
		const s = t.style[e],
			n = c(c(t, e, i), e);
		return (t.style[e] = s), n;
	}
	function Hn(t, e) {
		return t.reduce((i, s) => ((i[s] = e), i), {});
	}
	var La = {
		mixins: [Mn, mt, Ne],
		props: {
			target: String,
			viewport: Number,
			easing: Number,
			start: String,
			end: String
		},
		data: { target: !1, viewport: 1, easing: 1, start: 0, end: 0 },
		computed: {
			target(t, e) {
				let { target: i } = t;
				return Fn((i && $t(i, e)) || e);
			},
			start(t) {
				let { start: e } = t;
				return Z(e, "height", this.target, !0);
			},
			end(t) {
				let { end: e, viewport: i } = t;
				return Z(
					e || ((i = (1 - i) * 100) && i + "vh+" + i + "%"),
					"height",
					this.target,
					!0
				);
			}
		},
		update: {
			read(t, e) {
				let { percent: i } = t;
				if ((e.has("scroll") || (i = !1), !this.matchMedia)) return;
				const s = i;
				return (
					(i = Wa(Xi(this.target, this.start, this.end), this.easing)),
					{ percent: i, style: s === i ? !1 : this.getCss(i) }
				);
			},
			write(t) {
				let { style: e } = t;
				if (!this.matchMedia) {
					this.reset();
					return;
				}
				e && c(this.$el, e);
			},
			events: ["scroll", "resize"]
		}
	};
	function Wa(t, e) {
		return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, -e + 1);
	}
	function Fn(t) {
		return t ? ("offsetTop" in t ? t : Fn(A(t))) : document.documentElement;
	}
	var Ln = {
			update: {
				write() {
					if (this.stack.length || this.dragging) return;
					const t = this.getValidIndex(this.index);
					(!~this.prevIndex || this.index !== t) && this.show(t);
				},
				events: ["resize"]
			}
		},
		Wn = {
			mixins: [Oe],
			connected() {
				this.lazyload(this.slides, this.getAdjacentSlides);
			}
		};
	function ja(t, e, i, s) {
		let { center: n, easing: r, list: o } = s;
		const a = new Re(),
			l = t ? Fe(t, o, n) : Fe(e, o, n) + $(e).width * i,
			h = e ? Fe(e, o, n) : l + $(t).width * i * (J ? -1 : 1);
		return {
			dir: i,
			show(u, d, f) {
				d === void 0 && (d = 0);
				const v = f ? "linear" : r;
				return (
					(u -= Math.round(u * U(d, -1, 1))),
					this.translate(d),
					(d = t ? d : U(d, 0, 1)),
					as(this.getItemIn(), "itemin", {
						percent: d,
						duration: u,
						timing: v,
						dir: i
					}),
					t &&
						as(this.getItemIn(!0), "itemout", {
							percent: 1 - d,
							duration: u,
							timing: v,
							dir: i
						}),
					I.start(o, { transform: W(-h * (J ? -1 : 1), "px") }, u, v).then(
						a.resolve,
						E
					),
					a.promise
				);
			},
			cancel() {
				I.cancel(o);
			},
			reset() {
				c(o, "transform", "");
			},
			forward(u, d) {
				return (
					d === void 0 && (d = this.percent()), I.cancel(o), this.show(u, d, !0)
				);
			},
			translate(u) {
				const d = this.getDistance() * i * (J ? -1 : 1);
				c(
					o,
					"transform",
					W(U(-h + (d - d * u), -mi(o), $(o).width) * (J ? -1 : 1), "px")
				);
				const f = this.getActives(),
					v = this.getItemIn(),
					P = this.getItemIn(!0);
				u = t ? U(u, -1, 1) : 0;
				for (const x of D(o)) {
					const K = g(f, x),
						M = x === v,
						z = x === P,
						at =
							M || (!z && (K || (i * (J ? -1 : 1) === -1) ^ (vi(x, o) > vi(t || e))));
					as(x, "itemtranslate" + (at ? "in" : "out"), {
						dir: i,
						percent: z ? 1 - u : M ? u : K ? 1 : 0
					});
				}
			},
			percent() {
				return Math.abs(
					(c(o, "transform").split(",")[4] * (J ? -1 : 1) + l) / (h - l)
				);
			},
			getDistance() {
				return Math.abs(h - l);
			},
			getItemIn(u) {
				u === void 0 && (u = !1);
				let d = this.getActives(),
					f = Rn(o, Fe(e || t, o, n));
				if (u) {
					const v = d;
					(d = f), (f = v);
				}
				return f[bt(f, (v) => !g(d, v))];
			},
			getActives() {
				return Rn(o, Fe(t || e, o, n));
			}
		};
	}
	function Fe(t, e, i) {
		const s = vi(t, e);
		return i ? s - Ra(t, e) : Math.min(s, jn(e));
	}
	function jn(t) {
		return Math.max(0, mi(t) - $(t).width);
	}
	function mi(t) {
		return D(t).reduce((e, i) => $(i).width + e, 0);
	}
	function Ra(t, e) {
		return $(e).width / 2 - $(t).width / 2;
	}
	function vi(t, e) {
		return (
			(t && (Ge(t).left + (J ? $(t).width - $(e).width : 0)) * (J ? -1 : 1)) || 0
		);
	}
	function Rn(t, e) {
		e -= 1;
		const i = $(t).width,
			s = e + i + 2;
		return D(t).filter((n) => {
			const r = vi(n, t),
				o = r + Math.min($(n).width, i);
			return r >= e && o <= s;
		});
	}
	function as(t, e, i) {
		p(t, zt(e, !1, !1, i));
	}
	var qa = {
		mixins: [tt, Pn, Ln, Wn],
		props: { center: Boolean, sets: Boolean },
		data: {
			center: !1,
			sets: !1,
			attrItem: "uk-slider-item",
			selList: ".uk-slider-items",
			selNav: ".uk-slider-nav",
			clsContainer: "uk-slider-container",
			Transitioner: ja
		},
		computed: {
			avgWidth() {
				return mi(this.list) / this.length;
			},
			finite(t) {
				let { finite: e } = t;
				return (
					e ||
					Math.ceil(mi(this.list)) <
						Math.trunc($(this.list).width + Va(this.list) + this.center)
				);
			},
			maxIndex() {
				if (!this.finite || (this.center && !this.sets)) return this.length - 1;
				if (this.center) return ve(this.sets);
				let t = 0;
				const e = jn(this.list),
					i = bt(this.slides, (s) => {
						if (t >= e) return !0;
						t += $(s).width;
					});
				return ~i ? i : this.length - 1;
			},
			sets(t) {
				let { sets: e } = t;
				if (!e) return;
				let i = 0;
				const s = [],
					n = $(this.list).width;
				for (let r = 0; r < this.slides.length; r++) {
					const o = $(this.slides[r]).width;
					i + o > n && (i = 0),
						this.center
							? i < n / 2 &&
							  i + o + $(this.slides[+r + 1]).width / 2 > n / 2 &&
							  (s.push(+r), (i = n / 2 - o / 2))
							: i === 0 && s.push(Math.min(+r, this.maxIndex)),
						(i += o);
				}
				if (s.length) return s;
			},
			transitionOptions() {
				return { center: this.center, list: this.list };
			}
		},
		connected() {
			R(this.$el, this.clsContainer, !m("." + this.clsContainer, this.$el));
		},
		update: {
			write() {
				for (const t of this.navItems) {
					const e = _t(rt(t, this.attrItem));
					e !== !1 &&
						(t.hidden =
							!this.maxIndex || e > this.maxIndex || (this.sets && !g(this.sets, e)));
				}
				this.length &&
					!this.dragging &&
					!this.stack.length &&
					(this.reorder(), this._translate(1)),
					this.updateActiveClasses();
			},
			events: ["resize"]
		},
		events: {
			beforeitemshow(t) {
				!this.dragging &&
					this.sets &&
					this.stack.length < 2 &&
					!g(this.sets, this.index) &&
					(this.index = this.getValidIndex());
				const e = Math.abs(
					this.index -
						this.prevIndex +
						((this.dir > 0 && this.index < this.prevIndex) ||
						(this.dir < 0 && this.index > this.prevIndex)
							? (this.maxIndex + 1) * this.dir
							: 0)
				);
				if (!this.dragging && e > 1) {
					for (let s = 0; s < e; s++)
						this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
					t.preventDefault();
					return;
				}
				const i =
					this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
				(this.duration =
					En(this.avgWidth / this.velocity) *
					($(this.slides[i]).width / this.avgWidth)),
					this.reorder();
			},
			itemshow() {
				~this.prevIndex && w(this._getTransitioner().getItemIn(), this.clsActive);
			},
			itemshown() {
				this.updateActiveClasses();
			}
		},
		methods: {
			reorder() {
				if (this.finite) {
					c(this.slides, "order", "");
					return;
				}
				const t =
					this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
				if (
					(this.slides.forEach((n, r) =>
						c(
							n,
							"order",
							this.dir > 0 && r < t ? 1 : this.dir < 0 && r >= this.index ? -1 : ""
						)
					),
					!this.center)
				)
					return;
				const e = this.slides[t];
				let i = $(this.list).width / 2 - $(e).width / 2,
					s = 0;
				for (; i > 0; ) {
					const n = this.getIndex(--s + t, t),
						r = this.slides[n];
					c(r, "order", n > t ? -2 : -1), (i -= $(r).width);
				}
			},
			updateActiveClasses() {
				const t = this._getTransitioner(this.index).getActives(),
					e = [
						this.clsActive,
						((!this.sets || g(this.sets, y(this.index))) && this.clsActivated) || ""
					];
				for (const i of this.slides) R(i, e, g(t, i));
			},
			getValidIndex(t, e) {
				if (
					(t === void 0 && (t = this.index),
					e === void 0 && (e = this.prevIndex),
					(t = this.getIndex(t, e)),
					!this.sets)
				)
					return t;
				let i;
				do {
					if (g(this.sets, t)) return t;
					(i = t), (t = this.getIndex(t + this.dir, e));
				} while (t !== i);
				return t;
			},
			getAdjacentSlides() {
				const { width: t } = $(this.list),
					e = -t,
					i = t * 2,
					s = $(this.slides[this.index]).width,
					n = this.center ? t / 2 - s / 2 : 0,
					r = new Set();
				for (const o of [-1, 1]) {
					let a = n + (o > 0 ? s : 0),
						l = 0;
					do {
						const h = this.slides[this.getIndex(this.index + o + l++ * o)];
						(a += $(h).width * o), r.add(h);
					} while (this.slides.length > l && a > e && a < i);
				}
				return Array.from(r);
			}
		}
	};
	function Va(t) {
		return Math.max(0, ...D(t).map((e) => $(e).width));
	}
	var qn = {
		mixins: [Mn],
		data: { selItem: "!li" },
		beforeConnect() {
			this.item = $t(this.selItem, this.$el);
		},
		disconnected() {
			this.item = null;
		},
		events: [
			{
				name: "itemin itemout",
				self: !0,
				el() {
					return this.item;
				},
				handler(t) {
					let {
						type: e,
						detail: { percent: i, duration: s, timing: n, dir: r }
					} = t;
					B.read(() => {
						const o = this.getCss(Yn(e, r, i)),
							a = this.getCss(Vn(e) ? 0.5 : r > 0 ? 1 : 0);
						B.write(() => {
							c(this.$el, o), I.start(this.$el, a, s, n).catch(E);
						});
					});
				}
			},
			{
				name: "transitioncanceled transitionend",
				self: !0,
				el() {
					return this.item;
				},
				handler() {
					I.cancel(this.$el);
				}
			},
			{
				name: "itemtranslatein itemtranslateout",
				self: !0,
				el() {
					return this.item;
				},
				handler(t) {
					let {
						type: e,
						detail: { percent: i, dir: s }
					} = t;
					B.read(() => {
						const n = this.getCss(Yn(e, s, i));
						B.write(() => c(this.$el, n));
					});
				}
			}
		]
	};
	function Vn(t) {
		return Gt(t, "in");
	}
	function Yn(t, e, i) {
		return (i /= 2), Vn(t) ^ (e < 0) ? i : 1 - i;
	}
	var Ya = {
			...ss,
			fade: {
				show() {
					return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
				},
				percent(t) {
					return 1 - c(t, "opacity");
				},
				translate(t) {
					return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }];
				}
			},
			scale: {
				show() {
					return [{ opacity: 0, transform: he(1 + 0.5), zIndex: 0 }, { zIndex: -1 }];
				},
				percent(t) {
					return 1 - c(t, "opacity");
				},
				translate(t) {
					return [
						{ opacity: 1 - t, transform: he(1 + 0.5 * t), zIndex: 0 },
						{ zIndex: -1 }
					];
				}
			},
			pull: {
				show(t) {
					return t < 0
						? [
								{ transform: W(30), zIndex: -1 },
								{ transform: W(), zIndex: 0 }
						  ]
						: [
								{ transform: W(-100), zIndex: 0 },
								{ transform: W(), zIndex: -1 }
						  ];
				},
				percent(t, e, i) {
					return i < 0 ? 1 - De(e) : De(t);
				},
				translate(t, e) {
					return e < 0
						? [
								{ transform: W(30 * t), zIndex: -1 },
								{ transform: W(-100 * (1 - t)), zIndex: 0 }
						  ]
						: [
								{ transform: W(-t * 100), zIndex: 0 },
								{ transform: W(30 * (1 - t)), zIndex: -1 }
						  ];
				}
			},
			push: {
				show(t) {
					return t < 0
						? [
								{ transform: W(100), zIndex: 0 },
								{ transform: W(), zIndex: -1 }
						  ]
						: [
								{ transform: W(-30), zIndex: -1 },
								{ transform: W(), zIndex: 0 }
						  ];
				},
				percent(t, e, i) {
					return i > 0 ? 1 - De(e) : De(t);
				},
				translate(t, e) {
					return e < 0
						? [
								{ transform: W(t * 100), zIndex: 0 },
								{ transform: W(-30 * (1 - t)), zIndex: -1 }
						  ]
						: [
								{ transform: W(-30 * t), zIndex: -1 },
								{ transform: W(100 * (1 - t)), zIndex: 0 }
						  ];
				}
			}
		},
		Ga = {
			mixins: [tt, _n, Ln, Wn],
			props: { ratio: String, minHeight: Number, maxHeight: Number },
			data: {
				ratio: "16:9",
				minHeight: !1,
				maxHeight: !1,
				selList: ".uk-slideshow-items",
				attrItem: "uk-slideshow-item",
				selNav: ".uk-slideshow-nav",
				Animations: Ya
			},
			update: {
				read() {
					if (!this.list) return !1;
					let [t, e] = this.ratio.split(":").map(Number);
					return (
						(e = (e * this.list.offsetWidth) / t || 0),
						this.minHeight && (e = Math.max(this.minHeight, e)),
						this.maxHeight && (e = Math.min(this.maxHeight, e)),
						{ height: e - ee(this.list, "height", "content-box") }
					);
				},
				write(t) {
					let { height: e } = t;
					e > 0 && c(this.list, "minHeight", e);
				},
				events: ["resize"]
			},
			methods: {
				getAdjacentSlides() {
					return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
				}
			}
		},
		Xa = {
			mixins: [tt, Tn],
			props: {
				group: String,
				threshold: Number,
				clsItem: String,
				clsPlaceholder: String,
				clsDrag: String,
				clsDragState: String,
				clsBase: String,
				clsNoDrag: String,
				clsEmpty: String,
				clsCustom: String,
				handle: String
			},
			data: {
				group: !1,
				threshold: 5,
				clsItem: "uk-sortable-item",
				clsPlaceholder: "uk-sortable-placeholder",
				clsDrag: "uk-sortable-drag",
				clsDragState: "uk-drag",
				clsBase: "uk-sortable",
				clsNoDrag: "uk-sortable-nodrag",
				clsEmpty: "uk-sortable-empty",
				clsCustom: "",
				handle: !1,
				pos: {}
			},
			created() {
				for (const t of ["init", "start", "move", "end"]) {
					const e = this[t];
					this[t] = (i) => {
						xt(this.pos, te(i)), e(i);
					};
				}
			},
			events: { name: ct, passive: !1, handler: "init" },
			computed: {
				target() {
					return (this.$el.tBodies || [this.$el])[0];
				},
				items() {
					return D(this.target);
				},
				isEmpty: {
					get() {
						return ge(this.items);
					},
					watch(t) {
						R(this.target, this.clsEmpty, t);
					},
					immediate: !0
				},
				handles: {
					get(t, e) {
						let { handle: i } = t;
						return i ? N(i, e) : this.items;
					},
					watch(t, e) {
						c(e, { touchAction: "", userSelect: "" }),
							c(t, { touchAction: Wt ? "none" : "", userSelect: "none" });
					},
					immediate: !0
				}
			},
			update: {
				write(t) {
					if (!this.drag || !A(this.placeholder)) return;
					const {
						pos: { x: e, y: i },
						origin: { offsetTop: s, offsetLeft: n },
						placeholder: r
					} = this;
					c(this.drag, { top: i - s, left: e - n });
					const o = this.getSortable(document.elementFromPoint(e, i));
					if (!o) return;
					const { items: a } = o;
					if (a.some(I.inProgress)) return;
					const l = Qa(a, { x: e, y: i });
					if (a.length && (!l || l === r)) return;
					const h = this.getSortable(r),
						u = Ua(o.target, l, r, e, i, o === h && t.moved !== l);
					u !== !1 &&
						((u && r === u) ||
							(o !== h ? (h.remove(r), (t.moved = l)) : delete t.moved,
							o.insert(r, u),
							this.touched.add(o)));
				},
				events: ["move"]
			},
			methods: {
				init(t) {
					const { target: e, button: i, defaultPrevented: s } = t,
						[n] = this.items.filter((r) => F(e, r));
					!n ||
						s ||
						i > 0 ||
						Ii(e) ||
						F(e, "." + this.clsNoDrag) ||
						(this.handle && !F(e, this.handle)) ||
						(t.preventDefault(),
						(this.touched = new Set([this])),
						(this.placeholder = n),
						(this.origin = { target: e, index: Qt(n), ...this.pos }),
						T(document, se, this.move),
						T(document, gt, this.end),
						this.threshold || this.start(t));
				},
				start(t) {
					this.drag = Za(this.$container, this.placeholder);
					const { left: e, top: i } = this.placeholder.getBoundingClientRect();
					xt(this.origin, { offsetLeft: this.pos.x - e, offsetTop: this.pos.y - i }),
						w(this.drag, this.clsDrag, this.clsCustom),
						w(this.placeholder, this.clsPlaceholder),
						w(this.items, this.clsItem),
						w(document.documentElement, this.clsDragState),
						p(this.$el, "start", [this, this.placeholder]),
						Ja(this.pos),
						this.move(t);
				},
				move(t) {
					this.drag
						? this.$emit("move")
						: (Math.abs(this.pos.x - this.origin.x) > this.threshold ||
								Math.abs(this.pos.y - this.origin.y) > this.threshold) &&
						  this.start(t);
				},
				end() {
					if ((Ut(document, se, this.move), Ut(document, gt, this.end), !this.drag))
						return;
					Ka();
					const t = this.getSortable(this.placeholder);
					this === t
						? this.origin.index !== Qt(this.placeholder) &&
						  p(this.$el, "moved", [this, this.placeholder])
						: (p(t.$el, "added", [t, this.placeholder]),
						  p(this.$el, "removed", [this, this.placeholder])),
						p(this.$el, "stop", [this, this.placeholder]),
						ht(this.drag),
						(this.drag = null);
					for (const { clsPlaceholder: e, clsItem: i } of this.touched)
						for (const s of this.touched) _(s.items, e, i);
					(this.touched = null), _(document.documentElement, this.clsDragState);
				},
				insert(t, e) {
					w(this.items, this.clsItem);
					const i = () => (e ? Fi(e, t) : G(this.target, t));
					this.animate(i);
				},
				remove(t) {
					!F(t, this.target) || this.animate(() => ht(t));
				},
				getSortable(t) {
					do {
						const e = this.$getComponent(t, "sortable");
						if (e && (e === this || (this.group !== !1 && e.group === this.group)))
							return e;
					} while ((t = A(t)));
				}
			}
		};
	let Gn;
	function Ja(t) {
		let e = Date.now();
		Gn = setInterval(() => {
			let { x: i, y: s } = t;
			s += Rt(window);
			const n = (Date.now() - e) * 0.3;
			(e = Date.now()),
				Tt(document.elementFromPoint(i, t.y), /auto|scroll/)
					.reverse()
					.some((r) => {
						let { scrollTop: o, scrollHeight: a } = r;
						const { top: l, bottom: h, height: u } = ut(r);
						if (l < s && l + 35 > s) o -= n;
						else if (h > s && h - 35 < s) o += n;
						else return;
						if (o > 0 && o < a - u) return Rt(r, o), !0;
					});
		}, 15);
	}
	function Ka() {
		clearInterval(Gn);
	}
	function Za(t, e) {
		const i = G(
			t,
			e.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, "$1div$2")
		);
		return (
			c(i, "margin", "0", "important"),
			c(i, {
				boxSizing: "border-box",
				width: e.offsetWidth,
				height: e.offsetHeight,
				padding: c(e, "padding")
			}),
			L(i.firstElementChild, L(e.firstElementChild)),
			i
		);
	}
	function Qa(t, e) {
		return t[bt(t, (i) => je(e, i.getBoundingClientRect()))];
	}
	function Ua(t, e, i, s, n, r) {
		if (!D(t).length) return;
		const o = e.getBoundingClientRect();
		if (!r)
			return tl(t, i) || n < o.top + o.height / 2 ? e : e.nextElementSibling;
		const a = i.getBoundingClientRect(),
			l = Xn([o.top, o.bottom], [a.top, a.bottom]),
			h = l ? s : n,
			u = l ? "width" : "height",
			d = l ? "left" : "top",
			f = l ? "right" : "bottom",
			v = a[u] < o[u] ? o[u] - a[u] : 0;
		return a[d] < o[d]
			? v && h < o[d] + v
				? !1
				: e.nextElementSibling
			: v && h > o[f] - v
			? !1
			: e;
	}
	function tl(t, e) {
		const i = D(t).length === 1;
		i && G(t, e);
		const s = D(t),
			n = s.some((r, o) => {
				const a = r.getBoundingClientRect();
				return s.slice(o + 1).some((l) => {
					const h = l.getBoundingClientRect();
					return !Xn([a.left, a.right], [h.left, h.right]);
				});
			});
		return i && ht(e), n;
	}
	function Xn(t, e) {
		return t[1] > e[0] && e[1] > t[0];
	}
	var el = {
		mixins: [le, It, Ks],
		args: "title",
		props: { delay: Number, title: String },
		data: {
			pos: "top",
			title: "",
			delay: 0,
			animation: ["uk-animation-scale-up"],
			duration: 100,
			cls: "uk-active"
		},
		beforeConnect() {
			(this._hasTitle = Bt(this.$el, "title")),
				k(this.$el, "title", ""),
				this.updateAria(!1),
				il(this.$el);
		},
		disconnected() {
			this.hide(), k(this.$el, "title", this._hasTitle ? this.title : null);
		},
		methods: {
			show() {
				this.isToggled(this.tooltip || null) ||
					!this.title ||
					((this._unbind = j(
						document,
						"show keydown " + ct,
						this.hide,
						!1,
						(t) =>
							(t.type === ct && !F(t.target, this.$el)) ||
							(t.type === "keydown" && t.keyCode === 27) ||
							(t.type === "show" &&
								t.detail[0] !== this &&
								t.detail[0].$name === this.$name)
					)),
					clearTimeout(this.showTimer),
					(this.showTimer = setTimeout(this._show, this.delay)));
			},
			async hide() {
				H(this.$el, "input:focus") ||
					(clearTimeout(this.showTimer),
					this.isToggled(this.tooltip || null) &&
						(await this.toggleElement(this.tooltip, !1, !1),
						ht(this.tooltip),
						(this.tooltip = null),
						this._unbind()));
			},
			_show() {
				(this.tooltip = G(
					this.container,
					'<div class="uk-' +
						this.$options.name +
						'"> <div class="uk-' +
						this.$options.name +
						'-inner">' +
						this.title +
						"</div> </div>"
				)),
					T(this.tooltip, "toggled", (t, e) => {
						if ((this.updateAria(e), !e)) return;
						this.positionAt(this.tooltip, this.$el);
						const [i, s] = sl(this.tooltip, this.$el, this.pos);
						this.origin = this.axis === "y" ? Xe(i) + "-" + s : s + "-" + Xe(i);
					}),
					this.toggleElement(this.tooltip, !0);
			},
			updateAria(t) {
				k(this.$el, "aria-expanded", t);
			}
		},
		events: {
			focus: "show",
			blur: "hide",
			[jt + " " + ne](t) {
				kt(t) || this[t.type === jt ? "show" : "hide"]();
			},
			[ct](t) {
				kt(t) && this.show();
			}
		}
	};
	function il(t) {
		Ve(t) || k(t, "tabindex", "0");
	}
	function sl(t, e, i) {
		let [s, n] = i;
		const r = C(t),
			o = C(e),
			a = [
				["left", "right"],
				["top", "bottom"]
			];
		for (const h of a) {
			if (r[h[0]] >= o[h[1]]) {
				s = h[1];
				break;
			}
			if (r[h[1]] <= o[h[0]]) {
				s = h[0];
				break;
			}
		}
		const l = g(a[0], s) ? a[1] : a[0];
		return (
			r[l[0]] === o[l[0]]
				? (n = l[0])
				: r[l[1]] === o[l[1]]
				? (n = l[1])
				: (n = "center"),
			[s, n]
		);
	}
	var nl = {
		props: {
			allow: String,
			clsDragover: String,
			concurrent: Number,
			maxSize: Number,
			method: String,
			mime: String,
			msgInvalidMime: String,
			msgInvalidName: String,
			msgInvalidSize: String,
			multiple: Boolean,
			name: String,
			params: Object,
			type: String,
			url: String
		},
		data: {
			allow: !1,
			clsDragover: "uk-dragover",
			concurrent: 1,
			maxSize: 0,
			method: "POST",
			mime: !1,
			msgInvalidMime: "Invalid File Type: %s",
			msgInvalidName: "Invalid File Name: %s",
			msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
			multiple: !1,
			name: "files[]",
			params: {},
			type: "",
			url: "",
			abort: E,
			beforeAll: E,
			beforeSend: E,
			complete: E,
			completeAll: E,
			error: E,
			fail: E,
			load: E,
			loadEnd: E,
			loadStart: E,
			progress: E
		},
		events: {
			change(t) {
				!H(t.target, 'input[type="file"]') ||
					(t.preventDefault(),
					t.target.files && this.upload(t.target.files),
					(t.target.value = ""));
			},
			drop(t) {
				wi(t);
				const e = t.dataTransfer;
				!(e != null && e.files) ||
					(_(this.$el, this.clsDragover), this.upload(e.files));
			},
			dragenter(t) {
				wi(t);
			},
			dragover(t) {
				wi(t), w(this.$el, this.clsDragover);
			},
			dragleave(t) {
				wi(t), _(this.$el, this.clsDragover);
			}
		},
		methods: {
			async upload(t) {
				if (((t = bi(t)), !t.length)) return;
				p(this.$el, "upload", [t]);
				for (const s of t) {
					if (this.maxSize && this.maxSize * 1e3 < s.size) {
						this.fail(this.msgInvalidSize.replace("%s", this.maxSize));
						return;
					}
					if (this.allow && !Jn(this.allow, s.name)) {
						this.fail(this.msgInvalidName.replace("%s", this.allow));
						return;
					}
					if (this.mime && !Jn(this.mime, s.type)) {
						this.fail(this.msgInvalidMime.replace("%s", this.mime));
						return;
					}
				}
				this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
				const e = rl(t, this.concurrent),
					i = async (s) => {
						const n = new FormData();
						s.forEach((r) => n.append(this.name, r));
						for (const r in this.params) n.append(r, this.params[r]);
						try {
							const r = await ms(this.url, {
								data: n,
								method: this.method,
								responseType: this.type,
								beforeSend: (o) => {
									const { xhr: a } = o;
									a.upload && T(a.upload, "progress", this.progress);
									for (const l of ["loadStart", "load", "loadEnd", "abort"])
										T(a, l.toLowerCase(), this[l]);
									return this.beforeSend(o);
								}
							});
							this.complete(r), e.length ? await i(e.shift()) : this.completeAll(r);
						} catch (r) {
							this.error(r);
						}
					};
				await i(e.shift());
			}
		}
	};
	function Jn(t, e) {
		return e.match(
			new RegExp(
				"^" +
					t
						.replace(/\//g, "\\/")
						.replace(/\*\*/g, "(\\/[^\\/]+)*")
						.replace(/\*/g, "[^\\/]+")
						.replace(/((?!\\))\?/g, "$1.") +
					"$",
				"i"
			)
		);
	}
	function rl(t, e) {
		const i = [];
		for (let s = 0; s < t.length; s += e) i.push(t.slice(s, s + e));
		return i;
	}
	function wi(t) {
		t.preventDefault(), t.stopPropagation();
	}
	var ol = Object.freeze({
		__proto__: null,
		Countdown: fa,
		Filter: va,
		Lightbox: Ea,
		LightboxPanel: On,
		Notification: Oa,
		Parallax: La,
		Slider: qa,
		SliderParallax: qn,
		Slideshow: Ga,
		SlideshowParallax: qn,
		Sortable: Xa,
		Tooltip: el,
		Upload: nl
	});
	return yt(ol, (t, e) => et.component(e, t)), et;
});
