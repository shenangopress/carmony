---
title: {{ replace .Name "-" " " | title }}
allDay: false
start: {{ .Date }}
end: {{ .Date }}
color: {{ .Site.Params.lightColor }}
draft: true
---
