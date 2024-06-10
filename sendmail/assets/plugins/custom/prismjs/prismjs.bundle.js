(() => {

    var __webpack_modules__ = ({

        "../src/js/vendors/plugins/prism.init.js":
            (() => {

                "use strict";

                Prism.plugins.NormalizeWhitespace.setDefaults({
                    'remove-trailing': true,
                    'remove-indent': true,
                    'left-trim': true,
                    'right-trim': true
                });

            }),

        "./webpack/plugins/custom/prismjs/prismjs.scss":
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);

            }),

        "./node_modules/prismjs/components/prism-bash.js":
            (() => {

                (function (Prism) {
                    var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';

                    var commandAfterHeredoc = {
                        pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
                        lookbehind: true,
                        alias: 'punctuation',
                        inside: null
                    };

                    var insideString = {
                        'bash': commandAfterHeredoc,
                        'environment': {
                            pattern: RegExp('\\$' + envVars),
                            alias: 'constant'
                        },
                        'variable': [
                            {
                                pattern: /\$?\(\([\s\S]+?\)\)/,
                                greedy: true,
                                inside: {
                                    'variable': [
                                        {
                                            pattern: /(^\$\(\([\s\S]+)\)\)/,
                                            lookbehind: true
						},
						/^\$\(\(/
					],
                                    'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                                    'operator': /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                                    'punctuation': /\(\(?|\)\)?|,|;/
                                }
			},
                            {
                                pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                                greedy: true,
                                inside: {
                                    'variable': /^\$\(|^`|\)$|`$/
                                }
			},
                            {
                                pattern: /\$\{[^}]+\}/,
                                greedy: true,
                                inside: {
                                    'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                                    'punctuation': /[\[\]]/,
                                    'environment': {
                                        pattern: RegExp('(\\{)' + envVars),
                                        lookbehind: true,
                                        alias: 'constant'
                                    }
                                }
			},
			/\$(?:\w+|[#?*!@$])/
		],
                        'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
                    };

                    Prism.languages.bash = {
                        'shebang': {
                            pattern: /^#!\s*\/.*/,
                            alias: 'important'
                        },
                        'comment': {
                            pattern: /(^|[^"{\\$])#.*/,
                            lookbehind: true
                        },
                        'function-name': [
                            {
                                pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                                lookbehind: true,
                                alias: 'function'
			},
                            {
                                pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
                                alias: 'function'
			}
		],
                        'for-or-select': {
                            pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
                            alias: 'variable',
                            lookbehind: true
                        },
                        'assign-left': {
                            pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
                            inside: {
                                'environment': {
                                    pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + envVars),
                                    lookbehind: true,
                                    alias: 'constant'
                                }
                            },
                            alias: 'variable',
                            lookbehind: true
                        },
                        'string': [
                            {
                                pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                                lookbehind: true,
                                greedy: true,
                                inside: insideString
			},
                            {
                                pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                                lookbehind: true,
                                greedy: true,
                                inside: {
                                    'bash': commandAfterHeredoc
                                }
			},
                            {
                                pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                                lookbehind: true,
                                greedy: true,
                                inside: insideString
			},
                            {
                                pattern: /(^|[^$\\])'[^']*'/,
                                lookbehind: true,
                                greedy: true
			},
                            {
                                pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                                greedy: true,
                                inside: {
                                    'entity': insideString.entity
                                }
			}
		],
                        'environment': {
                            pattern: RegExp('\\$?' + envVars),
                            alias: 'constant'
                        },
                        'variable': insideString.variable,
                        'function': {
                            pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
                            lookbehind: true
                        },
                        'keyword': {
                            pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
                            lookbehind: true
                        },
                        'builtin': {
                            pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
                            lookbehind: true,
                            alias: 'class-name'
                        },
                        'boolean': {
                            pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
                            lookbehind: true
                        },
                        'file-descriptor': {
                            pattern: /\B&\d\b/,
                            alias: 'important'
                        },
                        'operator': {
                            pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
                            inside: {
                                'file-descriptor': {
                                    pattern: /^\d/,
                                    alias: 'important'
                                }
                            }
                        },
                        'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
                        'number': {
                            pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
                            lookbehind: true
                        }
                    };

                    commandAfterHeredoc.inside = Prism.languages.bash;

                    var toBeCopied = [
		'comment',
		'function-name',
		'for-or-select',
		'assign-left',
		'string',
		'environment',
		'function',
		'keyword',
		'builtin',
		'boolean',
		'file-descriptor',
		'operator',
		'punctuation',
		'number'
	];
                    var inside = insideString.variable[1].inside;
                    for (var i = 0; i < toBeCopied.length; i++) {
                        inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
                    }

                    Prism.languages.shell = Prism.languages.bash;
                }(Prism));

            }),

        "./node_modules/prismjs/components/prism-css.js":
            (() => {

                (function (Prism) {

                    var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

                    Prism.languages.css = {
                        'comment': /\/\*[\s\S]*?\*\//,
                        'atrule': {
                            pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                            inside: {
                                'rule': /^@[\w-]+/,
                                'selector-function-argument': {
                                    pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                                    lookbehind: true,
                                    alias: 'selector'
                                },
                                'keyword': {
                                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                                    lookbehind: true
                                }
                            }
                        },
                        'url': {
                            pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
                            greedy: true,
                            inside: {
                                'function': /^url/i,
                                'punctuation': /^\(|\)$/,
                                'string': {
                                    pattern: RegExp('^' + string.source + '$'),
                                    alias: 'url'
                                }
                            }
                        },
                        'selector': {
                            pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
                            lookbehind: true
                        },
                        'string': {
                            pattern: string,
                            greedy: true
                        },
                        'property': {
                            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                            lookbehind: true
                        },
                        'important': /!important\b/i,
                        'function': {
                            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                            lookbehind: true
                        },
                        'punctuation': /[(){};:,]/
                    };

                    Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

                    var markup = Prism.languages.markup;
                    if (markup) {
                        markup.tag.addInlined('style', 'css');
                        markup.tag.addAttribute('style', 'css');
                    }

                }(Prism));

            }),

        "./node_modules/prismjs/components/prism-javascript.js":
            (() => {

                Prism.languages.javascript = Prism.languages.extend('clike', {
                    'class-name': [
		Prism.languages.clike['class-name'],
                        {
                            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
                            lookbehind: true
		}
	],
                    'keyword': [
                        {
                            pattern: /((?:^|\})\s*)catch\b/,
                            lookbehind: true
		},
                        {
                            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                            lookbehind: true
		},
	],
                    'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                    'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
                    'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
                });

                Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

                Prism.languages.insertBefore('javascript', 'keyword', {
                    'regex': {
                        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
                        lookbehind: true,
                        greedy: true,
                        inside: {
                            'regex-source': {
                                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                                lookbehind: true,
                                alias: 'language-regex',
                                inside: Prism.languages.regex
                            },
                            'regex-delimiter': /^\/|\/$/,
                            'regex-flags': /^[a-z]+$/,
                        }
                    },
                    'function-variable': {
                        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                        alias: 'function'
                    },
                    'parameter': [
                        {
                            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                            lookbehind: true,
                            inside: Prism.languages.javascript
		},
                        {
                            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                            lookbehind: true,
                            inside: Prism.languages.javascript
		},
                        {
                            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                            lookbehind: true,
                            inside: Prism.languages.javascript
		},
                        {
                            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                            lookbehind: true,
                            inside: Prism.languages.javascript
		}
	],
                    'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
                });

                Prism.languages.insertBefore('javascript', 'string', {
                    'hashbang': {
                        pattern: /^#!.*/,
                        greedy: true,
                        alias: 'comment'
                    },
                    'template-string': {
                        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
                        greedy: true,
                        inside: {
                            'template-punctuation': {
                                pattern: /^`|`$/,
                                alias: 'string'
                            },
                            'interpolation': {
                                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                                lookbehind: true,
                                inside: {
                                    'interpolation-punctuation': {
                                        pattern: /^\$\{|\}$/,
                                        alias: 'punctuation'
                                    },
                                    rest: Prism.languages.javascript
                                }
                            },
                            'string': /[\s\S]+/
                        }
                    }
                });

                if (Prism.languages.markup) {
                    Prism.languages.markup.tag.addInlined('script', 'javascript');
                    Prism.languages.markup.tag.addAttribute(
                        /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
                        'javascript'
                    );
                }

                Prism.languages.js = Prism.languages.javascript;

            }),

        "./node_modules/prismjs/components/prism-markup-templating.js":
            (() => {

                (function (Prism) {

                    function getPlaceholder(language, index) {
                        return '___' + language.toUpperCase() + index + '___';
                    }

                    Object.defineProperties(Prism.languages['markup-templating'] = {}, {
                        buildPlaceholders: {
                            
                            value: function (env, language, placeholderPattern, replaceFilter) {
                                if (env.language !== language) {
                                    return;
                                }

                                var tokenStack = env.tokenStack = [];

                                env.code = env.code.replace(placeholderPattern, function (match) {
                                    if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
                                        return match;
                                    }
                                    var i = tokenStack.length;
                                    var placeholder;

                                    while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
                                        ++i;
                                    }

                                    tokenStack[i] = match;

                                    return placeholder;
                                });

                                env.grammar = Prism.languages.markup;
                            }
                        },
                        tokenizePlaceholders: {
                            
                            value: function (env, language) {
                                if (env.language !== language || !env.tokenStack) {
                                    return;
                                }

                                env.grammar = Prism.languages[language];

                                var j = 0;
                                var keys = Object.keys(env.tokenStack);

                                function walkTokens(tokens) {
                                    for (var i = 0; i < tokens.length; i++) {
                                        
                                        if (j >= keys.length) {
                                            break;
                                        }

                                        var token = tokens[i];
                                        if (typeof token === 'string' || (token.content && typeof token.content === 'string')) {
                                            var k = keys[j];
                                            var t = env.tokenStack[k];
                                            var s = typeof token === 'string' ? token : token.content;
                                            var placeholder = getPlaceholder(language, k);

                                            var index = s.indexOf(placeholder);
                                            if (index > -1) {
                                                ++j;

                                                var before = s.substring(0, index);
                                                var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
                                                var after = s.substring(index + placeholder.length);

                                                var replacement = [];
                                                if (before) {
                                                    replacement.push.apply(replacement, walkTokens([before]));
                                                }
                                                replacement.push(middle);
                                                if (after) {
                                                    replacement.push.apply(replacement, walkTokens([after]));
                                                }

                                                if (typeof token === 'string') {
                                                    tokens.splice.apply(tokens, [i, 1].concat(replacement));
                                                } else {
                                                    token.content = replacement;
                                                }
                                            }
                                        } else if (token.content) {
                                            walkTokens(token.content);
                                        }
                                    }

                                    return tokens;
                                }

                                walkTokens(env.tokens);
                            }
                        }
                    });

                }(Prism));

            }),

        "./node_modules/prismjs/components/prism-markup.js":
            (() => {

                Prism.languages.markup = {
                    'comment': {
                        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
                        greedy: true
                    },
                    'prolog': {
                        pattern: /<\?[\s\S]+?\?>/,
                        greedy: true
                    },
                    'doctype': {
                        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                        greedy: true,
                        inside: {
                            'internal-subset': {
                                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                                lookbehind: true,
                                greedy: true,
                                inside: null
                            },
                            'string': {
                                pattern: /"[^"]*"|'[^']*'/,
                                greedy: true
                            },
                            'punctuation': /^<!|>$|[[\]]/,
                            'doctype-tag': /^DOCTYPE/i,
                            'name': /[^\s<>'"]+/
                        }
                    },
                    'cdata': {
                        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                        greedy: true
                    },
                    'tag': {
                        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                        greedy: true,
                        inside: {
                            'tag': {
                                pattern: /^<\/?[^\s>\/]+/,
                                inside: {
                                    'punctuation': /^<\/?/,
                                    'namespace': /^[^\s>\/:]+:/
                                }
                            },
                            'special-attr': [],
                            'attr-value': {
                                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                                inside: {
                                    'punctuation': [
                                        {
                                            pattern: /^=/,
                                            alias: 'attr-equals'
						},
						/"|'/
					]
                                }
                            },
                            'punctuation': /\/?>/,
                            'attr-name': {
                                pattern: /[^\s>\/]+/,
                                inside: {
                                    'namespace': /^[^\s>\/:]+:/
                                }
                            }

                        }
                    },
                    'entity': [
                        {
                            pattern: /&[\da-z]{1,8};/i,
                            alias: 'named-entity'
		},
		/&#x?[\da-f]{1,8};/i
	]
                };

                Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
                    Prism.languages.markup['entity'];
                Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

                Prism.hooks.add('wrap', function (env) {

                    if (env.type === 'entity') {
                        env.attributes['title'] = env.content.replace(/&amp;/, '&');
                    }
                });

                Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
                    value: function addInlined(tagName, lang) {
                        var includedCdataInside = {};
                        includedCdataInside['language-' + lang] = {
                            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                            lookbehind: true,
                            inside: Prism.languages[lang]
                        };
                        includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

                        var inside = {
                            'included-cdata': {
                                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                                inside: includedCdataInside
                            }
                        };
                        inside['language-' + lang] = {
                            pattern: /[\s\S]+/,
                            inside: Prism.languages[lang]
                        };

                        var def = {};
                        def[tagName] = {
                            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
                                return tagName;
                            }), 'i'),
                            lookbehind: true,
                            greedy: true,
                            inside: inside
                        };

                        Prism.languages.insertBefore('markup', 'cdata', def);
                    }
                });
                Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
                    value: function (attrName, lang) {
                        Prism.languages.markup.tag.inside['special-attr'].push({
                            pattern: RegExp(
                                /(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                                'i'
                            ),
                            lookbehind: true,
                            inside: {
                                'attr-name': /^[^\s=]+/,
                                'attr-value': {
                                    pattern: /=[\s\S]+/,
                                    inside: {
                                        'value': {
                                            pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                            lookbehind: true,
                                            alias: [lang, 'language-' + lang],
                                            inside: Prism.languages[lang]
                                        },
                                        'punctuation': [
                                            {
                                                pattern: /^=/,
                                                alias: 'attr-equals'
							},
							/"|'/
						]
                                    }
                                }
                            }
                        });
                    }
                });

                Prism.languages.html = Prism.languages.markup;
                Prism.languages.mathml = Prism.languages.markup;
                Prism.languages.svg = Prism.languages.markup;

                Prism.languages.xml = Prism.languages.extend('markup', {});
                Prism.languages.ssml = Prism.languages.xml;
                Prism.languages.atom = Prism.languages.xml;
                Prism.languages.rss = Prism.languages.xml;

            }),

        "./node_modules/prismjs/components/prism-php-extras.js":
            (() => {

                Prism.languages.insertBefore('php', 'variable', {
                    'this': /\$this\b/,
                    'global': /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
                    'scope': {
                        pattern: /\b[\w\\]+::/,
                        inside: {
                            keyword: /static|self|parent/,
                            punctuation: /::|\\/
                        }
                    }
                });

            }),

        "./node_modules/prismjs/components/prism-php.js":
            (() => {

                (function (Prism) {
                    var comment = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/;
                    var constant = [
                        {
                            pattern: /\b(?:false|true)\b/i,
                            alias: 'boolean'
		},
                        {
                            pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
                            greedy: true,
                            lookbehind: true,
		},
                        {
                            pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
                            greedy: true,
                            lookbehind: true,
		},
		/\b(?:null)\b/i,
		/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/,
	];
                    var number = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i;
                    var operator = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/;
                    var punctuation = /[{}\[\](),:;]/;

                    Prism.languages.php = {
                        'delimiter': {
                            pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
                            alias: 'important'
                        },
                        'comment': comment,
                        'variable': /\$+(?:\w+\b|(?=\{))/i,
                        'package': {
                            pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                            lookbehind: true,
                            inside: {
                                'punctuation': /\\/
                            }
                        },
                        'class-name-definition': {
                            pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
                            lookbehind: true,
                            alias: 'class-name'
                        },
                        'function-definition': {
                            pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
                            lookbehind: true,
                            alias: 'function'
                        },
                        'keyword': [
                            {
                                pattern: /(\(\s*)\b(?:bool|boolean|int|integer|float|string|object|array)\b(?=\s*\))/i,
                                alias: 'type-casting',
                                greedy: true,
                                lookbehind: true
			},
                            {
                                pattern: /([(,?]\s*)\b(?:bool|int|float|string|object|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b(?=\s*\$)/i,
                                alias: 'type-hint',
                                greedy: true,
                                lookbehind: true
			},
                            {
                                pattern: /([(,?]\s*[\w|]\|\s*)(?:null|false)\b(?=\s*\$)/i,
                                alias: 'type-hint',
                                greedy: true,
                                lookbehind: true
			},
                            {
                                pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b/i,
                                alias: 'return-type',
                                greedy: true,
                                lookbehind: true
			},
                            {
                                pattern: /(\)\s*:\s*(?:\?\s*)?[\w|]\|\s*)(?:null|false)\b/i,
                                alias: 'return-type',
                                greedy: true,
                                lookbehind: true
			},
                            {
                                pattern: /\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|iterable|(?:null|false)(?=\s*\|))\b/i,
                                alias: 'type-declaration',
                                greedy: true
			},
                            {
                                pattern: /(\|\s*)(?:null|false)\b/i,
                                alias: 'type-declaration',
                                greedy: true,
                                lookbehind: true
			},
                            {
                                pattern: /\b(?:parent|self|static)(?=\s*::)/i,
                                alias: 'static-context',
                                greedy: true
			},
                            {
                                // yield from
                                pattern: /(\byield\s+)from\b/i,
                                lookbehind: true
			},
			/\bclass\b/i,
                            {
                                pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|match|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
                                lookbehind: true
			}
		],
                        'argument-name': {
                            pattern: /([(,]\s+)\b[a-z_]\w*(?=\s*:(?!:))/i,
                            lookbehind: true
                        },
                        'class-name': [
                            {
                                pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
                                greedy: true,
                                lookbehind: true
			},
                            {
                                pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
                                greedy: true,
                                lookbehind: true
			},
                            {
                                pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
                                greedy: true
			},
                            {
                                pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
                                alias: 'class-name-fully-qualified',
                                greedy: true,
                                lookbehind: true,
                                inside: {
                                    'punctuation': /\\/
                                }
			},
                            {
                                pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
                                alias: 'class-name-fully-qualified',
                                greedy: true,
                                inside: {
                                    'punctuation': /\\/
                                }
			},
                            {
                                pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                                alias: 'class-name-fully-qualified',
                                greedy: true,
                                lookbehind: true,
                                inside: {
                                    'punctuation': /\\/
                                }
			},
                            {
                                pattern: /\b[a-z_]\w*(?=\s*\$)/i,
                                alias: 'type-declaration',
                                greedy: true
			},
                            {
                                pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                                alias: ['class-name-fully-qualified', 'type-declaration'],
                                greedy: true,
                                inside: {
                                    'punctuation': /\\/
                                }
			},
                            {
                                pattern: /\b[a-z_]\w*(?=\s*::)/i,
                                alias: 'static-context',
                                greedy: true
			},
                            {
                                pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
                                alias: ['class-name-fully-qualified', 'static-context'],
                                greedy: true,
                                inside: {
                                    'punctuation': /\\/
                                }
			},
                            {
                                pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
                                alias: 'type-hint',
                                greedy: true,
                                lookbehind: true
			},
                            {
                                pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                                alias: ['class-name-fully-qualified', 'type-hint'],
                                greedy: true,
                                lookbehind: true,
                                inside: {
                                    'punctuation': /\\/
                                }
			},
                            {
                                pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
                                alias: 'return-type',
                                greedy: true,
                                lookbehind: true
			},
                            {
                                pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                                alias: ['class-name-fully-qualified', 'return-type'],
                                greedy: true,
                                lookbehind: true,
                                inside: {
                                    'punctuation': /\\/
                                }
			}
		],
                        'constant': constant,
                        'function': {
                            pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
                            lookbehind: true,
                            inside: {
                                'punctuation': /\\/
                            }
                        },
                        'property': {
                            pattern: /(->\s*)\w+/,
                            lookbehind: true
                        },
                        'number': number,
                        'operator': operator,
                        'punctuation': punctuation
                    };

                    var string_interpolation = {
                        pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
                        lookbehind: true,
                        inside: Prism.languages.php
                    };

                    var string = [
                        {
                            pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
                            alias: 'nowdoc-string',
                            greedy: true,
                            inside: {
                                'delimiter': {
                                    pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                                    alias: 'symbol',
                                    inside: {
                                        'punctuation': /^<<<'?|[';]$/
                                    }
                                }
                            }
		},
                        {
                            pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
                            alias: 'heredoc-string',
                            greedy: true,
                            inside: {
                                'delimiter': {
                                    pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                                    alias: 'symbol',
                                    inside: {
                                        'punctuation': /^<<<"?|[";]$/
                                    }
                                },
                                'interpolation': string_interpolation
                            }
		},
                        {
                            pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                            alias: 'backtick-quoted-string',
                            greedy: true
		},
                        {
                            pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                            alias: 'single-quoted-string',
                            greedy: true
		},
                        {
                            pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                            alias: 'double-quoted-string',
                            greedy: true,
                            inside: {
                                'interpolation': string_interpolation
                            }
		}
	];

                    Prism.languages.insertBefore('php', 'variable', {
                        'string': string,
                        'attribute': {
                            pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
                            greedy: true,
                            inside: {
                                'attribute-content': {
                                    pattern: /^(#\[)[\s\S]+(?=\]$)/,
                                    lookbehind: true,
                                    inside: {
                                        'comment': comment,
                                        'string': string,
                                        'attribute-class-name': [
                                            {
                                                pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                                                alias: 'class-name',
                                                greedy: true,
                                                lookbehind: true
							},
                                            {
                                                pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                                                alias: [
									'class-name',
									'class-name-fully-qualified'
								],
                                                greedy: true,
                                                lookbehind: true,
                                                inside: {
                                                    'punctuation': /\\/
                                                }
							}
						],
                                        'constant': constant,
                                        'number': number,
                                        'operator': operator,
                                        'punctuation': punctuation
                                    }
                                },
                                'delimiter': {
                                    pattern: /^#\[|\]$/,
                                    alias: 'punctuation'
                                }
                            }
                        },
                    });

                    Prism.hooks.add('before-tokenize', function (env) {
                        if (!/<\?/.test(env.code)) {
                            return;
                        }

                        var phpPattern = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/gi;
                        Prism.languages['markup-templating'].buildPlaceholders(env, 'php', phpPattern);
                    });

                    Prism.hooks.add('after-tokenize', function (env) {
                        Prism.languages['markup-templating'].tokenizePlaceholders(env, 'php');
                    });

                }(Prism));

            }),

        "./node_modules/prismjs/components/prism-scss.js":
            (() => {

                Prism.languages.scss = Prism.languages.extend('css', {
                    'comment': {
                        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                        lookbehind: true
                    },
                    'atrule': {
                        pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
                        inside: {
                            'rule': /@[\w-]+/
                        }
                    },
                    'url': /(?:[-a-z]+-)?url(?=\()/i,
                    'selector': {
                        pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/m,
                        inside: {
                            'parent': {
                                pattern: /&/,
                                alias: 'important'
                            },
                            'placeholder': /%[-\w]+/,
                            'variable': /\$[-\w]+|#\{\$[-\w]+\}/
                        }
                    },
                    'property': {
                        pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
                        inside: {
                            'variable': /\$[-\w]+|#\{\$[-\w]+\}/
                        }
                    }
                });

                Prism.languages.insertBefore('scss', 'atrule', {
                    'keyword': [
		/@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i,
                        {
                            pattern: /( )(?:from|through)(?= )/,
                            lookbehind: true
		}
	]
                });

                Prism.languages.insertBefore('scss', 'important', {
                    'variable': /\$[-\w]+|#\{\$[-\w]+\}/
                });

                Prism.languages.insertBefore('scss', 'function', {
                    'module-modifier': {
                        pattern: /\b(?:as|with|show|hide)\b/i,
                        alias: 'keyword'
                    },
                    'placeholder': {
                        pattern: /%[-\w]+/,
                        alias: 'selector'
                    },
                    'statement': {
                        pattern: /\B!(?:default|optional)\b/i,
                        alias: 'keyword'
                    },
                    'boolean': /\b(?:true|false)\b/,
                    'null': {
                        pattern: /\bnull\b/,
                        alias: 'keyword'
                    },
                    'operator': {
                        pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
                        lookbehind: true
                    }
                });

                Prism.languages.scss['atrule'].inside.rest = Prism.languages.scss;

            }),

        "./node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js":
            ((module) => {

                (function () {

                    if (typeof Prism === 'undefined') {
                        return;
                    }

                    var assign = Object.assign || function (obj1, obj2) {
                        for (var name in obj2) {
                            if (obj2.hasOwnProperty(name)) {
                                obj1[name] = obj2[name];
                            }
                        }
                        return obj1;
                    };

                    function NormalizeWhitespace(defaults) {
                        this.defaults = assign({}, defaults);
                    }

                    function toCamelCase(value) {
                        return value.replace(/-(\w)/g, function (match, firstChar) {
                            return firstChar.toUpperCase();
                        });
                    }

                    function tabLen(str) {
                        var res = 0;
                        for (var i = 0; i < str.length; ++i) {
                            if (str.charCodeAt(i) == '\t'.charCodeAt(0)) {
                                res += 3;
                            }
                        }
                        return str.length + res;
                    }

                    NormalizeWhitespace.prototype = {
                        setDefaults: function (defaults) {
                            this.defaults = assign(this.defaults, defaults);
                        },
                        normalize: function (input, settings) {
                            settings = assign(this.defaults, settings);

                            for (var name in settings) {
                                var methodName = toCamelCase(name);
                                if (name !== 'normalize' && methodName !== 'setDefaults' &&
                                    settings[name] && this[methodName]) {
                                    input = this[methodName].call(this, input, settings[name]);
                                }
                            }

                            return input;
                        },

                        leftTrim: function (input) {
                            return input.replace(/^\s+/, '');
                        },
                        rightTrim: function (input) {
                            return input.replace(/\s+$/, '');
                        },
                        tabsToSpaces: function (input, spaces) {
                            spaces = spaces | 0 || 4;
                            return input.replace(/\t/g, new Array(++spaces).join(' '));
                        },
                        spacesToTabs: function (input, spaces) {
                            spaces = spaces | 0 || 4;
                            return input.replace(RegExp(' {' + spaces + '}', 'g'), '\t');
                        },
                        removeTrailing: function (input) {
                            return input.replace(/\s*?$/gm, '');
                        },
                        removeInitialLineFeed: function (input) {
                            return input.replace(/^(?:\r?\n|\r)/, '');
                        },
                        removeIndent: function (input) {
                            var indents = input.match(/^[^\S\n\r]*(?=\S)/gm);

                            if (!indents || !indents[0].length) {
                                return input;
                            }

                            indents.sort(function (a, b) {
                                return a.length - b.length;
                            });

                            if (!indents[0].length) {
                                return input;
                            }

                            return input.replace(RegExp('^' + indents[0], 'gm'), '');
                        },
                        indent: function (input, tabs) {
                            return input.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++tabs).join('\t') + '$&');
                        },
                        breakLines: function (input, characters) {
                            characters = (characters === true) ? 80 : characters | 0 || 80;

                            var lines = input.split('\n');
                            for (var i = 0; i < lines.length; ++i) {
                                if (tabLen(lines[i]) <= characters) {
                                    continue;
                                }

                                var line = lines[i].split(/(\s+)/g);
                                var len = 0;

                                for (var j = 0; j < line.length; ++j) {
                                    var tl = tabLen(line[j]);
                                    len += tl;
                                    if (len > characters) {
                                        line[j] = '\n' + line[j];
                                        len = tl;
                                    }
                                }
                                lines[i] = line.join('');
                            }
                            return lines.join('\n');
                        }
                    };

                    if (true && module.exports) {
                        module.exports = NormalizeWhitespace;
                    }

                    Prism.plugins.NormalizeWhitespace = new NormalizeWhitespace({
                        'remove-trailing': true,
                        'remove-indent': true,
                        'left-trim': true,
                        'right-trim': true
                    });

                    Prism.hooks.add('before-sanity-check', function (env) {
                        var Normalizer = Prism.plugins.NormalizeWhitespace;

                        if (env.settings && env.settings['whitespace-normalization'] === false) {
                            return;
                        }

                        if (!Prism.util.isActive(env.element, 'whitespace-normalization', true)) {
                            return;
                        }

                        if ((!env.element || !env.element.parentNode) && env.code) {
                            env.code = Normalizer.normalize(env.code, env.settings);
                            return;
                        }

                        var pre = env.element.parentNode;
                        if (!env.code || !pre || pre.nodeName.toLowerCase() !== 'pre') {
                            return;
                        }

                        var children = pre.childNodes;
                        var before = '';
                        var after = '';
                        var codeFound = false;

                        for (var i = 0; i < children.length; ++i) {
                            var node = children[i];

                            if (node == env.element) {
                                codeFound = true;
                            } else if (node.nodeName === '#text') {
                                if (codeFound) {
                                    after += node.nodeValue;
                                } else {
                                    before += node.nodeValue;
                                }

                                pre.removeChild(node);
                                --i;
                            }
                        }

                        if (!env.element.children.length || !Prism.plugins.KeepMarkup) {
                            env.code = before + env.code + after;
                            env.code = Normalizer.normalize(env.code, env.settings);
                        } else {
                            var html = before + env.element.innerHTML + after;
                            env.element.innerHTML = Normalizer.normalize(html, env.settings);
                            env.code = env.element.textContent;
                        }
                    });

                }());

            }),

        "./node_modules/prismjs/prism.js":
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var _self = (typeof window !== 'undefined') ?
                    window:(
                        (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) ?
                        self:{}
                    );

                var Prism = (function (_self) {

                    var lang = /\blang(?:uage)?-([\w-]+)\b/i;
                    var uniqueId = 0;

                    var plainTextGrammar = {};


                    var _ = {
                        
                        manual: _self.Prism && _self.Prism.manual,
                        disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

                        util: {
                            encode: function encode(tokens) {
                                if (tokens instanceof Token) {
                                    return new Token(tokens.type, encode(tokens.content), tokens.alias);
                                } else if (Array.isArray(tokens)) {
                                    return tokens.map(encode);
                                } else {
                                    return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
                                }
                            },

                            type: function (o) {
                                return Object.prototype.toString.call(o).slice(8, -1);
                            },

                            objId: function (obj) {
                                if (!obj['__id']) {
                                    Object.defineProperty(obj, '__id', {
                                        value: ++uniqueId
                                    });
                                }
                                return obj['__id'];
                            },

                            clone: function deepClone(o, visited) {
                                visited = visited || {};

                                var clone;
                                var id;
                                switch (_.util.type(o)) {
                                    case 'Object':
                                        id = _.util.objId(o);
                                        if (visited[id]) {
                                            return visited[id];
                                        }
                                        clone = ({});
                                        visited[id] = clone;

                                        for (var key in o) {
                                            if (o.hasOwnProperty(key)) {
                                                clone[key] = deepClone(o[key], visited);
                                            }
                                        }

                                        return (clone);

                                    case 'Array':
                                        id = _.util.objId(o);
                                        if (visited[id]) {
                                            return visited[id];
                                        }
                                        clone = [];
                                        visited[id] = clone;

                                        (((o))).forEach(function (v, i) {
                                            clone[i] = deepClone(v, visited);
                                        });

                                        return (clone);

                                    default:
                                        return o;
                                }
                            },

                            getLanguage: function (element) {
                                while (element && !lang.test(element.className)) {
                                    element = element.parentElement;
                                }
                                if (element) {
                                    return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
                                }
                                return 'none';
                            },

                            currentScript: function () {
                                if (typeof document === 'undefined') {
                                    return null;
                                }
                                if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */ ) {
                                    return (document.currentScript);
                                }

                                try {
                                    throw new Error();
                                } catch (err) {

                                    var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
                                    if (src) {
                                        var scripts = document.getElementsByTagName('script');
                                        for (var i in scripts) {
                                            if (scripts[i].src == src) {
                                                return scripts[i];
                                            }
                                        }
                                    }
                                    return null;
                                }
                            },

                            isActive: function (element, className, defaultActivation) {
                                var no = 'no-' + className;

                                while (element) {
                                    var classList = element.classList;
                                    if (classList.contains(className)) {
                                        return true;
                                    }
                                    if (classList.contains(no)) {
                                        return false;
                                    }
                                    element = element.parentElement;
                                }
                                return !!defaultActivation;
                            }
                        },

                        languages: {
                            
                            plain: plainTextGrammar,
                            plaintext: plainTextGrammar,
                            text: plainTextGrammar,
                            txt: plainTextGrammar,

                            extend: function (id, redef) {
                                var lang = _.util.clone(_.languages[id]);

                                for (var key in redef) {
                                    lang[key] = redef[key];
                                }

                                return lang;
                            },

                            insertBefore: function (inside, before, insert, root) {
                                root = root || (_.languages);
                                var grammar = root[inside];
                                var ret = {};

                                for (var token in grammar) {
                                    if (grammar.hasOwnProperty(token)) {

                                        if (token == before) {
                                            for (var newToken in insert) {
                                                if (insert.hasOwnProperty(newToken)) {
                                                    ret[newToken] = insert[newToken];
                                                }
                                            }
                                        }

                                        if (!insert.hasOwnProperty(token)) {
                                            ret[token] = grammar[token];
                                        }
                                    }
                                }

                                var old = root[inside];
                                root[inside] = ret;

                                _.languages.DFS(_.languages, function (key, value) {
                                    if (value === old && key != inside) {
                                        this[key] = ret;
                                    }
                                });

                                return ret;
                            },

                            DFS: function DFS(o, callback, type, visited) {
                                visited = visited || {};

                                var objId = _.util.objId;

                                for (var i in o) {
                                    if (o.hasOwnProperty(i)) {
                                        callback.call(o, i, o[i], type || i);

                                        var property = o[i];
                                        var propertyType = _.util.type(property);

                                        if (propertyType === 'Object' && !visited[objId(property)]) {
                                            visited[objId(property)] = true;
                                            DFS(property, callback, null, visited);
                                        } else if (propertyType === 'Array' && !visited[objId(property)]) {
                                            visited[objId(property)] = true;
                                            DFS(property, callback, i, visited);
                                        }
                                    }
                                }
                            }
                        },

                        plugins: {},

                        highlightAll: function (async, callback) {
                            _.highlightAllUnder(document, async, callback);
                        },

                        highlightAllUnder: function (container, async, callback) {
                            var env = {
                                callback: callback,
                                container: container,
                                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                            };

                            _.hooks.run('before-highlightall', env);

                            env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

                            _.hooks.run('before-all-elements-highlight', env);

                            for (var i = 0, element;
                                (element = env.elements[i++]);) {
                                _.highlightElement(element, async ===true, env.callback);
                            }
                        },

                        highlightElement: function (element, async, callback) {

                            var language = _.util.getLanguage(element);
                            var grammar = _.languages[language];

                            element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

                            var parent = element.parentElement;
                            if (parent && parent.nodeName.toLowerCase() === 'pre') {
                                parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
                            }

                            var code = element.textContent;

                            var env = {
                                element: element,
                                language: language,
                                grammar: grammar,
                                code: code
                            };

                            function insertHighlightedCode(highlightedCode) {
                                env.highlightedCode = highlightedCode;

                                _.hooks.run('before-insert', env);

                                env.element.innerHTML = env.highlightedCode;

                                _.hooks.run('after-highlight', env);
                                _.hooks.run('complete', env);
                                callback && callback.call(env.element);
                            }

                            _.hooks.run('before-sanity-check', env);

                            parent = env.element.parentElement;
                            if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
                                parent.setAttribute('tabindex', '0');
                            }

                            if (!env.code) {
                                _.hooks.run('complete', env);
                                callback && callback.call(env.element);
                                return;
                            }

                            _.hooks.run('before-highlight', env);

                            if (!env.grammar) {
                                insertHighlightedCode(_.util.encode(env.code));
                                return;
                            }

                            if (async &&_self.Worker) {
                                var worker = new Worker(_.filename);

                                worker.onmessage = function (evt) {
                                    insertHighlightedCode(evt.data);
                                };

                                worker.postMessage(JSON.stringify({
                                    language: env.language,
                                    code: env.code,
                                    immediateClose: true
                                }));
                            } else {
                                insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
                            }
                        },

                        highlight: function (text, grammar, language) {
                            var env = {
                                code: text,
                                grammar: grammar,
                                language: language
                            };
                            _.hooks.run('before-tokenize', env);
                            env.tokens = _.tokenize(env.code, env.grammar);
                            _.hooks.run('after-tokenize', env);
                            return Token.stringify(_.util.encode(env.tokens), env.language);
                        },

                        tokenize: function (text, grammar) {
                            var rest = grammar.rest;
                            if (rest) {
                                for (var token in rest) {
                                    grammar[token] = rest[token];
                                }

                                delete grammar.rest;
                            }

                            var tokenList = new LinkedList();
                            addAfter(tokenList, tokenList.head, text);

                            matchGrammar(text, tokenList, grammar, tokenList.head, 0);

                            return toArray(tokenList);
                        },

                        hooks: {
                            all: {},
                            
                            add: function (name, callback) {
                                var hooks = _.hooks.all;

                                hooks[name] = hooks[name] || [];

                                hooks[name].push(callback);
                            },

                            run: function (name, env) {
                                var callbacks = _.hooks.all[name];

                                if (!callbacks || !callbacks.length) {
                                    return;
                                }

                                for (var i = 0, callback;
                                    (callback = callbacks[i++]);) {
                                    callback(env);
                                }
                            }
                        },

                        Token: Token
                    };
                    _self.Prism = _;

                    function Token(type, content, alias, matchedStr) {
                        this.type = type;
                        this.content = content;
                        this.alias = alias;
                        this.length = (matchedStr || '').length | 0;
                    }

                    Token.stringify = function stringify(o, language) {
                        if (typeof o == 'string') {
                            return o;
                        }
                        if (Array.isArray(o)) {
                            var s = '';
                            o.forEach(function (e) {
                                s += stringify(e, language);
                            });
                            return s;
                        }

                        var env = {
                            type: o.type,
                            content: stringify(o.content, language),
                            tag: 'span',
                            classes: ['token', o.type],
                            attributes: {},
                            language: language
                        };

                        var aliases = o.alias;
                        if (aliases) {
                            if (Array.isArray(aliases)) {
                                Array.prototype.push.apply(env.classes, aliases);
                            } else {
                                env.classes.push(aliases);
                            }
                        }

                        _.hooks.run('wrap', env);

                        var attributes = '';
                        for (var name in env.attributes) {
                            attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
                        }

                        return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
                    };

                    function matchPattern(pattern, pos, text, lookbehind) {
                        pattern.lastIndex = pos;
                        var match = pattern.exec(text);
                        if (match && lookbehind && match[1]) {
                            // change the match to remove the text matched by the Prism lookbehind group
                            var lookbehindLength = match[1].length;
                            match.index += lookbehindLength;
                            match[0] = match[0].slice(lookbehindLength);
                        }
                        return match;
                    }

                    function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
                        for (var token in grammar) {
                            if (!grammar.hasOwnProperty(token) || !grammar[token]) {
                                continue;
                            }

                            var patterns = grammar[token];
                            patterns = Array.isArray(patterns) ? patterns : [patterns];

                            for (var j = 0; j < patterns.length; ++j) {
                                if (rematch && rematch.cause == token + ',' + j) {
                                    return;
                                }

                                var patternObj = patterns[j];
                                var inside = patternObj.inside;
                                var lookbehind = !!patternObj.lookbehind;
                                var greedy = !!patternObj.greedy;
                                var alias = patternObj.alias;

                                if (greedy && !patternObj.pattern.global) {
                                    var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
                                    patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
                                }

                                var pattern = patternObj.pattern || patternObj;

                                for (
                                    var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next
                                ) {

                                    if (rematch && pos >= rematch.reach) {
                                        break;
                                    }

                                    var str = currentNode.value;

                                    if (tokenList.length > text.length) {
                                        return;
                                    }

                                    if (str instanceof Token) {
                                        continue;
                                    }

                                    var removeCount = 1;
                                    var match;

                                    if (greedy) {
                                        match = matchPattern(pattern, pos, text, lookbehind);
                                        if (!match) {
                                            break;
                                        }

                                        var from = match.index;
                                        var to = match.index + match[0].length;
                                        var p = pos;

                                        p += currentNode.value.length;
                                        while (from >= p) {
                                            currentNode = currentNode.next;
                                            p += currentNode.value.length;
                                        }

                                        p -= currentNode.value.length;
                                        pos = p;

                                        if (currentNode.value instanceof Token) {
                                            continue;
                                        }

                                        for (
                                            var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === 'string'); k = k.next
                                        ) {
                                            removeCount++;
                                            p += k.value.length;
                                        }
                                        removeCount--;

                                        str = text.slice(pos, p);
                                        match.index -= pos;
                                    } else {
                                        match = matchPattern(pattern, 0, str, lookbehind);
                                        if (!match) {
                                            continue;
                                        }
                                    }

                                    var from = match.index;
                                    var matchStr = match[0];
                                    var before = str.slice(0, from);
                                    var after = str.slice(from + matchStr.length);

                                    var reach = pos + str.length;
                                    if (rematch && reach > rematch.reach) {
                                        rematch.reach = reach;
                                    }

                                    var removeFrom = currentNode.prev;

                                    if (before) {
                                        removeFrom = addAfter(tokenList, removeFrom, before);
                                        pos += before.length;
                                    }

                                    removeRange(tokenList, removeFrom, removeCount);

                                    var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
                                    currentNode = addAfter(tokenList, removeFrom, wrapped);

                                    if (after) {
                                        addAfter(tokenList, currentNode, after);
                                    }

                                    if (removeCount > 1) {
                                        var nestedRematch = {
                                            cause: token + ',' + j,
                                            reach: reach
                                        };
                                        matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                                        if (rematch && nestedRematch.reach > rematch.reach) {
                                            rematch.reach = nestedRematch.reach;
                                        }
                                    }
                                }
                            }
                        }
                    }

                    function LinkedList() {
                        var head = {
                            value: null,
                            prev: null,
                            next: null
                        };
                        var tail = {
                            value: null,
                            prev: head,
                            next: null
                        };
                        head.next = tail;

                        this.head = head;
                        this.tail = tail;
                        this.length = 0;
                    }

                    function addAfter(list, node, value) {
                        var next = node.next;

                        var newNode = {
                            value: value,
                            prev: node,
                            next: next
                        };
                        node.next = newNode;
                        next.prev = newNode;
                        list.length++;

                        return newNode;
                    }

                    function removeRange(list, node, count) {
                        var next = node.next;
                        for (var i = 0; i < count && next !== list.tail; i++) {
                            next = next.next;
                        }
                        node.next = next;
                        next.prev = node;
                        list.length -= i;
                    }
                    
                    function toArray(list) {
                        var array = [];
                        var node = list.head.next;
                        while (node !== list.tail) {
                            array.push(node.value);
                            node = node.next;
                        }
                        return array;
                    }


                    if (!_self.document) {
                        if (!_self.addEventListener) {
                            return _;
                        }

                        if (!_.disableWorkerMessageHandler) {
                            _self.addEventListener('message', function (evt) {
                                var message = JSON.parse(evt.data);
                                var lang = message.language;
                                var code = message.code;
                                var immediateClose = message.immediateClose;

                                _self.postMessage(_.highlight(code, _.languages[lang], lang));
                                if (immediateClose) {
                                    _self.close();
                                }
                            }, false);
                        }

                        return _;
                    }

                    var script = _.util.currentScript();

                    if (script) {
                        _.filename = script.src;

                        if (script.hasAttribute('data-manual')) {
                            _.manual = true;
                        }
                    }

                    function highlightAutomaticallyCallback() {
                        if (!_.manual) {
                            _.highlightAll();
                        }
                    }

                    if (!_.manual) {
                        var readyState = document.readyState;
                        if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
                            document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
                        } else {
                            if (window.requestAnimationFrame) {
                                window.requestAnimationFrame(highlightAutomaticallyCallback);
                            } else {
                                window.setTimeout(highlightAutomaticallyCallback, 16);
                            }
                        }
                    }

                    return _;

                }(_self));

                if (true && module.exports) {
                    module.exports = Prism;
                }

                if (typeof __webpack_require__.g !== 'undefined') {
                    __webpack_require__.g.Prism = Prism;
                }

                Prism.languages.markup = {
                    'comment': {
                        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
                        greedy: true
                    },
                    'prolog': {
                        pattern: /<\?[\s\S]+?\?>/,
                        greedy: true
                    },
                    'doctype': {
                        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                        greedy: true,
                        inside: {
                            'internal-subset': {
                                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                                lookbehind: true,
                                greedy: true,
                                inside: null
                            },
                            'string': {
                                pattern: /"[^"]*"|'[^']*'/,
                                greedy: true
                            },
                            'punctuation': /^<!|>$|[[\]]/,
                            'doctype-tag': /^DOCTYPE/i,
                            'name': /[^\s<>'"]+/
                        }
                    },
                    'cdata': {
                        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                        greedy: true
                    },
                    'tag': {
                        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                        greedy: true,
                        inside: {
                            'tag': {
                                pattern: /^<\/?[^\s>\/]+/,
                                inside: {
                                    'punctuation': /^<\/?/,
                                    'namespace': /^[^\s>\/:]+:/
                                }
                            },
                            'special-attr': [],
                            'attr-value': {
                                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                                inside: {
                                    'punctuation': [
                                        {
                                            pattern: /^=/,
                                            alias: 'attr-equals'
						},
						/"|'/
					]
                                }
                            },
                            'punctuation': /\/?>/,
                            'attr-name': {
                                pattern: /[^\s>\/]+/,
                                inside: {
                                    'namespace': /^[^\s>\/:]+:/
                                }
                            }

                        }
                    },
                    'entity': [
                        {
                            pattern: /&[\da-z]{1,8};/i,
                            alias: 'named-entity'
		},
		/&#x?[\da-f]{1,8};/i
	]
                };

                Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
                    Prism.languages.markup['entity'];
                Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

                Prism.hooks.add('wrap', function (env) {

                    if (env.type === 'entity') {
                        env.attributes['title'] = env.content.replace(/&amp;/, '&');
                    }
                });

                Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
                    value: function addInlined(tagName, lang) {
                        var includedCdataInside = {};
                        includedCdataInside['language-' + lang] = {
                            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                            lookbehind: true,
                            inside: Prism.languages[lang]
                        };
                        includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

                        var inside = {
                            'included-cdata': {
                                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                                inside: includedCdataInside
                            }
                        };
                        inside['language-' + lang] = {
                            pattern: /[\s\S]+/,
                            inside: Prism.languages[lang]
                        };

                        var def = {};
                        def[tagName] = {
                            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
                                return tagName;
                            }), 'i'),
                            lookbehind: true,
                            greedy: true,
                            inside: inside
                        };

                        Prism.languages.insertBefore('markup', 'cdata', def);
                    }
                });
                Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
                    value: function (attrName, lang) {
                        Prism.languages.markup.tag.inside['special-attr'].push({
                            pattern: RegExp(
                                /(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                                'i'
                            ),
                            lookbehind: true,
                            inside: {
                                'attr-name': /^[^\s=]+/,
                                'attr-value': {
                                    pattern: /=[\s\S]+/,
                                    inside: {
                                        'value': {
                                            pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                            lookbehind: true,
                                            alias: [lang, 'language-' + lang],
                                            inside: Prism.languages[lang]
                                        },
                                        'punctuation': [
                                            {
                                                pattern: /^=/,
                                                alias: 'attr-equals'
							},
							/"|'/
						]
                                    }
                                }
                            }
                        });
                    }
                });

                Prism.languages.html = Prism.languages.markup;
                Prism.languages.mathml = Prism.languages.markup;
                Prism.languages.svg = Prism.languages.markup;

                Prism.languages.xml = Prism.languages.extend('markup', {});
                Prism.languages.ssml = Prism.languages.xml;
                Prism.languages.atom = Prism.languages.xml;
                Prism.languages.rss = Prism.languages.xml;

                (function (Prism) {

                    var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

                    Prism.languages.css = {
                        'comment': /\/\*[\s\S]*?\*\//,
                        'atrule': {
                            pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                            inside: {
                                'rule': /^@[\w-]+/,
                                'selector-function-argument': {
                                    pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                                    lookbehind: true,
                                    alias: 'selector'
                                },
                                'keyword': {
                                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                                    lookbehind: true
                                }
                            }
                        },
                        'url': {
                            pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
                            greedy: true,
                            inside: {
                                'function': /^url/i,
                                'punctuation': /^\(|\)$/,
                                'string': {
                                    pattern: RegExp('^' + string.source + '$'),
                                    alias: 'url'
                                }
                            }
                        },
                        'selector': {
                            pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
                            lookbehind: true
                        },
                        'string': {
                            pattern: string,
                            greedy: true
                        },
                        'property': {
                            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                            lookbehind: true
                        },
                        'important': /!important\b/i,
                        'function': {
                            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                            lookbehind: true
                        },
                        'punctuation': /[(){};:,]/
                    };

                    Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

                    var markup = Prism.languages.markup;
                    if (markup) {
                        markup.tag.addInlined('style', 'css');
                        markup.tag.addAttribute('style', 'css');
                    }

                }(Prism));

                Prism.languages.clike = {
                    'comment': [
                        {
                            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                            lookbehind: true,
                            greedy: true
		},
                        {
                            pattern: /(^|[^\\:])\/\/.*/,
                            lookbehind: true,
                            greedy: true
		}
	],
                    'string': {
                        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                        greedy: true
                    },
                    'class-name': {
                        pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
                        lookbehind: true,
                        inside: {
                            'punctuation': /[.\\]/
                        }
                    },
                    'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
                    'boolean': /\b(?:true|false)\b/,
                    'function': /\b\w+(?=\()/,
                    'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                    'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                    'punctuation': /[{}[\];(),.:]/
                };

                Prism.languages.javascript = Prism.languages.extend('clike', {
                    'class-name': [
		Prism.languages.clike['class-name'],
                        {
                            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
                            lookbehind: true
		}
	],
                    'keyword': [
                        {
                            pattern: /((?:^|\})\s*)catch\b/,
                            lookbehind: true
		},
                        {
                            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                            lookbehind: true
		},
	],
                    'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                    'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
                    'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
                });

                Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

                Prism.languages.insertBefore('javascript', 'keyword', {
                    'regex': {
                        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
                        lookbehind: true,
                        greedy: true,
                        inside: {
                            'regex-source': {
                                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                                lookbehind: true,
                                alias: 'language-regex',
                                inside: Prism.languages.regex
                            },
                            'regex-delimiter': /^\/|\/$/,
                            'regex-flags': /^[a-z]+$/,
                        }
                    },
                    'function-variable': {
                        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                        alias: 'function'
                    },
                    'parameter': [
                        {
                            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                            lookbehind: true,
                            inside: Prism.languages.javascript
		},
                        {
                            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                            lookbehind: true,
                            inside: Prism.languages.javascript
		},
                        {
                            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                            lookbehind: true,
                            inside: Prism.languages.javascript
		},
                        {
                            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                            lookbehind: true,
                            inside: Prism.languages.javascript
		}
	],
                    'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
                });

                Prism.languages.insertBefore('javascript', 'string', {
                    'hashbang': {
                        pattern: /^#!.*/,
                        greedy: true,
                        alias: 'comment'
                    },
                    'template-string': {
                        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
                        greedy: true,
                        inside: {
                            'template-punctuation': {
                                pattern: /^`|`$/,
                                alias: 'string'
                            },
                            'interpolation': {
                                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                                lookbehind: true,
                                inside: {
                                    'interpolation-punctuation': {
                                        pattern: /^\$\{|\}$/,
                                        alias: 'punctuation'
                                    },
                                    rest: Prism.languages.javascript
                                }
                            },
                            'string': /[\s\S]+/
                        }
                    }
                });

                if (Prism.languages.markup) {
                    Prism.languages.markup.tag.addInlined('script', 'javascript');

                    Prism.languages.markup.tag.addAttribute(
                        /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
                        'javascript'
                    );
                }

                Prism.languages.js = Prism.languages.javascript;

                (function () {

                    if (typeof Prism === 'undefined' || typeof document === 'undefined') {
                        return;
                    }

                    if (!Element.prototype.matches) {
                        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
                    }

                    var LOADING_MESSAGE = 'Loading…';
                    var FAILURE_MESSAGE = function (status, message) {
                        return '✖ Error ' + status + ' while fetching file: ' + message;
                    };
                    var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';

                    var EXTENSIONS = {
                        'js': 'javascript',
                        'py': 'python',
                        'rb': 'ruby',
                        'ps1': 'powershell',
                        'psm1': 'powershell',
                        'sh': 'bash',
                        'bat': 'batch',
                        'h': 'c',
                        'tex': 'latex'
                    };

                    var STATUS_ATTR = 'data-src-status';
                    var STATUS_LOADING = 'loading';
                    var STATUS_LOADED = 'loaded';
                    var STATUS_FAILED = 'failed';

                    var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])' +
                        ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';

                    var lang = /\blang(?:uage)?-([\w-]+)\b/i;

                    function setLanguageClass(element, language) {
                        var className = element.className;
                        className = className.replace(lang, ' ') + ' language-' + language;
                        element.className = className.replace(/\s+/g, ' ').trim();
                    }


                    Prism.hooks.add('before-highlightall', function (env) {
                        env.selector += ', ' + SELECTOR;
                    });

                    Prism.hooks.add('before-sanity-check', function (env) {
                        var pre = (env.element);
                        if (pre.matches(SELECTOR)) {
                            env.code = '';

                            pre.setAttribute(STATUS_ATTR, STATUS_LOADING);

                            var code = pre.appendChild(document.createElement('CODE'));
                            code.textContent = LOADING_MESSAGE;

                            var src = pre.getAttribute('data-src');

                            var language = env.language;
                            if (language === 'none') {
                                var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
                                language = EXTENSIONS[extension] || extension;
                            }

                            setLanguageClass(code, language);
                            setLanguageClass(pre, language);

                            var autoloader = Prism.plugins.autoloader;
                            if (autoloader) {
                                autoloader.loadLanguages(language);
                            }

                            var xhr = new XMLHttpRequest();
                            xhr.open('GET', src, true);
                            xhr.onreadystatechange = function () {
                                if (xhr.readyState == 4) {
                                    if (xhr.status < 400 && xhr.responseText) {
                                        pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
                                        code.textContent = xhr.responseText;
                                        Prism.highlightElement(code);

                                    } else {
                                        pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
                                        if (xhr.status >= 400) {
                                            code.textContent = FAILURE_MESSAGE(xhr.status, xhr.statusText);
                                        } else {
                                            code.textContent = FAILURE_EMPTY_MESSAGE;
                                        }
                                    }
                                }
                            };
                            xhr.send(null);
                        }
                    });

                    Prism.plugins.fileHighlight = {
                        highlight: function highlight(container) {
                            var elements = (container || document).querySelectorAll(SELECTOR);

                            for (var i = 0, element;
                                (element = elements[i++]);) {
                                Prism.highlightElement(element);
                            }
                        }
                    };

                    var logged = false;
                    Prism.fileHighlight = function () {
                        if (!logged) {
                            console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
                            logged = true;
                        }
                        Prism.plugins.fileHighlight.highlight.apply(this, arguments);
                    };

                }());

            })

    });

    var __webpack_module_cache__ = {};

    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        
        if (cachedModule !== undefined) {
            return cachedModule.exports;
        }

        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };

        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

        return module.exports;

    }

    (() => {
        __webpack_require__.g = (function () {
            if (typeof globalThis === 'object') return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if (typeof window === 'object') return window;
            }
        })();
    })();

    (() => {
        __webpack_require__.r = (exports) => {
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
            }
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
        };
    })();

    var __webpack_exports__ = {};
    (() => {
        window.Prism = __webpack_require__("./node_modules/prismjs/prism.js");
        __webpack_require__("./node_modules/prismjs/components/prism-markup.js");
        __webpack_require__("./node_modules/prismjs/components/prism-markup-templating.js");
        __webpack_require__("./node_modules/prismjs/components/prism-bash.js");
        __webpack_require__("./node_modules/prismjs/components/prism-javascript.js");
        __webpack_require__("./node_modules/prismjs/components/prism-scss.js");
        __webpack_require__("./node_modules/prismjs/components/prism-css.js");
        __webpack_require__("./node_modules/prismjs/components/prism-php.js");
        __webpack_require__("./node_modules/prismjs/components/prism-php-extras.js");
        __webpack_require__("./node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js");
        __webpack_require__("../src/js/vendors/plugins/prism.init.js");
        __webpack_require__("./webpack/plugins/custom/prismjs/prismjs.scss");

    })();

})();
