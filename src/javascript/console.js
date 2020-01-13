"use strict";
const console_window = $("#console-window");
const console_content = $("#console-content");
const HTML = $("HTML");
const inputline = $("#inputline");
const theinput = $("#theinput");
let firstOpen = true;
let prompt = true;
let consoleActive = false;

function consoleOpen() {
    if (consoleActive) {
        return;
    }
    consoleActive = true;
    console_window.fadeIn(500);
    console_window.focus();
    console_content.text("");
    if (firstOpen) {
        window.setInterval(function () {
                $("#prompt").css("visibility", (prompt ? "hidden" : "visible"));
                prompt = !prompt;
            },
            500);
        // noinspection JSUnresolvedFunction
        HTML.keypress(consoleKeypress);
        // noinspection JSUnresolvedFunction
        HTML.keydown(consoleKeydown);
        firstOpen = false;
    } else {
        console_content.html("<div id=\"inputline\">root:/ # <span id=\"theinput\"></span><span id=\"prompt\">_</span></div>");
    }
    inputline.show();
    consoleWriteLn("MeowOS");
    consoleWriteLn("Version 1.0.1 [Build 2020]");
    consoleWriteLn("Copyright (C) 2014-2020 MeowCat Studio All Rights Reserved.");
    consoleWriteLn("For A Command List, type \"help\".");
    consoleWriteLn();
    consoleWriteLn("Resuming work from last segmentation fault...");
    consoleWriteLn();
    document.getElementById("bgm").play();
    window.setTimeout(function () {
        consoleWriteLn("MlgmXyysd:/Rabbit/ # credits TEMP");
        consoleWriteLn("credits> session .session_TEMP not found, aborting");
        consoleWriteLn("credits> Usage: credits [session]");
        consoleWriteLn();
        consoleWriteLn("MlgmXyysd:/Rabbit/ # Go --os");
        consoleWriteLn("Go> OS daemon started successfully.");
        consoleWriteLn();
        consoleWriteLn("MlgmXyysd:/Rabbit/ # Go --finish");
        consoleWriteLn("Go> No session found, please type 'login' to login first");
        consoleWriteLn("Go>>> login");
        consoleWriteLn("Go> login: MlgmXyysd");
        consoleWriteLn("Go> password for MlgmXyysd: *********");
        consoleWriteLn("Go> login successfully, session saved to .session_47C4B9EF");
        consoleWriteLn("Go> Notice: New message received from backend:");
        consoleWriteLn();
        consoleWriteLn("Received: from rabbit.meowcat.org (unknown [192.168.0.233])");
        consoleWriteLn("    by rabbit.meowcat.org (MX) with SMTP id");
        consoleWriteLn("    for &lt;go@meowcat.org&gt;; Thu, 01 Jan 1970 08:00:00 +0800");
        consoleWriteLn("DKIM-Signature: v=1; a=aes-128-cbc; c=relaxed/relaxed; d=meowcat.org;");
        consoleWriteLn("    h=content-type:from:mime-version:reply-to:subject:to; s=s1;");
        consoleWriteLn("    bh=SSBsb3ZlIHRoZSBjcmVkaXRzIQ==; b=U2FsdGVkX19xBMUZJVK25LGE42eef");
        consoleWriteLn("    DspRiZF2XnwPF1BGxqnV7V79jvWbT2a8mi9ze/Qb4xxFQ9ypnByL0JgcAlO9TDay");
        consoleWriteLn("    CU0kYRLDhagNzIiVYWoxXo/OR2Qsi1munpD");
        consoleWriteLn("From: rabbit@meowcat.org");
        consoleWriteLn("Subject: =?UTF-8?RW5kPw==?=");
        consoleWriteLn("To: go@meowcat.org");
        consoleWriteLn("Date: Thu, 01 Jan 1970 00:00:00 +0000 (UTC)");
        consoleWriteLn("Mime-Version: 1.0");
        consoleWriteLn("Content-Type: multipart/alternative; boundary=MC_MAIL_PaRt_BoUnDaRy_47C4B9EF");
        consoleWriteLn();
        consoleWriteLn("--MC_MAIL_PaRt_BoUnDaRy_47C4B9EF");
        consoleWriteLn("Content-Transfer-Encoding: quoted-printable");
        consoleWriteLn("Content-Type: text/plain; charset=UTF-8");
        consoleWriteLn("Mime-Version: 1.0");
        consoleWriteLn();
        consoleWriteLn("Congratulations!");
        consoleWriteLn("Congratulations on completing all the challenges, coming to the end.");
        consoleWriteLn("You're the first to get to the end, so you can get mysterious gifts.");
        consoleWriteLn("We need to verify your puzzle solving steps to make sure you don't cheat.");
        consoleWriteLn("Next, please use the \"arrive\" command to leave your name and email address.");
        consoleWriteLn("We're waiting for you at the end. Good luck.");
        consoleWriteLn("                                --MlgmXyysd");
        consoleWriteLn();
        consoleWriteLn("--MC_MAIL_PaRt_BoUnDaRy_47C4B9EF--");
        consoleWriteLn();
        consoleWriteLn("Go>>> exit");
        consoleWriteLn("Go> Use exit() to exit");
        consoleWriteLn("Go>>> exit()");
        consoleWriteLn();
    }, 1000);
}

function consoleWrite(s) {
    s = s.replace(/\n/g, "<br/>");
    console_content.append(s);
    inputline.appendTo("#console-content");

    const div = console_content[0];
    if (div && div.scrollHeight) {
        div.scrollTop = div.scrollHeight;
    }
}

function consoleWriteLn(s = "") {
    consoleWrite(s + "\n");
}

let consoleLine = "";

function consoleKeydown(e) {
    if (!consoleActive) return 0;
    if (e.which === 8 && consoleLine.length > 0) {
        if (e.ctrlKey) {
            consoleLine = "";
            theinput.text(consoleLine);
        } else {
            consoleLine = consoleLine.substring(0, consoleLine.length - 1);
            theinput.text(consoleLine);
        }
    }
}

function consoleKeypress(e) {
    if (!consoleActive) return 0;

    if (e.altKey) {
        return 0;
    } else if (e.which === 10 || e.which === 13) {
        consoleEnter(consoleLine);
        consoleLine = "";
    } else if (e.which > 31 && e.which < 127) {
        consoleLine += String.fromCharCode(e.which);
    }
    theinput.text(consoleLine);

    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    return false;
}

function consoleEnter(line) {
    consoleWriteLn("root:/ # " + line.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    const cmd = line.split(" ");
    switch (cmd[0].toLowerCase()) {
        case "ls":
            consoleWriteLn(".:");
            consoleWriteLn("total 28");
            consoleWriteLn("-rwxr-xr-x 0 root root    4 Jan 01 08:00 .session_47C4B9EF -> home/Rabbit/.session_47C4B9EF");
            consoleWriteLn("-rwxr-xr-x 0 root root    4 Jan 01 08:00 arrive -> home/Rabbit/Go");
            consoleWriteLn("-rwxr-xr-x 0 root root    4 Jan 01 08:00 credits -> home/Rabbit/Go");
            consoleWriteLn("-rwxr-xr-x 0 root root    4 Jan 01 08:00 Go -> home/Rabbit/Go");
            consoleWriteLn("d--------- 0 root root 4096 Jan 01 08:00 home");
            consoleWriteLn("d--------- 0 root root 4096 Jan 01 08:00 usr");
            consoleWriteLn();
            consoleWriteLn("./home:");
            consoleWriteLn("ls: cannot open directory './home': Permission denied");
            consoleWriteLn();
            consoleWriteLn("./usr:");
            consoleWriteLn("ls: cannot open directory './usr': Permission denied");
            consoleWriteLn();
            break;
        case "dir":
        case "cat":
        case "cd":
        case "more":
        case "less":
        case "mkdir":
        case "md":
        case "del":
        case "delete":
        case "type":
        case "rd":
        case "rm":
        case "chdir":
        case "rmdir":
        case "scp":
        case "nmap":
            consoleWriteLn("Segmentation fault (core dumped).");
            consoleWriteLn();
            break;
        case "echo":
            if (cmd.length < 2) {
                consoleWriteLn();
            } else {
                consoleWriteLn(line.replace(/echo /i, "").replace(/</g, "&lt;").replace(/>/g, "&gt;"));
                consoleWriteLn();
            }
            break;
        case "go":
            consoleWriteLn("Go> OS daemon already running.");
            consoleWriteLn();
            break;
        case "credits":
            if (cmd.length < 2) {
                writeCredits();
            } else {
                if (cmd[1] !== "47C4B9EF") {
                    consoleWriteLn("credits> session .session_" + cmd[1] + " not found, aborting");
                    consoleWriteLn("credits> Usage: credits [session]");
                    consoleWriteLn();
                } else {
                    consoleCredits();
                }
            }
            break;
        case "pwd":
            consoleWriteLn("/");
            break;
        case "whoami":
            consoleWriteLn("root");
            break;
        case "who":
        case "w":
            consoleWriteLn("22:20:05 up 8 days, 16:52,  2 users,  load average: 0.00, 0.00, 0.00");
            consoleWriteLn("USER         TTY      FROM             LOGIN    IDLE     WHAT");
            consoleWriteLn("root         tty0     console          01Jan    0.00s    " + cmd[0]);
            consoleWriteLn("MlgmXyysd    pts/0    192.158.0.233    01Jan    26:32m   Go -os");
            consoleWriteLn();
            break;
        case "help":
            consoleWriteLn("file:");
            consoleWriteLn("    ls cd pwd mkdir rmdir type rd del delete rm cat more less scp");
            consoleWriteLn("system maintenance:");
            consoleWriteLn("    nmap who whoami");
            consoleWriteLn();
            break;
        case "ver":
        case "version":
            consoleWriteLn("MeowOS");
            consoleWriteLn("Version 1.0.1 [Build 2020]");
            consoleWriteLn("Copyright (C) 2014-2020 MeowCat Studio All Rights Reserved.");
            consoleWriteLn();
            break;
        case "arrive":
            if (cmd.length < 3) {
                consoleWriteLn("arrive> Missing arguments");
                consoleWriteLn("arrive> Usage: arrive &lt;name&gt; &lt;email&gt;");
                consoleWriteLn();
            } else {
                let reg = new RegExp(/^\S+@\S+\.\S{2,}$/);
                if (reg.test(cmd[2])) {
                    consoleWriteLn("arrive> Submitting...");
                    $.ajax({
                        url: "do.php?name=" + cmd[1] + "&email=" + cmd[2],
                        success: function () {
                            consoleWriteLn("arrive> Your information has been submitted.");
                            consoleWriteLn("arrive> Rank 1.");
                            consoleWriteLn("arrive> The ranking list may be updated late, please wait patiently.");
                            consoleWriteLn();
                        },
                        error: function () {
                            consoleWriteLn("arrive> An error was encountered while submitting your information.");
                            consoleWriteLn("arrive> The service is currently unavailable. Please try again later.");
                            consoleWriteLn();
                        }
                    });
                } else {
                    consoleWriteLn("arrive> Error: email invalid.");
                    consoleWriteLn();
                }
            }
            break;
        case "":
            break;
        default:
            consoleWriteLn("sh: " + cmd[0] + ": not found");
            consoleWriteLn();
    }

}

function writeCredits() {
    const creditsInterval = window.setInterval(creditsMessage, 800);
    const creditsMessages = ["Rabbit Go", "Version 1.0.1", "", "A Game by", "MeowCat Studio", "", "Arts", "Ice Fox", "MlgmXyysd", "", "Designs", "- Ideas -", "MlgmXyysd", "- Images -", "voidZ!LLA", "MlgmXyysd", "Ice Fox", "", "Programming", "- Logic Code -", "MlgmXyysd", "", "Server", "Provided by MeowCat Studio", "", "Music", "Windows 98 Starting - Microsoft", "Hacknet OST - Team Fractal Alligator", "Hacknet Labyrinths - Team Fractal Alligator", "", "Sounds & Some images are from Internet.", "", "Copyright &copy 2014-2020 MeowCat Studio Powered by MlgmXyysd All Rights Reserved.", ""];
    inputline.hide();
    consoleActive = false;

    let creditsPosition = 0;

    function creditsMessage() {
        if (creditsPosition >= creditsMessages.length - 1) {
            window.clearInterval(creditsInterval);
            inputline.show();
            consoleActive = true;
        }
        consoleWriteLn(creditsMessages[creditsPosition]);
        creditsPosition++;
    }
}

function consoleCredits() {
    const creditsInterval = window.setInterval(creditsMessage, 800);
    const creditsMessages = ["\n", "\n", "credits> We are establishing a connection with the server for you", "\n", "\n", "credits> Please wait", ".", ".", ".", ".", ".", ".", "\n", "\n", "credits> Done!", "\ncredits> Notice: New plain message received from backend:", "\n\nCongratulations on finding the cool credits. ", "\nNext, we'll take you into it.", "\nGood luck.", "\n                                --MlgmXyysd", "", "", "", "", "", ""];
    inputline.hide();
    consoleActive = false;

    consoleWriteLn();
    consoleWriteLn("credits> Session 47C4B9EF valid.");
    let creditsPosition = 0;

    function creditsMessage() {
        if (creditsPosition >= creditsMessages.length - 1) {
            window.clearInterval(creditsInterval);
            window.location.assign("http://cdriet.meowcat.org/");
        }
        consoleWrite(creditsMessages[creditsPosition]);
        creditsPosition++;
    }
}

function loaded() {
    setTimeout(function () {
        consoleOpen();
    }, 2000);
}