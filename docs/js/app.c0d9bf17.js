(function(t) {
  function e(e) {
    for (var n, r, c=e[0], i=e[1], l=e[2], f=0, j=[]; f<c.length; f++)r=c[f], Object.prototype.hasOwnProperty.call(s, r)&&s[r]&&j.push(s[r][0]), s[r]=0; for (n in i)Object.prototype.hasOwnProperty.call(i, n)&&(t[n]=i[n]); u&&u(e); while (j.length)j.shift()(); return o.push.apply(o, l||[]), a();
  } function a() {
    for (var t, e=0; e<o.length; e++) {
      for (var a=o[e], n=!0, c=1; c<a.length; c++) {
        const i=a[c]; 0!==s[i]&&(n=!1);
      }n&&(o.splice(e--, 1), t=r(r.s=a[0]));
    } return t;
  } const n={}; var s={app: 0}; var o=[]; function r(e) {
    if (n[e]) return n[e].exports; const a=n[e]={i: e, l: !1, exports: {}}; return t[e].call(a.exports, a, a.exports, r), a.l=!0, a.exports;
  }r.m=t, r.c=n, r.d=function(t, e, a) {
    r.o(t, e)||Object.defineProperty(t, e, {enumerable: !0, get: a});
  }, r.r=function(t) {
    'undefined'!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(t, '__esModule', {value: !0});
  }, r.t=function(t, e) {
    if (1&e&&(t=r(t)), 8&e) return t; if (4&e&&'object'===typeof t&&t&&t.__esModule) return t; const a=Object.create(null); if (r.r(a), Object.defineProperty(a, 'default', {enumerable: !0, value: t}), 2&e&&'string'!=typeof t) {
      for (const n in t) {
        r.d(a, n, function(e) {
          return t[e];
        }.bind(null, n));
      }
    } return a;
  }, r.n=function(t) {
    const e=t&&t.__esModule?function() {
      return t['default'];
    }:function() {
      return t;
    }; return r.d(e, 'a', e), e;
  }, r.o=function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, r.p='/'; let c=window['webpackJsonp']=window['webpackJsonp']||[]; const i=c.push.bind(c); c.push=e, c=c.slice(); for (let l=0; l<c.length; l++)e(c[l]); var u=i; o.push([0, 'chunk-vendors']), a();
})({'0': function(t, e, a) {
  t.exports=a('56d7');
}, '1': function(t, e) {}, '1fd6': function(t, e, a) {}, '2': function(t, e) {}, '3': function(t, e) {}, '32b8': function(t, e, a) {
  'use strict'; const n=a('dd9c'); const s=a.n(n); s.a;
}, '359c': function(t, e, a) {
  t.exports=a.p+'img/github.c28b7341.png';
}, '37ca': function(t, e, a) {}, '4': function(t, e) {}, '43d9': function(t, e, a) {
  'use strict'; const n=a('37ca'); const s=a.n(n); s.a;
}, '4678': function(t, e, a) {
  const n={'./af': '2bfb', './af.js': '2bfb', './ar': '8e73', './ar-dz': 'a356', './ar-dz.js': 'a356', './ar-kw': '423e', './ar-kw.js': '423e', './ar-ly': '1cfd', './ar-ly.js': '1cfd', './ar-ma': '0a84', './ar-ma.js': '0a84', './ar-sa': '8230', './ar-sa.js': '8230', './ar-tn': '6d83', './ar-tn.js': '6d83', './ar.js': '8e73', './az': '485c', './az.js': '485c', './be': '1fc1', './be.js': '1fc1', './bg': '84aa', './bg.js': '84aa', './bm': 'a7fa', './bm.js': 'a7fa', './bn': '9043', './bn.js': '9043', './bo': 'd26a', './bo.js': 'd26a', './br': '6887', './br.js': '6887', './bs': '2554', './bs.js': '2554', './ca': 'd716', './ca.js': 'd716', './cs': '3c0d', './cs.js': '3c0d', './cv': '03ec', './cv.js': '03ec', './cy': '9797', './cy.js': '9797', './da': '0f14', './da.js': '0f14', './de': 'b469', './de-at': 'b3eb', './de-at.js': 'b3eb', './de-ch': 'bb71', './de-ch.js': 'bb71', './de.js': 'b469', './dv': '598a', './dv.js': '598a', './el': '8d47', './el.js': '8d47', './en-SG': 'cdab', './en-SG.js': 'cdab', './en-au': '0e6b', './en-au.js': '0e6b', './en-ca': '3886', './en-ca.js': '3886', './en-gb': '39a6', './en-gb.js': '39a6', './en-ie': 'e1d3', './en-ie.js': 'e1d3', './en-il': '7333', './en-il.js': '7333', './en-nz': '6f50', './en-nz.js': '6f50', './eo': '65db', './eo.js': '65db', './es': '898b', './es-do': '0a3c', './es-do.js': '0a3c', './es-us': '55c9', './es-us.js': '55c9', './es.js': '898b', './et': 'ec18', './et.js': 'ec18', './eu': '0ff2', './eu.js': '0ff2', './fa': '8df4', './fa.js': '8df4', './fi': '81e9', './fi.js': '81e9', './fo': '0721', './fo.js': '0721', './fr': '9f26', './fr-ca': 'd9f8', './fr-ca.js': 'd9f8', './fr-ch': '0e49', './fr-ch.js': '0e49', './fr.js': '9f26', './fy': '7118', './fy.js': '7118', './ga': '5120', './ga.js': '5120', './gd': 'f6b4', './gd.js': 'f6b4', './gl': '8840', './gl.js': '8840', './gom-latn': '0caa', './gom-latn.js': '0caa', './gu': 'e0c5', './gu.js': 'e0c5', './he': 'c7aa', './he.js': 'c7aa', './hi': 'dc4d', './hi.js': 'dc4d', './hr': '4ba9', './hr.js': '4ba9', './hu': '5b14', './hu.js': '5b14', './hy-am': 'd6b6', './hy-am.js': 'd6b6', './id': '5038', './id.js': '5038', './is': '0558', './is.js': '0558', './it': '6e98', './it-ch': '6f12', './it-ch.js': '6f12', './it.js': '6e98', './ja': '079e', './ja.js': '079e', './jv': 'b540', './jv.js': 'b540', './ka': '201b', './ka.js': '201b', './kk': '6d79', './kk.js': '6d79', './km': 'e81d', './km.js': 'e81d', './kn': '3e92', './kn.js': '3e92', './ko': '22f8', './ko.js': '22f8', './ku': '2421', './ku.js': '2421', './ky': '9609', './ky.js': '9609', './lb': '440c', './lb.js': '440c', './lo': 'b29d', './lo.js': 'b29d', './lt': '26f9', './lt.js': '26f9', './lv': 'b97c', './lv.js': 'b97c', './me': '293c', './me.js': '293c', './mi': '688b', './mi.js': '688b', './mk': '6909', './mk.js': '6909', './ml': '02fb', './ml.js': '02fb', './mn': '958b', './mn.js': '958b', './mr': '39bd', './mr.js': '39bd', './ms': 'ebe4', './ms-my': '6403', './ms-my.js': '6403', './ms.js': 'ebe4', './mt': '1b45', './mt.js': '1b45', './my': '8689', './my.js': '8689', './nb': '6ce3', './nb.js': '6ce3', './ne': '3a39', './ne.js': '3a39', './nl': 'facd', './nl-be': 'db29', './nl-be.js': 'db29', './nl.js': 'facd', './nn': 'b84c', './nn.js': 'b84c', './pa-in': 'f3ff', './pa-in.js': 'f3ff', './pl': '8d57', './pl.js': '8d57', './pt': 'f260', './pt-br': 'd2d4', './pt-br.js': 'd2d4', './pt.js': 'f260', './ro': '972c', './ro.js': '972c', './ru': '957c', './ru.js': '957c', './sd': '6784', './sd.js': '6784', './se': 'ffff', './se.js': 'ffff', './si': 'eda5', './si.js': 'eda5', './sk': '7be6', './sk.js': '7be6', './sl': '8155', './sl.js': '8155', './sq': 'c8f3', './sq.js': 'c8f3', './sr': 'cf1e', './sr-cyrl': '13e9', './sr-cyrl.js': '13e9', './sr.js': 'cf1e', './ss': '52bd', './ss.js': '52bd', './sv': '5fbd', './sv.js': '5fbd', './sw': '74dc', './sw.js': '74dc', './ta': '3de5', './ta.js': '3de5', './te': '5cbb', './te.js': '5cbb', './tet': '576c', './tet.js': '576c', './tg': '3b1b', './tg.js': '3b1b', './th': '10e8', './th.js': '10e8', './tl-ph': '0f38', './tl-ph.js': '0f38', './tlh': 'cf75', './tlh.js': 'cf75', './tr': '0e81', './tr.js': '0e81', './tzl': 'cf51', './tzl.js': 'cf51', './tzm': 'c109', './tzm-latn': 'b53d', './tzm-latn.js': 'b53d', './tzm.js': 'c109', './ug-cn': '6117', './ug-cn.js': '6117', './uk': 'ada2', './uk.js': 'ada2', './ur': '5294', './ur.js': '5294', './uz': '2e8c', './uz-latn': '010e', './uz-latn.js': '010e', './uz.js': '2e8c', './vi': '2921', './vi.js': '2921', './x-pseudo': 'fd7e', './x-pseudo.js': 'fd7e', './yo': '7f33', './yo.js': '7f33', './zh-cn': '5c3a', './zh-cn.js': '5c3a', './zh-hk': '49ab', './zh-hk.js': '49ab', './zh-tw': '90ea', './zh-tw.js': '90ea'}; function s(t) {
    const e=o(t); return a(e);
  } function o(t) {
    if (!a.o(n, t)) {
      const e=new Error('Cannot find module \''+t+'\''); throw e.code='MODULE_NOT_FOUND', e;
    } return n[t];
  }s.keys=function() {
    return Object.keys(n);
  }, s.resolve=o, t.exports=s, s.id='4678';
}, '54b0': function(t, e, a) {
  'use strict'; const n=a('6d45'); const s=a.n(n); s.a;
}, '56d7': function(t, e, a) {
  'use strict'; a.r(e); a('e260'), a('e6cf'), a('cca6'), a('a79d'); const n=a('2b0e'); const s=function() {
    const t=this; const e=t.$createElement; const a=t._self._c||e; return a('div', {attrs: {id: 'app'}}, [a('Home')], 1);
  }; const o=[]; const r=function() {
    const t=this; const e=t.$createElement; const a=t._self._c||e; return a('div', {staticClass: 'home'}, [a('el-row', [a('el-col', {attrs: {xs: 24, sm: 6}}, [a('MyInfo')], 1), a('el-col', {attrs: {xs: 24, sm: 18}}, [a('el-tabs', {staticClass: 'tabs', model: {value: t.page, callback: function(e) {
      t.page=e;
    }, expression: 'page'}}, [a('el-tab-pane', {attrs: {label: 'Overview', name: 'Overview'}}, [a('PopularProject', {attrs: {hot: !0}}), a('TimeLine')], 1), a('el-tab-pane', {attrs: {label: 'Projects', name: 'Projects'}}, [a('PopularProject', {attrs: {hot: !1}})], 1), a('el-tab-pane', {attrs: {label: 'Experience', name: 'Experience'}}, [a('Experience')], 1)], 1)], 1)], 1)], 1);
  }; const c=[]; const i=function() {
    const t=this; const e=t.$createElement; const a=t._self._c||e; return a('div', {staticClass: 'myInfo'}, [a('div', {staticClass: 'photo'}, [a('img', {staticStyle: {width: '100%'}, attrs: {src: t.info.photo}})]), a('div', {staticClass: 'name'}, [t._v(' '+t._s(t.info.name)+' ')]), a('div', {staticClass: 'sub'}, [t._v(' '+t._s(t.info.job)+' ')]), a('div', {staticClass: 'content', domProps: {innerHTML: t._s(t.info.description)}}), t._m(0)]);
  }; const l=[function() {
    const t=this; const e=t.$createElement; const a=t._self._c||e; return a('div', {staticClass: 'github'}, [a('a', {attrs: {href: 'https://github.com/funtuan'}}, [t._v('https://github.com/funtuan')])]);
  }]; const u=a('6284'); const f=a.n(u); const j=a('359c'); const d=a.n(j); const p={name: 'MyInfo', data: function() {
    return {githubImage: d.a, info: {photo: f.a, name: '陳柏翰', nickname: 'FunTuan', job: '全端工程師', description: '\n        後端目前以 Node.js 為主，未來想多使用 Golang 開發，早期則用 PHP<br>\n        前端以 Vue 為主，習慣 SPA 架構<br>\n        除網頁外，也熱愛開發 ChatBot、Chrome Extension 等網路應用\n        '}};
  }}; const b=p; const h=(a('fa90'), a('2877')); const m=Object(h['a'])(b, i, l, !1, null, '36ce54f4', null); const v=m.exports; const g=function() {
    const t=this; const e=t.$createElement; const a=t._self._c||e; return a('div', {staticClass: 'popular-project'}, [a('div', {staticClass: 'title'}, [t._v(' '+t._s(t.hot?'熱門作品集':'所有作品集')+' ')]), a('el-row', t._l(t.projectData, (function(t) {
      return a('el-col', {key: t.atTime, attrs: {xs: 24, sm: 12}}, [a('ProjectBlock', {attrs: {project: t}})], 1);
    })), 1)], 1);
  }; const y=[]; const _=(a('4de4'), function() {
    const t=this; const e=t.$createElement; const a=t._self._c||e; return a('div', {staticClass: 'project box'}, [a('div', {staticClass: 'status'}, [a('span', {staticClass: 'time'}, [t._v(' '+t._s(t.project.atTime.getFullYear()+'年'+(parseInt(t.project.atTime.getMonth())+1)+'月')+' ')]), t.project.online?a('span', {staticClass: 'online'}, [a('span', {staticClass: 'repo-language-color', style: 'background-color: #61ac16'}), t._v(' 目前運行中 ')]):t._e(), t.project.online?t._e():a('span', {staticClass: 'close'}, [t._v(' 已停止服務 ')])]), a('a', {staticClass: 'title', attrs: {href: t.project.mainUrl}}, [t._v(' '+t._s(t.project.title)+' ')]), a('div', {staticClass: 'content'}, [t._v(' '+t._s(t.project.content)+' ')]), a('div', {staticClass: 'features'}, t._l(t.project.features, (function(e) {
      return a('div', {key: e}, [t._v(' '+t._s(e)+' ')]);
    })), 0), a('div', {staticClass: 'tag-list'}, [t._l(t.project.lang, (function(e) {
      return a('span', {key: e, staticClass: 'tag'}, [a('span', {staticClass: 'repo-language-color', style: 'background-color: '+t.randomColor(e.length)}), t._v(' '+t._s(e)+' ')]);
    })), t._l(t.project.tool, (function(e) {
      return a('span', {key: e, staticClass: 'tag'}, [a('span', {staticClass: 'repo-language-color', style: 'background-color: '+t.randomColor(e.length)}), t._v(' '+t._s(e)+' ')]);
    }))], 2)]);
  }); const k=[]; const C=(a('d3b7'), a('25f0'), a('c1df')); const w=a.n(C); const P={name: 'ProjectBlock', props: {project: Object}, data: function() {
    return {};
  }, methods: {showDate: function(t) {
    return w()(t).format('YYYY-MM-DD');
  }, randomColor: function(t) {
    let e=1e4*Math.sin(t++); return e-=Math.floor(e), '#'+(16777216+16777215*e).toString(16).substr(1, 6);
  }}}; const D=P; const x=(a('5a1f'), Object(h['a'])(D, _, k, !1, null, 'f5b63300', null)); const M=x.exports; const E=[{title: '口罩哪裡買？', job: '個人單獨開發', atTime: new Date('2020/2/4'), lang: ['nodejs'], tool: ['LINE-chatbot', 'Docker', 'Nginx'], mainUrl: 'https://www.ptt.cc/bbs/Gossiping/M.1580818257.A.BBA.html', genre: 'Side-Project', content: '供民眾查詢口罩剩餘數量等資訊，擁有近46萬好友數', features: ['乘載大量用戶｜捨棄Database設計，放入RAM處理', '快速開發上線｜延伸既有專案，只花費2小時於chatbot開發'], online: !0, hot: !0}, {title: '台南丟垃圾車！立馬開追！', job: '個人單獨開發', atTime: new Date('2019/7/26'), lang: ['nodejs'], tool: ['LINE-chatbot', 'mongoDB', 'Docker', 'Nginx'], mainUrl: 'https://www.ptt.cc/bbs/Tainan/M.1564115283.A.B46.html', genre: 'Side-Project', content: '供台南民眾查詢即時垃圾車資訊', features: ['LINE API｜累積 LINE Messaging API 串接經驗', '爬蟲實作｜取得台南環保局垃圾車清運資料', '使用流程簡化｜以自身使用角度，設計流程簡單且精準的加權查詢'], online: !0, hot: !1}, {title: '最後一個晚安', job: 'ChatBot技術支援', atTime: new Date('2017/10/1'), lang: ['nodejs'], tool: ['FB-chatbot', 'mongoDB', 'Docker', 'Nginx'], mainUrl: 'https://newtalk.tw/news/view/2017-12-17/107390', genre: 'Competition', content: '在2017年青年迴響計畫，取得最大獎「迴響獎」', features: ['劇情腳本匯入｜設計admin介面，讓團隊成員，可簡易製作聊天內容', '靈活的資料結構｜以 NoSQL 方式將故事放於 mongoDB'], online: !1}, {title: '聊天系', job: '創辦人', atTime: new Date('2017/9/24'), lang: ['nodejs'], tool: ['FB-chatbot', 'mongoDB', 'Docker', 'Nginx'], mainUrl: 'https://www.facebook.com/chatcircle.tw/', genre: 'Side-Project', content: '開發專屬大學生匿名聊天平台，且主導品牌推廣', features: ['Messenger API｜累積 FB Graph API 串接經驗', '社群行銷宣傳｜運用社群行銷，使匿名聊天平台能度過初始黑暗期'], online: !0, hot: !0}, {title: '紳士狗', job: '創辦人', atTime: new Date('2017/2/1'), lang: ['php'], tool: ['Apache', 'MySQL'], mainUrl: 'https://www.facebook.com/358170297914713', genre: 'Side-Project', content: '2017年瀏覽量2億次成人影音搜尋平台', features: ['LINEBot行銷範例｜自發性地擴散，以極快的竄升速度', 'FB粉專經營｜經營社群、粉專，維持品牌高討論度與觸及', '前後端分離｜後端 RESTful API 前端 jQuery'], online: !1, hot: !0}, {title: '房地王吵房聊天室', job: '全端實作', atTime: new Date('2019/8/1'), lang: ['vue', 'nodejs'], tool: ['Apache', 'MySQL'], mainUrl: 'https://chat.housetube.tw/', genre: 'Work', content: '為房地產即時聊天系統，獨立完成前端設計後端系統', features: ['SPA 實作｜前端 Vue.js 響應式版型實作', '即時通訊｜後端以 Node.js + Socket.io 實現', '高效資料存取｜以Redis建立聊天紀錄分頁，搭配Mysql備份'], online: !0, hot: !0}, {title: '待轉大富翁', job: '組織團隊完成', atTime: new Date('2017/11/15'), lang: ['vue'], tool: [], mainUrl: 'https://funtuan.github.io/Mobiuscooter/', genre: 'Side-Project', content: '根據機車待轉議題，24小時開發的該議題小遊戲', features: ['前端框架經驗｜嘗試使用 Vue.js 作為前端框架'], online: !0, hot: !1}, {title: '房地王搜搜', job: '全端實作', atTime: new Date('2019/11/1'), lang: ['nodejs'], tool: ['MySQL'], mainUrl: 'https://housetube.tw/', genre: 'Work', content: '結合分詞、語意分析等技術，開發出建案、新聞、部落格搜尋引擎', features: ['模糊搜尋｜將內容以 jieba 分詞，計算出搜尋詞 SimHash 距離', '語意分析｜分析搜尋詞前後文詞性，進行特殊條件搜尋流程'], online: !0, hot: !1}, {title: '房地王會員中心', job: '安全性優化', atTime: new Date('2019/2/1'), lang: ['php'], tool: ['MySQL'], mainUrl: 'https://member.housetube.tw/', genre: 'Work', content: '提出執行Cookie驗證、API Token、註冊流程等安全性的優化', features: ['API安全性優化｜API加入JWT身分驗證，確保會員權限安全性', '註冊流程優化｜將驗證流程提前至註冊完成前，避免惡意註冊'], online: !0, hot: !1}, {title: 'DTalk', job: '個人單獨開發', atTime: new Date('2019/3/31'), lang: ['chrome extension'], tool: ['mongoDB'], mainUrl: 'https://chrome.google.com/webstore/detail/dtalk-%E2%80%93-%E6%89%93%E9%80%A0%E4%B8%80%E5%80%8B%E8%87%AA%E7%94%B1%E7%9A%84dcard/jnjnciadheipbdilnkhaggnofnlbimcj?hl=zh-TW', genre: 'Side-Project', content: 'Dcard的擴充插件，加入文章留言回放、專屬聊天室功能', features: ['爬蟲實作｜定期備份有討論度的 Dcard 文章留言'], online: !1, hot: !1}].sort((function(t, e) {
    return e.atTime-t.atTime;
  })); const z=E; const O={name: 'PopularProject', props: {hot: Boolean}, components: {ProjectBlock: M}, data: function() {
    return {projectData: z};
  }, created: function() {
    this.hot&&(this.projectData=this.projectData.filter((function(t) {
      return t.hot;
    })));
  }, methods: {}}; const T=O; const S=(a('70de'), Object(h['a'])(T, g, y, !1, null, '575f7886', null)); const Y=S.exports; const L=function() {
    const t=this; const e=t.$createElement; const a=t._self._c||e; return a('div', {staticClass: 'timeline'}, [a('el-row', [a('el-col', {attrs: {span: 24}}, [a('div', {staticClass: 'title'}, [t._v(' 作品集時間軸 ')]), t._l(t.projectData, (function(e) {
      return a('div', {key: e.atTime, staticClass: 'projects'}, ['project'===e.type?a('ProjectLine', {attrs: {project: e}}):t._e(), 'year'===e.type?a('div', {staticClass: 'year-line'}, [t._v(' '+t._s(e.year)+' ')]):t._e()], 1);
    }))], 2)], 1)], 1);
  }; const A=[]; const B=(a('4160'), a('c975'), a('d81d'), a('a434'), a('159b'), function() {
    const t=this; const e=t.$createElement; const a=t._self._c||e; return a('div', {staticClass: 'project'}, [a('div', {staticClass: 'date', attrs: {href: t.project.mainUrl}}, [t._v(' '+t._s(t.showDate(t.project.atTime))+' '+t._s(t.project.genre)+' ')]), a('span'), a('a', {staticClass: 'title', attrs: {href: t.project.mainUrl}}, [t._v(' '+t._s(t.project.title)+' ')]), a('span', {staticClass: 'job'}, [t._v(' ｜'+t._s(t.project.job)+' ')]), a('div', {staticClass: 'tag-list'}, [t._l(t.project.lang, (function(e) {
      return a('span', {key: e, staticClass: 'tag'}, [a('span', {staticClass: 'repo-language-color', style: 'background-color: '+t.randomColor(e.length)}), t._v(' '+t._s(e)+' ')]);
    })), t._l(t.project.tool, (function(e) {
      return a('span', {key: e, staticClass: 'tag'}, [a('span', {staticClass: 'repo-language-color', style: 'background-color: '+t.randomColor(e.length)}), t._v(' '+t._s(e)+' ')]);
    }))], 2)]);
  }); const I=[]; const U={name: 'ProjectLine', props: {project: Object}, data: function() {
    return {};
  }, methods: {showDate: function(t) {
    return w()(t).format('MM/DD');
  }, randomColor: function(t) {
    let e=1e4*Math.sin(t++); return e-=Math.floor(e), '#'+(16777216+16777215*e).toString(16).substr(1, 6);
  }}}; const N=U; const V=(a('32b8'), Object(h['a'])(N, B, I, !1, null, '542b220a', null)); const F=V.exports; const G={name: 'TimeLine', components: {ProjectLine: F}, data: function() {
    return {projectData: z, projectList: [], years: [], atYear: ''};
  }, created: function() {
    this.loadYears(), console.log(z[0]), this.addYears();
  }, methods: {loadYears: function() {
    const t=this; this.projectData.forEach((function(e) {
      const a=e.atTime.getFullYear(); -1===t.years.indexOf(a)&&t.years.push(a);
    })), this.setYears(this.years[0]);
  }, addYears: function() {
    const t=this; this.projectData.map((function(t) {
      t.type='project';
    })); let e=''; this.projectData.forEach((function(a, n) {
      const s=a.atTime.getFullYear(); e!==s&&t.projectData.splice(n, 0, {type: 'year', year: s}), e=s;
    }));
  }, setYears: function(t) {
    const e=this; this.atYear=t, this.projectList=this.projectData.filter((function(t) {
      return t.atTime.getFullYear()===e.atYear;
    }));
  }}}; const q=G; const H=(a('43d9'), Object(h['a'])(q, L, A, !1, null, '93c2e252', null)); const Q=H.exports; const W=function() {
    const t=this; const e=t.$createElement; const a=t._self._c||e; return a('div', {staticClass: 'experience'}, [a('div', {staticClass: 'title'}, [t._v('個人經歷')]), t.lock?a('div', {staticClass: 'lock-page'}, [a('el-input', {staticClass: 'key', attrs: {placeholder: '請輸入金鑰'}, model: {value: t.key, callback: function(e) {
      t.key=e;
    }, expression: 'key'}}), a('el-button', {on: {click: function(e) {
      return t.getExperience(t.key);
    }}}, [t._v('送出')]), a('div', {staticClass: 'sub'}, [t._v('需輸入金鑰解密才可查看')])], 1):t._e(), t.lock?t._e():a('div', {staticClass: 'view'}, t._l(t.experiences, (function(e) {
      return a('div', {key: e.organization, staticClass: 'box'}, [a('div', {staticClass: 'date'}, [t._v(' '+t._s(t.showDate(e.start))+' - '+t._s(t.showDate(e.end))+' ')]), a('div', {staticClass: 'organization'}, [t._v(' '+t._s(e.organization)+' ')]), a('div', {staticClass: 'unit'}, [t._v(' '+t._s(e.unit)+' ')]), a('div', {staticClass: 'content-list'}, t._l(e.content, (function(e) {
        return a('div', {key: e, staticClass: 'content'}, [t._v(' '+t._s(e)+' ')]);
      })), 0)]);
    })), 0)]);
  }; const Z=[]; const X=(a('ac1f'), a('5319'), a('3452')); const J=a.n(X); const R=a('a40e'); const K=a.n(R); const $='U2FsdGVkX19888cOD2/fz5e17mlo32P6+8x266IoPFhyGRqgexou2SWrxg4tkTz1O/kIAYmzbiboYYB7muMKn1FQLgDMEjoRTq9pkbcqaUizJmZOllbNA7EPPe/dhXXg0y688hQKhzsVC7zjTjV+Grpr0cs48NsLxD3warcyS/LzPcH/VKHJl0E+FJjEfMeqg7MdnEfYHHUKULvAUeaVMtOcNZ6VfoiBAMvY7KHPl5I1ifydg/P+3jI0MtjtPmKyHDOXJM9o2RAqi0DsbdHQEBvMZ9+yDWlPiH8E9h9T8wrZgrjiUCeAUdig+65f8r8N9BQ4kNMhNravK53WOjPZzeB3PauzVj/9rRXvX24vq3Q6rvnlV8ffhjDi8WuFtzY/iMuQjuMoChvZg0v/pNDz/rh0P6ZnqpfmZPub7Is/dl2hxzS0LiiLrP0VjMGm1NYOgeDdk3l1IGErhA/etdguGXztEPt+mo7/9LToE41T/5FstuC1DAvVrQqMZjX8XrnoTVHmEaKi2bId6VOVvQCR3jIYAX/GsuG9iqdffCSYOvUmOevq7fFjkoievuMXclRv6W60ZaY6SGIKgfz7Oy1iI1BlAQnLnAG+CMW1Vw5fZ5P5c0Cu596+uDaMBk8toLJVeq1wWOcVJSUca9cDLWfzCm/Z4LhB/WEjxyyCwjOi7/VnRYSk+YfYcUGqFi7Ef1ZIlRsnFuV5CBjgh2ttzihSvPflLlfMYCXg/lka+dLucIAa/LfpFCo3zU1qhi77biKuGgc8/cTtjJA='; const tt=$; const et={name: 'Experience', components: {}, data: function() {
    return {key: window.location.hash.replace('#', ''), lock: !0, experiences: []};
  }, created: function() {}, methods: {getExperience: function(t) {
    try {
      const e=K.a.decrypt(tt, t).toString(J.a.enc.Utf8); this.experiences=JSON.parse(e), this.lock=!1;
    } catch (a) {
      return;
    }
  }, showDate: function(t) {
    return w()(t).format('YYYY/MM');
  }}}; const at=et; const nt=(a('f835'), Object(h['a'])(at, W, Z, !1, null, '0eb8d927', null)); const st=nt.exports; const ot={name: 'Home', components: {MyInfo: v, PopularProject: Y, TimeLine: Q, Experience: st}, data: function() {
    return {page: 'Overview'};
  }}; const rt=ot; const ct=(a('54b0'), Object(h['a'])(rt, r, c, !1, null, '13ee713e', null)); const it=ct.exports; const lt={components: {Home: it}}; const ut=lt; const ft=(a('5c0b'), Object(h['a'])(ut, s, o, !1, null, null, null)); const jt=ft.exports; const dt=a('5c96'); const pt=a.n(dt); a('0fae'); n['default'].use(pt.a), n['default'].config.productionTip=!1, new n['default']({render: function(t) {
    return t(jt);
  }}).$mount('#app');
}, '5a1f': function(t, e, a) {
  'use strict'; const n=a('b2ee'); const s=a.n(n); s.a;
}, '5c0b': function(t, e, a) {
  'use strict'; const n=a('9c0c'); const s=a.n(n); s.a;
}, '6284': function(t, e, a) {
  t.exports=a.p+'img/photo.e6afda07.jpeg';
}, '6d45': function(t, e, a) {}, '70de': function(t, e, a) {
  'use strict'; const n=a('ed90'); const s=a.n(n); s.a;
}, '9c0c': function(t, e, a) {}, 'b2ee': function(t, e, a) {}, 'dc1b': function(t, e, a) {}, 'dd9c': function(t, e, a) {}, 'ed90': function(t, e, a) {}, 'f835': function(t, e, a) {
  'use strict'; const n=a('1fd6'); const s=a.n(n); s.a;
}, 'fa90': function(t, e, a) {
  'use strict'; const n=a('dc1b'); const s=a.n(n); s.a;
}});
// # sourceMappingURL=app.c0d9bf17.js.map
