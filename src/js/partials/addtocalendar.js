function $d(e) {
    return document.getElementById(e)
}
var addeventatc = function () {
    var a, u, v, r, t, e = !1,
        l = 1,
        s = !1,
        p = !0,
        m = !1,
        g = !1,
        h = !1,
        _ = 1,
        f = "",
        b = !0,
        w = !0,
        x = !0,
        k = !0,
        y = !0,
        T = !0,
        // z = "Apple Calendar",
        // E = "Google <em>(online)</em>",
        // N = "Outlook",
        // C = "Outlook.com <em>(online)</em>",
        // I = "Yahoo <em>(online)</em>",
        // $ = "Facebook Event",
        z = "Apple Calendar <em>(.ics)</em>",
        E = "Google <em>(online)</em>",
        N = "Outlook <em>(.ics)</em>",
        C = "Outlook.com <em>(online)</em>",
        I = "Yahoo <em>(online)</em>",
        $ = "Facebook Event",
        A = null,
        L = null,
        n = null,
        H = null,
        R = null,
        M = null,
        S = !1;
    return {
        initialize: function () {
            if (!e) {
                e = !0;
                try {
                    addeventasync()
                }
                catch (e) { }
                "https:", "addevent.com", "https://addevent.com", a = "undefined" != typeof SVGRect ? "https://www.addevent.com/gfx/icon-calendar-t1.svg" : "https://www.addevent.com/gfx/icon-calendar-t5.png", addeventatc.trycss(), addeventatc.generate()
            }
        },
        generate: function () {
            for (var c = document.getElementsByTagName("*"), i = 0; i < c.length; i += 1) addeventatc.hasclass(c[i], "addeventatc") && function () {
                var a = "addeventatc" + l;
                c[i].id = a, c[i].title = "", c[i].style.visibility = "visible", c[i].setAttribute("aria-haspopup", "true"), c[i].setAttribute("aria-expanded", "false"), c[i].setAttribute("tabindex", "0"), s ? (c[i].onclick = function () {
                    return !1
                }, c[i].onmouseover = function () {
                    clearTimeout(r), addeventatc.toogle(this,
                        {
                            type: "mouseover",
                            id: a
                        })
                }, c[i].onmouseout = function () {
                    r = setTimeout(function () {
                        addeventatc.mouseout(this,
                            {
                                type: "mouseout",
                                id: a
                            })
                    }, 100)
                }) : (c[i].onclick = function () {
                    return addeventatc.toogle(this,
                        {
                            type: "click",
                            id: a
                        }), !1
                }, c[i].onmouseover = function () { }, c[i].onmouseout = function () { }), c[i].onkeydown = function (e) {
                    var t = e.which || e.keyCode;
                    "13" != t && "32" != t && "27" != t && "38" != t && "40" != t || e.preventDefault(), "13" != t && "32" != t || (addeventatc.keyboardclick(this,
                        {
                            type: "click",
                            id: a
                        }), addeventatc.toogle(this,
                            {
                                type: "click",
                                id: a,
                                keynav: !0
                            })), "27" == t && addeventatc.hideandreset(), "38" == t && addeventatc.keyboard(this,
                                {
                                    type: "keyboard",
                                    id: a,
                                    key: "up"
                                }), "40" == t && addeventatc.keyboard(this,
                                    {
                                        type: "keyboard",
                                        id: a,
                                        key: "down"
                                    }), S = !0
                }, c[i].onblur = function () {
                    S && setTimeout(function () {
                        addeventatc.hideandreset()
                    }, 300)
                };
                var e = c[i];
                if ("none" != c[i].getAttribute("data-styling") && "inline-buttons" != c[i].getAttribute("data-render") || (p = !1), p) {
                    var t = document.createElement("span");
                    t.className = "addeventatc_icon", e.appendChild(t)
                }
                l++ , m = !0;
                for (var n = c[i].getElementsByTagName("*"), o = 0; o < n.length; o += 1) addeventatc.hasclass(n[o], "atc_node") || ("" != n[o].className ? n[o].className += " atc_node" : n[o].className += "atc_node");
                if ("inline-buttons" == c[i].getAttribute("data-render")) {
                    c[i].onclick = function () { }, addeventatc.toogle(c[i],
                        {
                            type: "render",
                            id: a
                        }), c[i].setAttribute("aria-expanded", "true"), c[i].removeAttribute("tabindex"), c[i].onkeydown = function () { }, c[i].blur = function () { };
                    var d = document.getElementById(a + "-drop");
                    if (d) {
                        d.setAttribute("aria-hidden", "false");
                        for (n = d.getElementsByTagName("SPAN"), o = 0; o < n.length; o += 1) {
                            n[o];
                            n[o].tabIndex = "0", n[o].onkeydown = function (e) {
                                var t = e.which || e.keyCode;
                                "13" != t && "32" != t || e.target.click()
                            }
                        }
                    }
                }
            }();
            _ = addeventatc.topzindex(), p ? addeventatc.applycss() : (addeventatc.removeelement($d("ate_css")), addeventatc.removeelement($d("ate_tmp_css")), addeventatc.helpercss()), m && !g && (g = !0, addeventatc.track(
                {
                    typ: "exposure",
                    cal: ""
                }))
        },
        toogle: function (e, t) {
            var a, n, o, d = !1,
                c = "";
            if (n = $d(a = e.id)) {
                o = n.getAttribute("data-direct");
                var i = n.getAttribute("data-intel"),
                    r = n.getAttribute("data-intel-apple");
                if ("ios" == addeventatc.agent() && "click" == t.type && "true" !== r && "false" !== i && (o = "appleical", n.setAttribute("data-intel-apple", "true")), "outlook" == o || "google" == o || "yahoo" == o || "hotmail" == o || "outlookcom" == o || "appleical" == o || "apple" == o || "facebook" == o) "click" == t.type && (addeventatc.click(
                    {
                        button: a,
                        service: o,
                        id: t.id
                    }), null != A && addeventatc.trigger("button_click",
                        {
                            id: a
                        }));
                else if ("mouseover" == t.type && v != n && (h = !1), "click" == t.type || "render" == t.type || "mouseover" == t.type && !h) {
                    "mouseover" == t.type && (h = !0, null != L && addeventatc.trigger("button_mouseover",
                        {
                            id: a
                        })), d = addeventatc.getburl(
                            {
                                id: a,
                                facebook: !0
                            }), "" == f && (f = "appleical,google,outlook,outlookcom,yahoo,facebook");
                    for (var l = (f = (f += ",")
                        .replace(/ /gi, ""))
                        .split(","), s = 0; s < l.length; s += 1)(b && "ical" == l[s] || b && "appleical" == l[s]) && (c += '<span class="ateappleical" id="' + a + '-appleical" role="menuitem">' + z + "</span>"), w && "google" == l[s] && (c += '<span class="ategoogle" id="' + a + '-google" role="menuitem">' + E + "</span>"), x && "outlook" == l[s] && (c += '<span class="ateoutlook" id="' + a + '-outlook" role="menuitem">' + N + "</span>"), (k && "hotmail" == l[s] || k && "outlookcom" == l[s]) && (c += '<span class="ateoutlookcom" id="' + a + '-outlookcom" role="menuitem">' + C + "</span>"), y && "yahoo" == l[s] && (c += '<span class="ateyahoo" id="' + a + '-yahoo" role="menuitem">' + I + "</span>"), d && "facebook" == l[s] && T && "facebook" == l[s] && (c += '<span class="atefacebook" id="' + a + '-facebook" role="menuitem">' + $ + "</span>");
                    if (addeventatc.getlicense(u) || (c += '<em class="copyx"><em class="brx"></em><em class="frs"><a href="https://www.addevent.com" title="" tabindex="-1" id="' + a + '-home">AddEvent.com</a></em></em>'), !$d(a + "-drop")) {
                        var p = document.createElement("span");
                        p.id = a + "-drop", p.className = "addeventatc_dropdown", p.setAttribute("aria-hidden", "true"), p.setAttribute("aria-labelledby", a), p.innerHTML = c, n.appendChild(p)
                    }
                    $d(a + "-appleical") && ($d(a + "-appleical")
                        .onclick = function () {
                            addeventatc.click(
                                {
                                    button: a,
                                    service: "appleical",
                                    id: t.id
                                })
                        }), $d(a + "-google") && ($d(a + "-google")
                            .onclick = function () {
                                addeventatc.click(
                                    {
                                        button: a,
                                        service: "google",
                                        id: t.id
                                    })
                            }), $d(a + "-outlook") && ($d(a + "-outlook")
                                .onclick = function () {
                                    addeventatc.click(
                                        {
                                            button: a,
                                            service: "outlook",
                                            id: t.id
                                        })
                                }), $d(a + "-outlookcom") && ($d(a + "-outlookcom")
                                    .onclick = function () {
                                        addeventatc.click(
                                            {
                                                button: a,
                                                service: "outlookcom",
                                                id: t.id
                                            })
                                    }), $d(a + "-yahoo") && ($d(a + "-yahoo")
                                        .onclick = function () {
                                            addeventatc.click(
                                                {
                                                    button: a,
                                                    service: "yahoo",
                                                    id: t.id
                                                })
                                        }), $d(a + "-facebook") && ($d(a + "-facebook")
                                            .onclick = function () {
                                                addeventatc.click(
                                                    {
                                                        button: a,
                                                        service: "facebook",
                                                        id: t.id
                                                    })
                                            }), $d(a + "-home") && ($d(a + "-home")
                                                .onclick = function () {
                                                    addeventatc.click(
                                                        {
                                                            button: a,
                                                            service: "home",
                                                            id: t.id
                                                        })
                                                }), addeventatc.show(a, t)
                }
                return v = n, !1
            }
        },
        click: function (e) {
            var t, a, n, o = location.origin,
                d = !0;
            if (void 0 === location.origin && (o = location.protocol + "//" + location.host), t = $d(e.button)) {
                if ("home" == e.service) n = "https://www.addevent.com";
                else {
                    a = addeventatc.getburl(
                        {
                            id: e.button,
                            facebook: !1
                        }), n = "https://www.addevent.com/create/?service=" + e.service + a + "&reference=" + o, "outlook" != e.service && "appleical" != e.service || (d = !1, addeventatc.usewebcal() && (n = "webcal://www.addevent.com/create/?uwc=on&service=" + e.service + a + "&reference=" + o));
                    var c = t.getAttribute("data-id");
                    null !== c && (n = "https://www.addevent.com/event/" + c + "+" + e.service)
                }
                if (!$d("atecllink")) {
                    var i = document.createElement("a");
                    i.id = "atecllink", i.rel = "external", i.setAttribute("data-role", "none"), i.innerHTML = "{addeventatc-ghost-link}", i.style.display = "none", document.body.appendChild(i)
                }
                var r = $d("atecllink");
                if (r.target = d ? "_blank" : "_self", r.href = n, addeventatc.eclick("atecllink"), addeventatc.track(
                    {
                        typ: "click",
                        cal: e.service
                    }), null != M) {
                    addeventatc.trigger("button_dropdown_click",
                        {
                            id: e.button,
                            service: e.service
                        });
                    try {
                        (event || window.event)
                            .stopPropagation()
                    }
                    catch (e) { }
                }
            }
        },
        mouseout: function (e, t) {
            h = !1, addeventatc.hideandreset(), null != n && addeventatc.trigger("button_mouseout",
                {
                    id: t.id
                })
        },
        show: function (e, t) {
            var a = $d(e),
                n = $d(e + "-drop");
            if (a && n)
                if ("block" == addeventatc.getstyle(n, "display")) addeventatc.hideandreset();
                else {
                    addeventatc.hideandreset(!0), n.style.display = "block", a.style.outline = "0", a.style.zIndex = _ + 1, a.className = a.className + " addeventatc-selected", a.className = a.className.replace(/\s+/g, " "), a.setAttribute("aria-expanded", "true"), n.setAttribute("aria-hidden", "false"), t.keynav && addeventatc.keyboard(this,
                        {
                            type: "keyboard",
                            id: e,
                            key: "down"
                        });
                    var o = a.getAttribute("data-dropdown-x"),
                        d = a.getAttribute("data-dropdown-y"),
                        c = "auto",
                        i = "auto";
                    null != o && (i = o), null != d && (c = d), n.style.left = "0px", n.style.top = "0px", n.style.display = "block";
                    var r = parseInt(a.offsetHeight),
                        l = parseInt(a.offsetWidth),
                        s = parseInt(n.offsetHeight),
                        p = parseInt(n.offsetWidth),
                        u = addeventatc.viewport(),
                        v = parseInt(u.w),
                        m = parseInt(u.h),
                        g = parseInt(u.x),
                        h = parseInt(u.y),
                        f = addeventatc.elementposition(n),
                        b = parseInt(f.x),
                        w = parseInt(f.y) + s,
                        x = m + h,
                        k = 0,
                        y = 0;
                    "down" == c && "left" == i ? (k = "0px", y = r + "px") : "up" == c && "left" == i ? (k = "0px", y = -s + "px") : "down" == c && "right" == i ? (k = -(p - l) + "px", y = r + "px") : "up" == c && "right" == i ? (k = -(p - l) + "px", y = -s + "px") : "auto" == c && "left" == i ? (k = "0px", y = x < w ? -s + "px" : r + "px") : "auto" == c && "right" == i ? (k = -(p - l) + "px", y = x < w ? -s + "px" : r + "px") : (y = x < w ? -s + "px" : r + "px", k = v + g < b + p ? -(p - l) + "px" : "0px"), n.style.left = k, n.style.top = y, "click" == t.type && null != A && addeventatc.trigger("button_click",
                        {
                            id: e
                        }), null != H && addeventatc.trigger("button_dropdown_show",
                            {
                                id: e
                            })
                }
        },
        hide: function (e) {
            var t = !1;
            ("string" == typeof e && "" !== e || e instanceof String && "" !== e) && (-1 < e.indexOf("addeventatc") || -1 < e.indexOf("atc_node")) && (t = !0), t || addeventatc.hideandreset()
        },
        hideandreset: function (e) {
            for (var t = "", a = document.getElementsByTagName("*"), n = 0; n < a.length; n += 1)
                if (addeventatc.hasclass(a[n], "addeventatc")) {
                    a[n].className = a[n].className.replace(/addeventatc-selected/gi, ""), a[n].className = a[n].className.replace(/\s+$/, ""), a[n].style.zIndex = "auto", a[n].style.outline = "";
                    var o = $d(a[n].id + "-drop");
                    if (o) {
                        var d = addeventatc.getstyle(o, "display");
                        "block" == d && (t = a[n].id), o.style.display = "none", "block" !== (d = addeventatc.getstyle(o, "display")) && (a[n].setAttribute("aria-expanded", "false"), o.setAttribute("aria-hidden", "true"));
                        for (var c = o.getElementsByTagName("SPAN"), i = 0; i < c.length; i += 1) {
                            var r = new RegExp("(\\s|^)drop_markup(\\s|$)");
                            c[i].className = c[i].className.replace(r, " "), c[i].className = c[i].className.replace(/\s+$/, "")
                        }
                    }
                }
            e || null != R && addeventatc.trigger("button_dropdown_hide",
                {
                    id: t
                })
        },
        getburl: function (e) {
            var t = $d(e.id),
                a = "",
                n = !1;
            if (t) {
                for (var o = t.getElementsByTagName("*"), d = 0; d < o.length; d += 1)(addeventatc.hasclass(o[d], "_start") || addeventatc.hasclass(o[d], "start")) && (a += "&dstart=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_end") || addeventatc.hasclass(o[d], "end")) && (a += "&dend=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_zonecode") || addeventatc.hasclass(o[d], "zonecode")) && (a += "&dzone=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_timezone") || addeventatc.hasclass(o[d], "timezone")) && (a += "&dtime=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_summary") || addeventatc.hasclass(o[d], "summary") || addeventatc.hasclass(o[d], "title")) && (a += "&dsum=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_description") || addeventatc.hasclass(o[d], "description")) && (a += "&ddesc=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_location") || addeventatc.hasclass(o[d], "location")) && (a += "&dloca=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_organizer") || addeventatc.hasclass(o[d], "organizer")) && (a += "&dorga=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_organizer_email") || addeventatc.hasclass(o[d], "organizer_email")) && (a += "&dorgaem=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_attendees") || addeventatc.hasclass(o[d], "attendees")) && (a += "&datte=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_all_day_event") || addeventatc.hasclass(o[d], "all_day_event")) && (a += "&dallday=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_date_format") || addeventatc.hasclass(o[d], "date_format")) && (a += "&dateformat=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_alarm_reminder") || addeventatc.hasclass(o[d], "alarm_reminder")) && (a += "&alarm=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_recurring") || addeventatc.hasclass(o[d], "recurring")) && (a += "&drule=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_facebook_event") || addeventatc.hasclass(o[d], "facebook_event")) && (a += "&fbevent=" + encodeURIComponent(o[d].innerHTML), n = !0), (addeventatc.hasclass(o[d], "_client") || addeventatc.hasclass(o[d], "client")) && (a += "&client=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_calname") || addeventatc.hasclass(o[d], "calname")) && (a += "&calname=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_uid") || addeventatc.hasclass(o[d], "uid")) && (a += "&uid=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_status") || addeventatc.hasclass(o[d], "status")) && (a += "&status=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_method") || addeventatc.hasclass(o[d], "method")) && (a += "&method=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_transp") || addeventatc.hasclass(o[d], "transp")) && (a += "&transp=" + encodeURIComponent(o[d].innerHTML));
                "false" == t.getAttribute("data-google-api") && (a += "&gapi=false")
            }
            return e.facebook && (a = n), a
        },
        trycss: function () {
            if (!$d("ate_tmp_css")) {
                try {
                    var e = "";
                    e = ".addeventatc {visibility:hidden;}", e += ".addeventatc .data {display:none!important;}", e += ".addeventatc .start, .addeventatc .end, .addeventatc .timezone, .addeventatc .title, .addeventatc .description, .addeventatc .location, .addeventatc .organizer, .addeventatc .organizer_email, .addeventatc .facebook_event, .addeventatc .all_day_event, .addeventatc .date_format, .addeventatc .alarm_reminder, .addeventatc .recurring, .addeventatc .attendees, .addeventatc .client, .addeventatc .calname, .addeventatc .uid, .addeventatc .status, .addeventatc .method, .addeventatc .transp {display:none!important;}", p && (e += ".addeventatc {background-image:url(https://www.addevent.com/gfx/icon-calendar-t5.png), url(https://www.addevent.com/gfx/icon-calendar-t1.svg), url(https://www.addevent.com/gfx/icon-apple-t1.svg), url(https://www.addevent.com/gfx/icon-facebook-t1.svg), url(https://www.addevent.com/gfx/icon-google-t1.svg), url(https://www.addevent.com/gfx/icon-outlook-t1.svg), url(https://www.addevent.com/gfx/icon-yahoo-t1.svg);background-position:-9999px -9999px;background-repeat:no-repeat;}");
                    var t = document.createElement("style");
                    t.type = "text/css", t.id = "ate_tmp_css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t)
                }
                catch (e) { }
                addeventatc.track(
                    {
                        typ: "jsinit",
                        cal: ""
                    })
            }
        },
        applycss: function () {
            if (!$d("ate_css")) {
                var e = "";
                e += '.addeventatc {display:inline-block;*display:inline;zoom:1;position:relative;z-index:1;font-family:Roboto,"Helvetica Neue",Helvetica,Optima,Segoe,"Segoe UI",Candara,Calibri,Arial,sans-serif;color:#000!important;font-weight:300;line-height:100%!important;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;font-size:15px;text-decoration:none;padding:13px 12px 12px 43px;-webkit-border-radius:3px;border-radius:3px;cursor:pointer;-webkit-font-smoothing:antialiased!important;text-shadow:1px 1px 1px rgba(0,0,0,0.004);-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);background-image:url(https://www.addevent.com/gfx/icon-calendar-t5.png), url(https://www.addevent.com/gfx/icon-calendar-t1.svg), url(https://www.addevent.com/gfx/icon-apple-t1.svg), url(https://www.addevent.com/gfx/icon-facebook-t1.svg), url(https://www.addevent.com/gfx/icon-google-t1.svg), url(https://www.addevent.com/gfx/icon-outlook-t1.svg), url(https://www.addevent.com/gfx/icon-yahoo-t1.svg);background-position:-9999px -9999px;background-repeat:no-repeat;}', e += ".addeventatc:hover {border:1px solid #aab9d4;color:#000;font-size:15px;text-decoration:none;}", e += ".addeventatc:focus {outline:none;border:1px solid #aab9d4;}", e += ".addeventatc:active {top:1px;}", e += ".addeventatc-selected {background-color:#f9f9f9;}", e += ".addeventatc .addeventatc_icon {width:18px;height:18px;position:absolute;z-index:1;left:12px;top:10px;background:url(" + a + ") no-repeat;background-size:18px 18px;}", e += ".addeventatc .start, .addeventatc .end, .addeventatc .timezone, .addeventatc .title, .addeventatc .description, .addeventatc .location, .addeventatc .organizer, .addeventatc .organizer_email, .addeventatc .facebook_event, .addeventatc .all_day_event, .addeventatc .date_format, .addeventatc .alarm_reminder, .addeventatc .recurring, .addeventatc .attendees, .addeventatc .client, .addeventatc .calname, .addeventatc .uid, .addeventatc .status, .addeventatc .method, .addeventatc .transp {display:none!important;}", e += ".addeventatc .data {display:none!important;}", e += ".addeventatc br {display:none;}", addeventatc.getlicense(u) ? e += ".addeventatc_dropdown {width:200px;position:absolute;z-index:99999;padding:6px 0px 6px 0px;background:#fff;text-align:left;display:none;margin-top:-2px;margin-left:-1px;border-top:1px solid #c8c8c8;border-right:1px solid #bebebe;border-bottom:1px solid #a8a8a8;border-left:1px solid #bebebe;-moz-border-radius:2px;-webkit-border-radius:2px;-webkit-box-shadow:1px 3px 6px rgba(0,0,0,0.15);-moz-box-shadow:1px 3px 6px rgba(0,0,0,0.15);box-shadow:1px 3px 6px rgba(0,0,0,0.15);}" : e += ".addeventatc_dropdown {width:200px;position:absolute;z-index:99999;padding:6px 0px 0px 0px;background:#fff;text-align:left;display:none;margin-top:-2px;margin-left:-1px;border-top:1px solid #c8c8c8;border-right:1px solid #bebebe;border-bottom:1px solid #a8a8a8;border-left:1px solid #bebebe;-moz-border-radius:2px;-webkit-border-radius:2px;-webkit-box-shadow:1px 3px 6px rgba(0,0,0,0.15);-moz-box-shadow:1px 3px 6px rgba(0,0,0,0.15);box-shadow:1px 3px 6px rgba(0,0,0,0.15);}", e += ".addeventatc_dropdown span {display:block;line-height:100%;background:#fff;text-decoration:none;font-size:14px;color:#333;padding:9px 10px 9px 40px;}", e += ".addeventatc_dropdown span:hover {background-color:#f4f4f4;color:#000;text-decoration:none;font-size:14px;}", e += ".addeventatc_dropdown .drop_markup {background-color:#f4f4f4;color:#000;text-decoration:none;font-size:14px;}", e += ".addeventatc_dropdown .copyx {height:21px;display:block;position:relative;cursor:default;}", e += ".addeventatc_dropdown .brx {height:1px;overflow:hidden;background:#e0e0e0;position:absolute;z-index:100;left:10px;right:10px;top:9px;}", e += ".addeventatc_dropdown .frs {position:absolute;top:5px;cursor:pointer;right:10px;font-style:normal!important;font-weight:normal!important;text-align:right;z-index:101;line-height:9px!important;background:#fff;text-decoration:none;font-size:9px!important;color:#cacaca!important;}", e += ".addeventatc_dropdown .frs a {margin:0!important;padding:0!important;font-style:normal!important;font-weight:normal!important;line-height:9px!important;background-color:#fff!important;text-decoration:none;font-size:9px!important;color:#cacaca!important;padding-left:10px!important;display:inline-block;}", e += ".addeventatc_dropdown .frs a:hover {color:#999!important;}", e += ".addeventatc_dropdown .ateappleical {background-image:url(https://www.addevent.com/gfx/icon-apple-t1.svg);background-repeat:no-repeat;background-position:13px 50%;background-size:14px 100%;}", e += ".addeventatc_dropdown .ategoogle {background-image:url(https://www.addevent.com/gfx/icon-google-t1.svg);background-repeat:no-repeat;background-position:12px 50%;background-size:16px 100%;}", e += ".addeventatc_dropdown .ateoutlook {background-image:url(https://www.addevent.com/gfx/icon-outlook-t1.svg);background-repeat:no-repeat;background-position:12px 50%;background-size:16px auto;}", e += ".addeventatc_dropdown .ateoutlookcom {background-image:url(https://www.addevent.com/gfx/icon-outlook-t1.svg);background-repeat:no-repeat;background-position:12px 50%;background-size:16px auto;}", e += ".addeventatc_dropdown .ateyahoo {background-image:url(https://www.addevent.com/gfx/icon-yahoo-t1.svg);background-repeat:no-repeat;background-position:12px 50%;background-size:16px auto;}", e += ".addeventatc_dropdown .atefacebook {background-image:url(https://www.addevent.com/gfx/icon-facebook-t1.svg);background-repeat:no-repeat;background-position:12px 50%;background-size:16px auto;}", e += ".addeventatc_dropdown em {font-size:12px!important;color:#999!important;}";
                var t = document.createElement("style");
                t.type = "text/css", t.id = "ate_css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t), addeventatc.removeelement($d("ate_tmp_css"))
            }
        },
        helpercss: function () {
            if (!$d("ate_helper_css")) {
                var e = "";
                e += ".addeventatc_dropdown .drop_markup {background-color:#f4f4f4;}", e += ".addeventatc_dropdown .frs a {margin:0!important;padding:0!important;font-style:normal!important;font-weight:normal!important;line-height:110%!important;background-color:#fff!important;text-decoration:none;font-size:9px!important;color:#cacaca!important;display:inline-block;}", e += ".addeventatc_dropdown .frs a:hover {color:#999!important;}", e += ".addeventatc .start, .addeventatc .end, .addeventatc .timezone, .addeventatc .title, .addeventatc .description, .addeventatc .location, .addeventatc .organizer, .addeventatc .organizer_email, .addeventatc .facebook_event, .addeventatc .all_day_event, .addeventatc .date_format, .addeventatc .alarm_reminder, .addeventatc .recurring, .addeventatc .attendees, .addeventatc .client, .addeventatc .calname, .addeventatc .uid, .addeventatc .status, .addeventatc .method {display:none!important;}";
                var t = document.createElement("style");
                t.type = "text/css", t.id = "ate_helper_css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t)
            }
        },
        removeelement: function (e) {
            try {
                return !!(hdx = e) && hdx.parentNode.removeChild(hdx)
            }
            catch (e) { }
        },
        topzindex: function () {
            for (var e = 1, t = document.getElementsByTagName("*"), a = 0; a < t.length; a += 1)
                if (addeventatc.hasclass(t[a], "addeventatc") || addeventatc.hasclass(t[a], "addeventstc")) {
                    var n = addeventatc.getstyle(t[a], "z-index");
                    !isNaN(parseFloat(n)) && isFinite(n) && e < (n = parseInt(n)) && (e = n)
                }
            return e
        },
        viewport: function () {
            var e = 0,
                t = 0,
                a = 0,
                n = 0;
            return "number" == typeof window.innerWidth ? (e = window.innerWidth, t = window.innerHeight) : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? (e = document.documentElement.clientWidth, t = document.documentElement.clientHeight) : document.body && (document.body.clientWidth || document.body.clientHeight) && (e = document.body.clientWidth, t = document.body.clientHeight), document.all ? (n = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft, a = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) : (n = window.pageXOffset, a = window.pageYOffset),
                {
                    w: e,
                    h: t,
                    x: n,
                    y: a
                }
        },
        elementposition: function (e) {
            var t = 0,
                a = 0;
            if (e.offsetParent)
                for (t = e.offsetLeft, a = e.offsetTop; e = e.offsetParent;) t += e.offsetLeft, a += e.offsetTop;
            return {
                x: t,
                y: a
            }
        },
        getstyle: function (e, t) {
            var a, n = e;
            return n.currentStyle ? a = n.currentStyle[t] : window.getComputedStyle && (a = document.defaultView.getComputedStyle(n, null)
                .getPropertyValue(t)), a
        },
        getlicense: function (e) {
            var t = location.origin,
                a = !1;
            if (void 0 === location.origin && (t = location.protocol + "//" + location.host), e) {
                var n = e.substring(0, 1),
                    o = e.substring(9, 10),
                    d = e.substring(17, 18);
                "a" == n && "z" == o && "m" == d && (a = !0)
            }
            return (-1 == t.indexOf("addevent.com") && "aao8iuet5zp9iqw5sm9z" == e || -1 == t.indexOf("addevent.to") && "aao8iuet5zp9iqw5sm9z" == e || -1 == t.indexOf("addevent.com") && "aao8iuet5zp9iqw5sm9z" == e) && (a = !0), a
        },
        refresh: function () {
            for (var e = document.getElementsByTagName("*"), t = [], a = 0; a < e.length; a += 1)
                if (addeventatc.hasclass(e[a], "addeventatc")) {
                    e[a].className = e[a].className.replace(/addeventatc-selected/gi, ""), e[a].id = "";
                    for (var n = e[a].getElementsByTagName("*"), o = 0; o < n.length; o += 1)(addeventatc.hasclass(n[o], "addeventatc_icon") || addeventatc.hasclass(n[o], "addeventatc_dropdown")) && t.push(n[o])
                }
            for (var d = 0; d < t.length; d += 1) addeventatc.removeelement(t[d]);
            addeventatc.removeelement($d("ate_css")), g = !(l = 1), addeventatc.generate()
        },
        hasclass: function (e, t) {
            return new RegExp("(\\s|^)" + t + "(\\s|$)")
                .test(e.className)
        },
        eclick: function (e) {
            var t = document.getElementById(e);
            if (t.click) t.click();
            else if (document.createEvent) {
                var a = document.createEvent("MouseEvents");
                a.initEvent("click", !0, !0), t.dispatchEvent(a)
            }
        },
        track: function (e) {
            new Image, (new Date)
                .getTime(), encodeURIComponent(window.location.origin)
        },
        getguid: function () {
            for (var e = "addevent_track_cookie=", t = "", a = document.cookie.split(";"), n = 0; n < a.length; n++) {
                for (var o = a[n];
                    " " == o.charAt(0);) o = o.substring(1, o.length);
                0 == o.indexOf(e) && (t = o.substring(e.length, o.length))
            }
            if ("" == t) {
                var d = (addeventatc.s4() + addeventatc.s4() + "-" + addeventatc.s4() + "-4" + addeventatc.s4()
                    .substr(0, 3) + "-" + addeventatc.s4() + "-" + addeventatc.s4() + addeventatc.s4() + addeventatc.s4())
                    .toLowerCase(),
                    c = new Date;
                c.setTime(c.getTime() + 31536e6);
                var i = "expires=" + c.toUTCString();
                document.cookie = "addevent_track_cookie=" + d + "; " + i, t = d
            }
            return t
        },
        s4: function () {
            return (65536 * (1 + Math.random()) | 0)
                .toString(16)
                .substring(1)
        },
        documentclick: function (e) {
            e = (e = e || window.event)
                .target || e.srcElement, ate_touch_capable ? (clearTimeout(t), t = setTimeout(function () {
                    addeventatc.hide(e.className)
                }, 500)) : addeventatc.hide(e.className)
        },
        trigger: function (e, t) {
            if ("button_click" == e) try {
                    A(t)
                }
                catch (e) { }
            if ("button_mouseover" == e) try {
                    L(t)
                }
                catch (e) { }
            if ("button_mouseout" == e) try {
                    n(t)
                }
                catch (e) { }
            if ("button_dropdown_show" == e) try {
                    H(t)
                }
                catch (e) { }
            if ("button_dropdown_hide" == e) try {
                    R(t)
                }
                catch (e) { }
            if ("button_dropdown_click" == e) try {
                    M(t)
                }
                catch (e) { }
        },
        register: function (e, t) {
            "button-click" == e && (A = t), "button-mouseover" == e && (L = t), "button-mouseout" == e && (n = t), "button-dropdown-show" == e && (H = t), "button-dropdown-hide" == e && (R = t), "button-dropdown-click" == e && (M = t)
        },
        settings: function (e) {
            null != e.license && (u = e.license), null != e.css && (e.css ? p = !0 : (p = !1, addeventatc.removeelement($d("ate_css")))), null != e.mouse && (s = e.mouse), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (s = !1), null != e.outlook && null != e.outlook.show && (x = e.outlook.show), null != e.google && null != e.google.show && (w = e.google.show), null != e.yahoo && null != e.yahoo.show && (y = e.yahoo.show), null != e.hotmail && null != e.hotmail.show && (k = e.hotmail.show), null != e.outlookcom && null != e.outlookcom.show && (k = e.outlookcom.show), null != e.ical && null != e.ical.show && (b = e.ical.show), null != e.appleical && null != e.appleical.show && (b = e.appleical.show), null != e.facebook && null != e.facebook.show && (T = e.facebook.show), null != e.outlook && null != e.outlook.text && (N = e.outlook.text), null != e.google && null != e.google.text && (E = e.google.text), null != e.yahoo && null != e.yahoo.text && (I = e.yahoo.text), null != e.hotmail && null != e.hotmail.text && (C = e.hotmail.text), null != e.outlookcom && null != e.outlookcom.text && (C = e.outlookcom.text), null != e.ical && null != e.ical.text && (z = e.ical.text), null != e.appleical && null != e.appleical.text && (z = e.appleical.text), null != e.facebook && null != e.facebook.text && ($ = e.facebook.text), null != e.dropdown && null != e.dropdown.order && (f = e.dropdown.order)
        },
        keyboard: function (e, t) {
            var a = document.getElementById(t.id + "-drop");
            if (a && "block" == addeventatc.getstyle(a, "display")) {
                for (var n = a.getElementsByTagName("SPAN"), o = null, d = 0, c = 0, i = 0; i < n.length; i += 1) d++ , addeventatc.hasclass(n[i], "drop_markup") && (o = n[i], c = d);
                null === o ? c = 1 : "down" == t.key ? d <= c ? c = 1 : c++ : 1 == c ? c = d : c--;
                for (i = d = 0; i < n.length; i += 1)
                    if (++d == c) n[i].className += " drop_markup";
                    else {
                        var r = new RegExp("(\\s|^)drop_markup(\\s|$)");
                        n[i].className = n[i].className.replace(r, " "), n[i].className = n[i].className.replace(/\s+$/, "")
                    }
            }
        },
        keyboardclick: function (e, t) {
            var a = document.getElementById(t.id + "-drop");
            if (a) {
                for (var n = a.getElementsByTagName("SPAN"), o = null, d = 0; d < n.length; d += 1) addeventatc.hasclass(n[d], "drop_markup") && (o = n[d]);
                if (null !== o) {
                    o.click();
                    for (d = 0; d < n.length; d += 1) {
                        var c = new RegExp("(\\s|^)drop_markup(\\s|$)");
                        n[d].className = n[d].className.replace(c, " "), n[d].className = n[d].className.replace(/\s+$/, "")
                    }
                }
            }
        },
        usewebcal: function () {
            var e = !1,
                t = window.navigator.userAgent.toLowerCase(),
                a = /CriOS/i.test(navigator.userAgent),
                n = /instagram/.test(t),
                o = /iphone|ipod|ipad/.test(t),
                d = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            return (o && d || o && a || o && n) && (e = !0), e
        },
        agent: function () {
            var e = navigator.userAgent || navigator.vendor || window.opera;
            return /windows phone/i.test(e) ? "windows_phone" : /android/i.test(e) ? "android" : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? "ios" : "unknown"
        }
    }
}();
! function (e, t) {
    "use strict";
    e = e || "docReady", t = t || window;
    var a = [],
        n = !1,
        o = !1;

    function d() {
        if (!n) {
            n = !0;
            for (var e = 0; e < a.length; e++) a[e].fn.call(window, a[e].ctx);
            a = []
        }
    }

    function c() {
        "complete" === document.readyState && d()
    }
    t[e] = function (e, t) {
        if ("function" != typeof e) throw new TypeError("callback for docReady(fn) must be a function");
        n ? setTimeout(function () {
            e(t)
        }, 1) : (a.push(
            {
                fn: e,
                ctx: t
            }), "complete" === document.readyState || !document.attachEvent && "interactive" === document.readyState ? setTimeout(d, 1) : o || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", d, !1), window.addEventListener("load", d, !1)) : (document.attachEvent("onreadystatechange", c), window.attachEvent("onload", d)), o = !0))
    }
}("addeventReady", window);
var ate_touch_capable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || 0 < navigator.maxTouchPoints || 0 < window.navigator.msMaxTouchPoints;
window.addEventListener ? (document.addEventListener("click", addeventatc.documentclick, !1), ate_touch_capable && document.addEventListener("touchend", addeventatc.documentclick, !1)) : window.attachEvent ? (document.attachEvent("onclick", addeventatc.documentclick), ate_touch_capable && document.attachEvent("ontouchend", addeventatc.documentclick)) : document.onclick = function () {
    addeventatc.documentclick(event)
}, addeventReady(function () {
    addeventatc.initialize(), setTimeout("addeventatc.initialize();", 200)
});