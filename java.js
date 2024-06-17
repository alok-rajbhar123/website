
@charset "UTF-8";
/* BACKGROUND */
.cmN {
  box - shadow: inset 0 0 0 2px red;
}

/*
::-webkit-scrollbar {
	min-width: 8px;
	width: 8px;
	max-width: 8px;
  min-height: 8px;
	height: 8px;
	max-height: 8px;
	background: none;
}
::-webkit-scrollbar-thumb {
	background: rgba(255,255,255,.15);
	cursor: default;
	backface-visibility: hidden;
	border-radius: 20px;
}
::-webkit-scrollbar-button {
	display: none;
  height: 0px;
}
*/
html {
  padding: 0;
  margin: 0;
  background: #000;
}

body {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  padding: 0;
  margin: 0;
  overflow: hidden;
  font - family: "Roboto", "Ionicons", sans - serif!important;
  font - weight: 400;
  user - select: none;
  font - size: 16px;
  transition: filter 0.25s ease -in -out;
}
body.night[sysDesktopBackground] {
  background - image: url("https://github.com/aboredvaro/codepen_resources/blob/main/macOS/img/bg/abstract/macOS-Big-Sur-Vector-Wave-Dark-Wallpaper.jpg?raw=true");
}
body.night[sysDesktopBackgroundBlur] {
  background - image: url("https://raw.githubusercontent.com/aboredvaro/codepen_resources/main/macOS/img/bg/abstract/macOS-Big-Sur-Vector-Wave-Dark-Wallpaper-blur.jpg");
}
body.sleep {
  filter: brightness(0);
  pointer - events: none!important;
  cursor: none!important;
  transition: filter 0.25s ease -in -out;
}

*, *: before, *: after {
  box - sizing: border - box;
  outline: none;
  font - family: "Roboto", "Ionicons", sans - serif!important;
}

b {
  font - weight: 600;
}

ul, li {
  margin: 0;
  padding: 0;
}

input[type = text] {
  border: none;
}

html[type = button] {
  position: relative;
  -webkit - appearance: none;
  appearance: none;
  display: inline - block;
  width: auto;
  height: auto;
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.15);
  box - shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.075), 0 0 0 1px rgba(0, 0, 0, 0.2);
  border - radius: 4px;
  font - size: inherit;
  font - weight: inherit;
  font - family: inherit;
  color: inherit;
  border: none;
}
html[type = button]: active {
  background: #006AFF;
  box - shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.2);
}

input[type = checkbox] {
  position: relative;
  -webkit - appearance: none;
  appearance: none;
  display: inline - block;
  width: 14px;
  height: 14px;
  background: rgba(255, 255, 255, 0.15);
  box - shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.075), 0 0 0 1px rgba(0, 0, 0, 0.2);
  border - radius: 4px;
  transform: translateY(2px);
}
input[type = checkbox]: checked {
  background: rgba(255, 255, 255, 0.15);
}
input[type = checkbox]: checked: before {
  opacity: 0.75;
}
input[type = checkbox]: before {
  content: "";
  position: absolute;
  top: calc(50 % - 6px);
  left: calc(50 % - 2px);
  width: 5px;
  height: 9px;
  border: 2px solid #FFF;
  border - top: none;
  border - left: none;
  transform - origin: center center;
  transform: rotateZ(45deg);
  opacity: 0;
}

a {
  text - decoration: none;
  cursor: default ;
  color: inherit;
}

i {
  font - style: normal;
}

input {
  font - family: "Questrial", sans - serif;
}

.video - js {
  position: relative;
}

.media {
  display: flex;
}

video {
  width: 100 %;
  height: 100 %;
}

.media__img,
.media__body {
  flex: 0 1 auto;
}

.media__body {
  padding - left: 10px;
}

.desktop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 34px;
  width: 100 %;
  height: 100vh;
  user - select: none;
  transform: translate3d(0, 0, 0);
  background: url("https://raw.githubusercontent.com/aboredvaro/codepen_resources/main/macOS/img/bg/abstract/macOS-Big-Sur-Vector-Wave-Wallpaper.jpg");
  background - size: 0px 0px;
}
.desktop: before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100 %;
  height: 100vh;
  background: inherit;
  background - position: center center;
  background - size: cover;
}

.window {
  -webkit - transform - style: preserve - 3d;
  -moz - transform - style: preserve - 3d;
  transform - style: preserve - 3d;
  overflow: hidden;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  box - shadow: 0 40px 60px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.5);
  transition: all 0.1s, top 0.1s ease -in -out, left 0.1s ease -in -out, transform 0.1s ease -in -out, width 0.1s ease -in -out, height 0.1s ease -in -out, z - index 0ms, box - shadow 0ms;
  z - index: 0;
  -webkit - transform - origin: center center;
  -moz - transform - origin: center center;
  transform - origin: center center;
  -webkit - transform: none;
  -moz - transform: none;
  transform: none;
  border - radius: 10px;
  background: #1e1e1f;
  color: #FFF;
  min - width: 400px;
  min - height: 200px;
  overflow: hidden;
  z - index: 1;
}
.window: after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100 %;
  height: 100 %;
  box - shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  border - radius: 10px;
  z - index: 999999;
  pointer - events: none;
}
.window[handler = extended].window__handler {
  height: 38px;
}
.window[handler = extended].window__handler.window__title {
  top: 50 %;
  transform: translateY(-50 %);
}
.window[handler = extended].window__handler.window__controls {
  top: 50 %;
  transform: translateY(-50 %) translateX(5px);
}
.window[handler = extended].window__handler.window__actions {
  top: 50 %;
  left: 70px;
  width: calc(100 % - 70px);
  transform: translateY(-50 %);
}
.window[handler = extended].window__body {
  height: calc(100 % - 38px);
}
.window[resizable = false] {
  transition: all 0.1s, top 0.1s ease -in -out, left 0.1s ease -in -out, transform 0.1s ease -in -out, width 0.25s ease -in -out, height 0.25s ease -in -out, z - index 0ms, box - shadow 0ms;
}
.window[resizable = false].ui - resizable - handle {
  display: none;
  pointer - events: none;
}
.window[data - windowBackdrop= true] {
  background: none!important;
}
.window[data - windowBackdrop= true]: before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100 %;
  height: 100 %;
  -webkit - backdrop - filter: blur(30px) saturate(1.5);
  backdrop - filter: blur(30px) saturate(1.5);
  background: #1e1e1f;
  border - radius: 10px;
  z - index: 0;
}
.window.tmp {
  max - width: 75vw;
  max - height: 75vh;
  transition: all 0s;
}
.window.tmp.window__body.window__main.img {
  width: 100 %;
  height: calc(100 % - 24px);
  background - size: contain!important;
  background - repeat: no - repeat;
  background - position: center center;
}
.window.window--active {
  box - shadow: 0 50px 80px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 0 1px black;
}
.window.window--active input[type = checkbox]: checked {
  background: #006AFF;
}
.window.window--active input[type = checkbox]: checked: before {
  opacity: 1;
}
.window.window--active.window__handler: before {
  background - image: linear - gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.025));
}
.window.window--active.window__handler.window__title {
  color: rgba(255, 255, 255, 0.65);
  text - shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
}
.window.window--active.window__handler.window__actions {
  opacity: 1;
}
.window.window--active.window__handler.window__controls.window__minimize {
  background: #f5c350;
}
.window.window--active.window__handler.window__controls.window__maximize {
  background: #65cd57;
}
.window.window--active.window__handler.window__controls.window__close {
  background: #FF5D5A;
}
.window.window--active.window__body.sidebar {
  pointer - events: all;
}
.window.window--active.window__body.sidebar.item, .window.window--active.window__body.sidebar.title {
  opacity: 1;
}
.window.window--active[data - windowBackdrop= true] {
  background: none!important;
}
.window.window--active[data - windowBackdrop= true]: before {
  background: rgba(30, 30, 31, 0.75);
}
.window.ui - draggable - dragging, .window.ui - resizable - resizing {
  transition: 0s;
}

.window--maximized {
  border - radius: 0px;
  width: 100vw!important;
  height: 100vh!important;
  transition: all 0.1s, z - index 0ms;
}
.window--maximized: after {
  border - radius: 0!important;
}
.window--maximized.window__handler.window__controls.window__maximize:: before {
  top: 50 %;
  left: calc(50 % - 4px);
}
.window--maximized.window__handler.window__controls.window__maximize:: after {
  top: calc(50 % - 4px);
  left: 50 %;
}
.window--maximized.window__handler: before, .window--maximized.window__handler: after {
  border - radius: 0px!important;
}
.window--maximized[data - windowBackdrop= true]: before {
  border - radius: 0px!important;
}

.window--minimized {
  top: 100vh!important;
  transform: scale(0)!important;
  -webkit - transform - origin: center bottom!important;
  -moz - transform - origin: center bottom!important;
  transform - origin: center bottom!important;
  opacity: 0;
  pointer - events: none!important;
  transition: all 0.35s!important;
}

.window--closing {
  transition: 0s;
}

.window--closed {
  display: none;
  transition: 0s;
}

.ui - resizable - se {
  opacity: 0;
}

.window__handler {
  position: relative;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  height: 24px;
  width: 100 %;
  cursor: default ;
  z - index: 9999;
}
.window__handler: before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100 %;
  height: 100 %;
  background: rgba(255, 255, 255, 0.05);
  background - image: linear - gradient(to bottom, rgba(0, 0, 0, 0.025), rgba(0, 0, 0, 0.05));
  box - shadow: inset 0 - 1px 0 0 rgba(255, 255, 255, 0.05), 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  z - index: 0;
}
.window__handler.window__title {
  position: absolute;
  top: 0;
  left: 25 %;
  width: 50 %;
  height: 24px;
  line - height: 24px;
  text - align: center;
  font - size: 14px;
  color: rgba(255, 255, 255, 0.25);
  text - shadow: 0 1px 1px rgba(0, 0, 0, 0);
  white - space: nowrap;
  overflow: hidden;
  text - overflow: ellipsis;
}
.window__handler.window__controls {
  position: relative;
  top: 0;
  display: inline - block;
  height: 24px;
  left: 5px;
  z - index: 1;
}
.window__handler.window__controls: hover.window__minimize:: before {
  background: rgba(0, 0, 0, 0.75);
}
.window__handler.window__controls: hover.window__close:: before, .window__handler.window__controls: hover.window__close:: after {
  background: rgba(0, 0, 0, 0.75);
}
.window__handler.window__controls: hover.window__maximize:: before, .window__handler.window__controls: hover.window__maximize:: after {
  border - color: transparent rgba(0, 0, 0, 0.75) transparent transparent;
}
.window__handler.window__controls: hover.window__minimize {
  background: #f5c350;
}
.window__handler.window__controls: hover.window__maximize {
  background: #65cd57;
}
.window__handler.window__controls: hover.window__close {
  background: #FF5D5A;
}
.window__handler.window__controls > a {
  position: relative;
  display: inline - block;
  float: left;
  height: 12px;
  width: 12px;
  margin: 6px 4px;
  padding: 0;
  background: rgba(255, 255, 255, 0.1);
  border - radius: 100 %;
  overflow: hidden;
}
.window__handler.window__controls > a: active {
  filter: brightness(0.5);
}
.window__handler.window__controls > a:: before, .window__handler.window__controls > a:: after {
  content: "";
  position: absolute;
  transition: 0.1s;
}
.window__handler.window__controls > a.window__minimize:: before {
  width: calc(100 % - 4px);
  height: 1px;
  top: 50 %;
  left: 2px;
}
.window__handler.window__controls > a.window__maximize:: before {
  width: 0;
  height: 0;
  top: calc(50 % - 3px);
  left: calc(50 % - 1px);
  border - style: solid;
  border - width: 0 4px 4px 0;
  border - color: transparent;
}
.window__handler.window__controls > a.window__maximize:: after {
  width: 0;
  height: 0;
  top: calc(50 % - 1px);
  left: calc(50 % - 3px);
  border - style: solid;
  border - width: 0 4px 4px 0;
  border - color: transparent;
  transform - origin: center center;
  transform: rotateZ(180deg);
}
.window__handler.window__controls > a.window__close:: before, .window__handler.window__controls > a.window__close:: after {
  width: calc(100 % - 4px);
  height: 1px;
  top: 50 %;
  left: 2px;
  transform: rotateZ(45deg);
}
.window__handler.window__controls > a.window__close:: after {
  transform: rotateZ(-45deg);
}
.window__handler.window__controls > a.disabled {
  background: rgba(255, 255, 255, 0.075)!important;
  pointer - events: none;
}
.window__handler.window__controls > a.disabled: before, .window__handler.window__controls > a.disabled: after {
  opacity: 0;
}
.window__handler.window__actions {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 36px;
  width: 100 %;
  padding: 0 6px;
  opacity: 0.5;
}
.window__handler.window__actions > a {
  position: relative;
  display: inline - block;
  float: left;
  height: 24px;
  width: auto;
  margin: 6px 5px;
  background: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.65);
  box - shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 1px 0 rgba(0, 0, 0, 0.05), inset 0 1px 0 0 rgba(255, 255, 255, 0.075), inset 0 - 1px 0 0 rgba(0, 0, 0, 0.1);
  border - radius: 5px;
  text - align: center;
  line - height: 24px;
  overflow: hidden;
}
.window__handler.window__actions > a: last - child {
  margin - right: 0;
}
.window__handler.window__actions > a.nav {
  width: 36px;
  color: rgba(255, 255, 255, 0.85);
  line - height: 26px;
  margin: 6px 0;
}
.window__handler.window__actions > a.nav.next: before {
  content: "";
}
.window__handler.window__actions > a.nav.prev {
  margin - right: 2px;
}
.window__handler.window__actions > a.nav.prev: before {
  content: "";
}
.window__handler.window__actions > a.nav.home {
  margin - left: 8px;
}
.window__handler.window__actions > a.nav.home: before {
  content: "";
}
.window__handler.window__actions > a.nav: active {
  background: rgba(255, 255, 255, 0.25);
}
.window__handler.window__actions > a.nav.disabled {
  color: rgba(255, 255, 255, 0.2);
}
.window__handler.window__actions > a.nav.disabled: active {
  background: rgba(255, 255, 255, 0.15);
}
.window__handler.window__actions > a.search {
  position: relative;
  float: right;
  min - width: 200px;
  background: rgba(255, 255, 255, 0.15);
}
.window__handler.window__actions > a.search i {
  position: absolute;
  top: 0;
  left: 0;
  width: 26px;
  height: 100 %;
}
.window__handler.window__actions > a.search i: before {
  content: "";
}
.window__handler.window__actions > a.search input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100 %;
  height: 100 %;
  background: none;
  border: none;
  padding: 0 8px 0 26px;
  color: rgba(255, 255, 255, 0.75);
  border - radius: 5px;
  outline: 2px solid #006aff;
  transition: outline 0.35s ease -in -out;
}
.window__handler.window__actions > a.search input: focus {
  outline: 2px solid rgba(0, 106, 255, 0.35);
}
.window__handler.window__options {
  position: absolute;
  top: 24px;
  left: 0;
  height: 24px;
  width: 100 %;
}
.window__handler.window__options > a.option {
  position: relative;
  display: inline - block;
  float: left;
  height: 100 %;
  width: auto;
  padding: 0 10px;
  color: rgba(255, 255, 255, 0.65);
  text - align: center;
  line - height: 24px;
}
.window__handler.window__options > a.option: before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 30px;
  width: calc(100 % - 60px);
  height: 3px;
  background: rgba(255, 255, 255, 0);
  border - radius: 5px;
  transition: 0.1s;
}
.window__handler.window__options > a.option: hover: before {
  left: 10px;
  width: calc(100 % - 20px);
}
.window__handler.window__options > a.option.active {
  color: rgba(255, 255, 255, 0.9);
}
.window__handler.window__options > a.option.active: before, .window__handler.window__options > a.option.active: hover: before {
  left: 10px;
  width: calc(100 % - 20px);
  background: rgba(255, 255, 255, 0.5);
}
.window__handler.window__options > a.option: hover: before {
  background: rgba(255, 255, 255, 0.15);
}

.window__body {
  height: calc(100 % - 24px);
}

.window--messages.window__handler: before {
  opacity: 0;
}

.window--files.window__handler {
  height: 60px;
  background: #1e1e1f!important;
}
.window--files.window__body {
  position: absolute;
  bottom: 0;
  width: 100 %;
  height: 100 %;
}
.window--files.sidebar {
  top: 60px!important;
  height: calc(100 % - 60px)!important;
}
.window--files.window__main {
  margin - top: 60px!important;
  height: calc(100 % - 60px)!important;
  background: #1e1e1f!important;
}

.window--safari.window__handler {
  -webkit - backdrop - filter: blur(15px);
  backdrop - filter: blur(15px);
  background: rgba(30, 30, 31, 0.9);
  height: 70px;
}
.window--safari.window__handler.window__controls {
  top: calc(42px / 2);
  transform: translateY(-50 %) translateX(5px);
}
.window--safari.window__handler.browse {
  position: absolute;
  top: calc(42px / 2);
  left: 50 %;
  width: 400px;
  height: 26px;
  transform: translateY(-50 %) translateX(-50 %);
  background: rgba(255, 255, 255, 0.1);
  border - radius: 5px;
  padding: 0 10px;
  color: rgba(255, 255, 255, 0.75);
  font - size: 85 %;
  text - align: center;
}
.window--safari.window__handler.browse: focus {
  background: rgba(255, 255, 255, 0.15);
  box - shadow: inset 0 0 0 1px #006aff;
  color: white;
}
.window--safari.window__handler.browse:: placeholder {
  color: rgba(255, 255, 255, 0.25);
}
.window--safari.window__handler.tabs {
  list - style: none;
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  width: 100 %;
  height: 28px;
  box - shadow: 0 - 1px 0 0 rgba(255, 255, 255, 0.1);
  font - size: 85 %;
  overflow: hidden;
  overflow - x: auto;
}
.window--safari.window__handler.tabs:: -webkit - scrollbar {
  min - width: 0;
  width: 0;
  max - width: 0;
  min - height: 0;
  height: 0;
  max - height: 0;
  background - color: none;
}
.window--safari.window__handler.tabs li {
  position: relative;
  flex - wrap: nowrap;
  flex - basis: 100 %;
  padding: 0 28px;
  height: 100 %;
  line - height: 28px;
  text - align: center;
  white - space: nowrap;
  overflow: hidden;
  text - overflow: ellipsis;
  background: rgba(0, 0, 0, 0.2);
  min - width: 150px;
  box - shadow: -1px 0 0 0 rgba(255, 255, 255, 0.1);
}
.window--safari.window__handler.tabs li: hover {
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.05s ease -in -out;
}
.window--safari.window__handler.tabs li: hover.close {
  opacity: 1;
}
.window--safari.window__handler.tabs li.active {
  background: none;
  transition: all 0s;
}
.window--safari.window__handler.tabs li.new {
  max - width: 28px!important;
  min - width: 28px!important;
  flex - grow: 0;
  padding: 0;
}
.window--safari.window__handler.tabs li.new: before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100 %;
  height: 100 %;
  text - align: center;
  line - height: 28px;
  font - size: 100 %;
  opacity: 0.5;
}
.window--safari.window__handler.tabs li.close {
  position: absolute;
  top: 6px;
  left: 6px;
  width: 16px;
  height: 16px;
  text - align: center;
  line - height: 16px;
  border - radius: 1px;
  opacity: 0;
  transition: opacity 0.1s ease -in -out;
}
.window--safari.window__handler.tabs li.close: before {
  content: "";
  font - size: 150 %;
  opacity: 0.5;
}
.window--safari.window__handler.tabs li.close: hover {
  background: rgba(255, 255, 255, 0.075);
}
.window--safari.window__body {
  width: 100 %;
  height: calc(100 % - 70px);
}
.window--safari.window__body.content {
  position: relative;
  width: 100 %;
  min - height: 100 %;
  display: none;
  opacity: 0;
  pointer - events: none;
  background: #FFF;
  color: #000;
}
.window--safari.window__body.content.transparent {
  background: transparent;
  color: #FFF;
}
.window--safari.window__body.content.visible {
  display: block;
  opacity: 1;
  pointer - events: all;
}

.window__body {
  position: relative;
  display: flex;
  overflow: auto;
  height: 100 %;
  font - size: 16px;
}
.window__body.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  min - width: 160px;
  height: 100 %;
  overflow: auto;
  padding: 5px 0;
  transition: all 0.05s;
}
.window__body.sidebar[data - display= items] {
  background: rgba(255, 255, 255, 0.025);
  pointer - events: none;
}
.window__body.sidebar[data - display= items] .item, .window__body.sidebar[data - display= items] .title {
  position: relative;
  width: calc(100 % - 1px);
  height: 30px;
  line - height: 30px;
  padding: 0 20px 0 30px;
  margin: 0;
  margin - left: 1px;
  font - size: 14px;
  color: rgba(255, 255, 255, 0.5);
  opacity: 0.5;
  z - index: 0;
}
.window__body.sidebar[data - display= items] .item: last - child, .window__body.sidebar[data - display= items] .title: last - child {
  margin - bottom: 5px;
}
.window__body.sidebar[data - display= items] .item.active, .window__body.sidebar[data - display= items] .title.active {
  color: white;
  background: rgba(255, 255, 255, 0.075);
}
.window__body.sidebar[data - display= items] .title {
  text - transform: uppercase;
  color: rgba(255, 255, 255, 0.25);
  font - size: 12px;
}
.window__body.sidebar[data - display= items] .title: first - child {
  margin - top: 20px;
}
.window__body.sidebar[data - display= items] .item[data - item= recents]i:: before {
  content: "";
}
.window__body.sidebar[data - display= items] .item[data - item= download]i:: before {
  content: "";
}
.window__body.sidebar[data - display= items] .item[data - item= documents]i:: before {
  content: "";
}
.window__body.sidebar[data - display= items] .item[data - item= desktop]i:: before {
  content: "";
}
.window__body.sidebar[data - display= items] .item[data - item= images]i:: before {
  content: "";
}
.window__body.sidebar[data - display= items] .item[data - item= music]i:: before {
  content: "";
}
.window__body.sidebar[data - display= items] .item[data - item= videos]i:: before {
  content: "";
}
.window__body.sidebar[data - display= items] .item[data - item= apps]i:: before {
  content: "";
}
.window__body.sidebar[data - display= cards] {
  min - width: 300px;
  padding: 0;
}
.window__body.sidebar[data - display= cards] .card {
  position: relative;
  width: 100 %;
  height: 70px;
  padding: 0;
  margin: 0;
  font - size: 14px;
  color: #FFF;
  background - size: 0px 0px;
  z - index: 0;
}
.window__body.sidebar[data - display= cards] .card: before {
  content: "";
  position: absolute;
  top: 15px;
  left: 20px;
  width: 40px;
  height: 40px;
  background - color: rgba(255, 255, 255, 0.1);
  background - image: inherit;
  background - size: cover;
  background - position: center center;
  border - radius: 100 %;
}
.window__body.sidebar[data - display= cards] .card: after {
  content: "";
  position: absolute;
  bottom: -1px;
  right: 0;
  width: calc(100 % - 20px);
  height: 1px;
  background - color: rgba(255, 255, 255, 0.1);
  z - index: -1;
}
.window__body.sidebar[data - display= cards] .card.active: after {
  bottom: 0px;
  width: 100 %;
  height: 100 %;
  background: #006AFF;
}
.window__body.sidebar[data - display= cards] .card.active span: after {
  opacity: 1;
}
.window__body.sidebar[data - display= cards] .card.active span: before {
  opacity: 0.75;
}
.window__body.sidebar[data - display= cards] .card.active.data: before {
  color: rgba(255, 255, 255, 0.75);
}
.window__body.sidebar[data - display= cards] .card.active.data: after {
  opacity: 0;
}
.window__body.sidebar[data - display= cards] .card.data {
  position: absolute;
  top: 10px;
  right: 20px;
  width: 40px;
  height: 50px;
  text - align: center;
  pointer - events: none;
}
.window__body.sidebar[data - display= cards] .card.data: before {
  content: attr(data - date);
  position: absolute;
  top: 0;
  right: 0;
  width: 70px;
  height: 15px;
  line - height: 15px;
  text - align: right;
  color: rgba(255, 255, 255, 0.5);
}
.window__body.sidebar[data - display= cards] .card.data[data - bubbles]: after {
  content: attr(data - bubbles);
  display: inline - block;
  margin: 25px auto 5px auto;
  width: auto;
  min - width: 20px;
  height: 20px;
  padding: 0 6px;
  line - height: 21px;
  border - radius: 20px;
  color: #FFF;
  background: #006AFF;
  font - size: 12px;
  text - align: center;
  font - weight: 600;
}
.window__body.sidebar[data - display= cards] .card span {
  position: relative;
  width: calc(100 % - 145px);
  height: 50px;
  margin: 10px 70px 0 0;
  float: right;
  pointer - events: none;
}
.window__body.sidebar[data - display= cards] .card span: before {
  content: attr(data - title);
  position: absolute;
  top: 0;
  left: 0;
  width: 100 %;
  height: 15px;
  white - space: nowrap;
  overflow: hidden;
  text - overflow: ellipsis;
  letter - spacing: 1px;
  word -break: break-word;
  opacity: 0.5;
}
.window__body.sidebar[data - display= cards] .card span: after {
  content: attr(data - subtitle);
  position: absolute;
  top: 20px;
  left: 0;
  width: 100 %;
  height: 30px;
  white - space: pre - wrap;
  overflow: hidden;
  text - overflow: ellipsis;
  line - height: 14px;
  word -break: break-word;
}
.window__body.calendar {
  position: absolute;
  margin: 0;
  width: 100 %;
  height: 100 %;
}
.window__body.calendar.ui - datepicker,
.window__body.calendar.ui - datepicker table,
.window__body.calendar.ui - datepicker tr,
.window__body.calendar.ui - datepicker td,
.window__body.calendar.ui - datepicker th {
  margin: 0;
  padding: 0;
  border: none;
  border - spacing: 0;
  color: rgba(255, 255, 255, 0.45);
}
.window__body.calendar.ui - datepicker {
  display: none;
  width: 100 %;
  height: 100 %;
  padding: 0;
  cursor: default ;
  font - size: inherit;
  font - family: inherit!important;
  background: none;
}
.window__body.calendar.ui - datepicker - header {
  position: relative;
  background: none;
  border: none;
  padding: none!important;
  height: 70px;
  line - height: 70px;
}
.window__body.calendar.ui - datepicker - header.ui - datepicker - prev,
.window__body.calendar.ui - datepicker - header.ui - datepicker - next {
  position: absolute;
  top: calc(50 % - 13px);
  right: 26px;
  width: 26px;
  height: 26px;
  border: none;
  color: rgba(255, 255, 255, 0.75);
  background: rgba(255, 255, 255, 0.15);
  padding: 0 10px;
  box - shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.075), 0 0 0 1px rgba(0, 0, 0, 0.2);
  border - radius: 5px;
  text - align: center;
  line - height: 26px;
  font - family: "Ionicons";
  transition: all 0.05s linear;
}
.window__body.calendar.ui - datepicker - header.ui - datepicker - prev: active,
.window__body.calendar.ui - datepicker - header.ui - datepicker - next: active {
  background: rgba(255, 255, 255, 0.1);
  font - weight: inherit;
}
.window__body.calendar.ui - datepicker - header.ui - datepicker - prev span,
.window__body.calendar.ui - datepicker - header.ui - datepicker - next span {
  display: none;
}
.window__body.calendar.ui - datepicker - header.ui - datepicker - prev {
  left: calc(100 % - 3 * (26px) - 10px);
}
.window__body.calendar.ui - datepicker - header.ui - datepicker - prev: before {
  content: "";
}
.window__body.calendar.ui - datepicker - header.ui - datepicker - next: before {
  content: "";
}
.window__body.calendar.ui - datepicker - title {
  text - align: left;
  margin: 0!important;
  pointer - events: none;
  font - weight: 600;
  font - size: 200 %;
}
.window__body.calendar.ui - datepicker - month {
  position: relative;
  top: 0;
  left: 0;
  display: inline - block;
  height: 50px;
  line - height: 50px;
  text - align: center;
  letter - spacing: 1px;
  margin - left: 20px;
  color: rgba(255, 255, 255, 0.9);
}
.window__body.calendar.ui - datepicker - year {
  position: relative;
  top: 0px;
  display: inline - block;
  height: 50px;
  line - height: 50px;
  padding - left: 5px;
  text - align: center;
  color: rgba(255, 255, 255, 0.45);
}
.window__body.calendar.ui - datepicker - calendar th {
  height: 30px;
  line - height: 30px;
  font - weight: 400;
  text - align: center;
}
.window__body.calendar.ui - datepicker - calendar td {
  padding: 6px 6px 36px 0;
  text - align: right;
  color: white;
  box - shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 1px 0 0 rgba(255, 255, 255, 0.1);
}
.window__body.calendar.ui - datepicker - calendar td: first - child {
  box - shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
.window__body.calendar.ui - datepicker - calendar td.ui - datepicker - week - end {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.5);
}
.window__body.calendar.ui - datepicker - calendar td.ui - datepicker - other - month, .window__body.calendar.ui - datepicker - calendar td.ui - datepicker - unselectable, .window__body.calendar.ui - datepicker - calendar td.ui - state - disabled {
  color: rgba(255, 255, 255, 0.25);
  opacity: 1;
}
.window__body.calendar.ui - datepicker - calendar.ui - state -default {
  display: inline - block;
  width: 26px;
  height: 26px;
  text - align: center;
  line - height: 22px;
  outline: none;
  text - decoration: none;
  border: none;
  font - weight: 400;
  background: none;
  color: inherit;
  border - radius: 100 %;
}
.window__body.calendar.ui - datepicker - calendar.ui - state - highlight {
  font - weight: 700;
  color: white;
  background: #006AFF;
  font - weight: inherit;
}
.window__body.tabs {
  position: absolute;
  top: 12px;
  left: 6px;
  height: 28px;
  max - width: calc(100 % - 72px);
  z - index: 10;
}
.window__body.tabs.tab {
  position: relative;
  display: flex;
  height: 28px;
  line - height: 28px;
  padding: 0 12px 0 30px;
  font - size: 14px;
}
.window__body.tabs.tab: hover.close {
  opacity: 0.75;
}
.window__body.tabs.tab.icon {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 14px;
  height: 14px;
  background - position: center center!important;
  background - size: cover!important;
}
.window__body.tabs.tab.close {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 14px;
  height: 14px;
  line - height: 14px;
  font - size: 16px;
  text - align: center;
  opacity: 0;
  transition: all 0.1s cubic - bezier(0.44, 0.14, 0.34, 0.97);
}
.window__body.tabs.tab.close: before {
  content: "";
}
.window__body.tabs.tab.current {
  background: #fff;
  border - radius: 5px 5px 0 0;
  box - shadow: 0 - 2px 2px rgba(0, 0, 0, 0.05);
}

.window__main {
  flex: 0 1 auto;
  padding: 10px;
  width: 100 %;
}
.window__main.hasSideBar {
  position: absolute;
  left: 160px;
  top: 0;
  width: calc(100 % - 160px);
  height: 100 %;
  overflow: auto;
}
.window__main.hasSideBarCards {
  position: absolute;
  left: 300px;
  top: 0;
  width: calc(100 % - 300px);
  height: 100 %;
  overflow: auto;
  background: #1e1e1f;
}
.window__main.list {
  display: block;
  left: 0;
  right: 0;
  padding: 20px;
}
.window__main.list table {
  border - collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100 %;
}
.window__main.list table tr {
  position: relative;
  border - bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.window__main.list table tr: first - child td {
  padding - top: 0px;
}
.window__main.list table tr: first - child td: first - child {
  padding - top: 6px;
}
.window__main.list table tr: last - child {
  border - bottom: none;
}
.window__main.list table tr td {
  vertical - align: top;
  padding: 15px 0;
}
.window__main.list table tr td: first - child {
  display: inline - block;
  float: right;
  text - align: right;
  padding - right: 15px;
  padding - left: 0;
  min - width: 0;
  min - width: 150px!important;
  max - width: 250px!important;
  vertical - align: top;
  padding - top: 20px;
}
.window__main.list.item {
  position: relative;
  display: block;
  height: 30px;
  line - height: 30px;
}
.window__main.list.item.title {
  font - weight: 600;
}
.window__main.list.item.description {
  display: block;
  line - height: 16px;
  margin - left: 24px;
  margin - bottom: 10px;
  pointer - events: none;
  opacity: 0.25;
}
.window__main.list.item.canCheck {
  display: table;
}
.window__main.list.item.canCheck input[type = checkbox] {
  margin - right: 10px;
}
.window__main.list.item.canCheck input[type = checkbox].disabled {
  opacity: 0.25;
  pointer - events: none;
}

@keyframes toFullWidth {
  0 % {
    width: 0 %;
  }
  100 % {
    width: 100 %;
  }
}
.window__body.black, .window__body.black.window__main {
  background: #000;
}

.window--messages.window__handler.chatNav {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100 % - 300px);
  height: 100 %;
  border - radius: 0 10px 0 0;
  background: #1e1e1f;
  box - shadow: inset 1px 0 0 0 rgba(0, 0, 0, 0.25);
}
.window--messages.window__handler.chatNav.user {
  position: absolute;
  top: 10px;
  left: 20px;
  width: 40px;
  height: 40px;
  border - radius: 100 %;
  background - color: rgba(255, 255, 255, 0.1);
  background - size: cover;
  background - position: center center;
  background - repeat: no - repeat;
}
.window--messages.window__handler.chatNav.user: before {
  content: attr(data - name);
  position: absolute;
  top: 5px;
  left: 50px;
  width: auto;
  height: 15px;
  line - height: 15px;
  font - size: 14px;
  font - weight: 600;
  transition: all 0.1s ease;
}
.window--messages.window__handler.chatNav.user: after {
  content: attr(data - state);
  position: absolute;
  top: 20px;
  left: 50px;
  width: auto;
  height: 15px;
  line - height: 15px;
  font - size: 14px;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.1s ease;
}
.window--messages.window__handler.chatNav.user[data - state= offline]: before {
  height: 30px;
  line - height: 30px;
}
.window--messages.window__handler.chatNav.user[data - state= offline]: after {
  opacity: 0;
}
.window--messages.window__body {
  height: calc(100 % - 60px);
}
.window--messages.window__body.sidebar[data - display= cards] {
  height: 100 %;
}
.window--messages.window__body.sidebar[data - display= cards]: before {
  content: "";
  position: absolute;
  top: -60px;
  left: 0;
  width: 300px;
  height: 60px;
}
.window--messages.window__body.window__main.messages {
  position: relative;
  padding: 20px 20px 50px 20px;
  display: flex;
  flex - direction: column;
  user - select: text;
  box - shadow: inset 1px 0 0 0 rgba(0, 0, 0, 0.25);
}
.window--messages.window__body.window__main.messages:: -webkit - scrollbar {
  min - width: 0;
  width: 0;
  max - width: 0;
  min - height: 0;
  height: 0;
  max - height: 0;
  background - color: none;
}
.window--messages.window__body.window__main.messages.message {
  position: relative;
  display: block;
  margin: 0 0 10px 0;
  font - size: 14px;
}
.window--messages.window__body.window__main.messages.message span {
  display: inline - block;
  background: rgba(255, 255, 255, 0.1);
  padding: 5px 10px;
  border - radius: 20px;
  float: left;
  max - width: 300px;
  word -break: break-word;
}
.window--messages.window__body.window__main.messages.message.mine span {
  background: #006AFF;
  float: right;
}
.window--messages.window__body.window__main.messages.message.audio span {
  position: relative;
  width: 100 %;
  height: 50px;
  overflow: hidden;
}
.window--messages.window__body.window__main.messages.message.audio span: after {
  content: attr(data - duration);
  position: absolute;
  top: 5px;
  right: 20px;
  width: 50px;
  height: 40px;
  line - height: 40px;
  font - size: 14px;
  font - weight: 600;
  text - align: right;
}
.window--messages.window__body.window__main.messages.message.audio span.controls {
  position: relative;
  display: inline - block;
  margin: 0;
  width: calc(100 % - 65px);
  height: 40px;
  line - height: 40px;
}
.window--messages.window__body.window__main.messages.message.audio span.controls.play {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
}
.window--messages.window__body.window__main.messages.message.audio span.controls.play: before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100 %;
  height: 100 %;
  line - height: 40px;
  font - size: 26px;
  text - align: center;
}
.window--messages.window__body.window__main.messages.message.audio span.controls.timeNav {
  position: relative;
  margin: 0;
  width: calc(100 % - 40px);
  height: 40px;
  line - height: 40px;
  float: right;
}
.window--messages.window__body.window__main.messages.message.audio span.controls.timeNav: before {
  content: "";
  position: absolute;
  top: calc(50 % - 2px);
  left: 0;
  width: 100 %;
  height: 4px;
  border - radius: 10px;
  background: rgba(255, 255, 255, 0.2);
}
.window--messages.window__body.window__main.messages.message.audio span.controls.timeNav.handler {
  position: absolute;
  top: calc(50 % - 2px);
  left: 6px;
  width: 0;
  max - width: calc(100 % - 12px);
  height: 4px;
  border - radius: 10px;
  background: #FFF;
  box - shadow: -6px 0 0 0 #FFF;
  animation: toFullWidth linear;
  animation - duration: 3s;
}
.window--messages.window__body.window__main.messages.message.audio span.controls.timeNav.handler: before {
  content: "";
  position: absolute;
  top: -4px;
  right: -6px;
  width: 12px;
  height: 12px;
  border - radius: 100 %;
  background: #FFF;
}
.window--messages.window__body.window__main.messages img.message {
  border - radius: 20px;
  max - width: 280px;
}
.window--messages.window__body.chatbox {
  position: absolute;
  bottom: 0;
  right: 0;
  width: calc(100 % - 300px);
  height: 50px;
  z - index: 1;
  -webkit - backdrop - filter: blur(30px) saturate(1.5);
  backdrop - filter: blur(30px) saturate(1.5);
  background: rgba(30, 30, 31, 0.75);
  box - shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.15), inset 1px 0 0 0 rgba(0, 0, 0, 0.25);
}
.window--messages.window__body.chatbox input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100 %;
  height: 30px;
  background: rgba(255, 255, 255, 0.05);
  box - shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  line - height: 30px;
  padding: 0 45px 0 15px;
  border - radius: 20px;
  font - size: 14px;
  color: #FFF;
}
.window--messages.window__body.chatbox.emoji {
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border - radius: 0 20px 20px 0;
}
.window--messages.window__body.chatbox.emoji: before {
  content: "😀";
  position: absolute;
  top: 0;
  left: 0;
  width: 100 %;
  height: 100 %;
  line - height: 30px;
  text - align: center;
  font - size: 18px;
  filter: saturate(0);
  opacity: 0.5;
  transition: all 0.1s ease;
}
.window--messages.window__body.chatbox.emoji: hover: before {
  filter: saturate(1);
  opacity: 1;
}
.window--messages.window__body.chatbox.audioMargin {
  position: absolute;
  top: 10px;
  left: 20px;
  width: calc(100 % - 70px);
  height: 30px;
  transition: all 0.1s ease;
}
.window--messages.window__body.chatbox.audioMargin.recording {
  width: calc(100 % - 170px);
}
.window--messages.window__body.chatbox.audio {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  font - size: 14px;
  transition: all 0.1s ease;
}
.window--messages.window__body.chatbox.audio.trigger {
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  color: rgba(255, 255, 255, 0.5);
  border - radius: 100 %;
  background: rgba(255, 255, 255, 0.05);
  box - shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: all 0.1s ease;
}
.window--messages.window__body.chatbox.audio.trigger: before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  line - height: 30px;
  text - align: center;
  pointer - events: none;
}
.window--messages.window__body.chatbox.audio.cancel {
  position: absolute;
  top: 0;
  left: -100px;
  width: 30px;
  height: 30px;
  line - height: 30px;
  text - align: center;
  background: rgba(255, 255, 255, 0.05);
  box - shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  border - radius: 100 %;
  opacity: 0;
  pointer - events: none;
  transition: all 0.1s ease;
}
.window--messages.window__body.chatbox.audio.cancel: before, .window--messages.window__body.chatbox.audio.cancel: after {
  content: "";
  position: absolute;
  top: calc(50 % - 7px);
  left: calc(50 % - 1px);
  width: 2px;
  height: 14px;
  background: white;
  transform - origin: center center;
  transform: rotateZ(45deg);
}
.window--messages.window__body.chatbox.audio.cancel: after {
  transform: rotateZ(-45deg);
}
.window--messages.window__body.chatbox.audio.audioDuration {
  position: absolute;
  top: 0;
  left: -65px;
  width: 60px;
  height: 30px;
  line - height: 30px;
  text - align: center;
  font - size: 14px;
  letter - spacing: 1px;
  color: white;
  pointer - events: none;
  opacity: 0;
  transition: all 0.1s ease;
}
.window--messages.window__body.chatbox.audio.recording.trigger {
  color: white;
  background: #E50000;
}
.window--messages.window__body.chatbox.audio.recording.trigger: before {
  content: "";
}
.window--messages.window__body.chatbox.audio.recording.cancel {
  opacity: 1;
  pointer - events: all;
}
.window--messages.window__body.chatbox.audio.recording.audioDuration {
  opacity: 1;
}
.window--messages.window__body.chatbox.audio.recorded.trigger {
  color: rga(255, 255, 255, 0.1);
  background: #006AFF;
}
.window--messages.window__body.chatbox.audio.recorded.trigger: before {
  content: "";
  position: absolute;
  top: calc(50 % - 9px);
  left: calc(50 % - 3px);
  width: 7px;
  height: 13px;
  border: 2px solid #FFF;
  border - top: none;
  border - left: none;
  transform - origin: center center;
  transform: rotateZ(45deg);
}
.window--messages.window__body.chatbox.audio.recorded.cancel {
  opacity: 1;
  pointer - events: all;
}
.window--messages.window__body.chatbox.audio.recorded.audioDuration {
  opacity: 1;
}
.window--messages.window__body.chatbox.audio.minLen.trigger {
  pointer - events: none!important;
  opacity: 0.5;
}
.window--messages.window__handler {
  height: 60px;
}
.window--messages.window__handler: after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 1px;
  width: calc(100 % - 1px);
  height: 1px;
  background: rgba(255, 255, 255, 0.05);
}
.window--messages.window__handler.search {
  position: absolute;
  bottom: 10px;
  left: 20px;
  width: 225px;
  height: 22px;
  padding: 0 10px;
  line - height: 22px;
  font - size: 14px;
  border - radius: 5px;
  background: rgba(255, 255, 255, 0.05);
  box - shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  color: #FFF;
}
.window--messages.window__handler.search:: placeholder {
  color: rgba(255, 255, 255, 0.25);
  font - weight: 400;
}
.window--messages.window__handler.new {
  position: absolute;
  bottom: 10px;
  left: 250px;
  width: 30px;
  height: 22px;
  line - height: 22px;
  border - radius: 5px;
  background: rgba(255, 255, 255, 0.15);
  color: #FFF;
}
.window--messages.window__handler.new: active {
  background: rgba(255, 255, 255, 0.25);
}
.window--messages.window__handler.new: before {
  content: "";
  position: absolute;
  top: calc(50 % - 1px);
  left: calc(50 % - 6px);
  width: 12px;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  pointer - events: none;
}
.window--messages.window__handler.new: after {
  content: "";
  position: absolute;
  top: calc(50 % + 1px);
  left: calc(50 % - 1px);
  width: 2px;
  height: 5px;
  background: rgba(255, 255, 255, 0.5);
  box - shadow: 0 - 7px 0 0 rgba(255, 255, 255, 0.5);
  pointer - events: none;
}

.filesys {
  font - size: 14px;
  font - weight: 400;
  overflow: auto;
  padding: 20px;
  background: none!important;
}
.filesys.sep {
  position: relative;
  display: block;
  height: 20px;
  line - height: 20px;
  color: rgba(255, 255, 255, 0.25);
  text - transform: uppercase;
  margin: 20px 0 0 10px;
  font - weight: 600;
}
.filesys.sep: first - child {
  margin - top: 20px;
}
.filesys[data - visualization= icons] {
  /*.folder[data-tag="blue"]:before { background: $tag-blue !important; }
  .folder[data-tag="red"]:before { background: $tag-red !important; }
  .folder[data-tag="green"]:before { background: $tag-green !important; }
  .folder[data-tag="yellow"]:before { background: $tag-yellow !important; }
  .folder[data-tag="orange"]:before { background: $tag-orange !important; }
  .folder[data-tag="purple"]:before { background: $tag-purple !important; }*/
}
.filesys[data - visualization= icons] .empty {
  position: absolute;
  top: 0;
  left: 0;
  width: 100 %;
  height: 100 %;
  opacity: 0.25;
}
.filesys[data - visualization= icons] .empty: before {
  content: "The folder is empty";
  position: absolute;
  top: calc(50 % + 20px);
  left: calc(50 % - 100px);
  width: 200px;
  height: 30px;
  line - height: 30px;
  text - align: center;
  font - weight: 600;
}
.filesys[data - visualization= icons] .empty: after {
  content: "";
  position: absolute;
  top: calc(50 % - 60px);
  left: calc(50 % - 40px);
  width: 80px;
  height: 80px;
  background - image: url("");
  background - position: center center;
  background - size: cover;
  background - repeat: no - repeat;
  opacity: 0.75;
}
.filesys[data - visualization= icons] .file, .filesys[data - visualization= icons] .folder {
  position: relative;
  display: inline - block;
  width: 130px;
  height: 130px;
  text - align: left;
  margin: 0;
  color: white;
  font - size: 14px;
  overflow: hidden;
  vertical - align: top;
  transition: all 0.1s;
}
.filesys[data - visualization= icons] .file.selected: before, .filesys[data - visualization= icons] .folder.selected: before {
  background: rgba(255, 255, 255, 0.15);
}
.filesys[data - visualization= icons] .file.content, .filesys[data - visualization= icons] .folder.content {
  position: absolute;
  top: 5px;
  left: calc(17 % + 10px);
  width: calc(66 % - 20px);
  height: calc(66 % - 10px);
  overflow: hidden;
  background - size: contain!important;
  background - repeat: no - repeat;
  background - position: center center;
  pointer - events: none;
}
.filesys[data - visualization= icons] .file: before, .filesys[data - visualization= icons] .folder: before {
  content: "";
  position: absolute;
  top: 0;
  left: 17 %;
  width: 66 %;
  height: 66 %;
  border - radius: 5px;
}
.filesys[data - visualization= icons] .file: after, .filesys[data - visualization= icons] .folder: after {
  content: attr(data - name);
  position: absolute;
  bottom: 5 %;
  left: 5 %;
  width: 90 %;
  height: 24 %;
  text - align: center;
  text - overflow: ellipsis;
  white - space: pre - wrap;
  overflow: hidden;
}
.filesys[data - visualization= icons] .file[data - type= f] .content, .filesys[data - visualization= icons] .folder[data - type= f] .content {
  background - image: url("https://raw.githubusercontent.com/aboredvaro/codepen_resources/main/macOS/img/system/icons/files/folder.png");
}
.filesys[data - visualization= icons] .file[data - type= text] .content {
  background - image: url(https://bit.ly/33YyJD2);
}
.filesys[data - visualization= icons] .file[data - type= xlsx] .content {
  background - image: url(https://bit.ly/2JX15qR);
}
.filesys[data - visualization= icons] .file[data - type= img] .content {
  top: 5px;
  left: calc(17 % + 5px);
  width: calc(66 % - 10px);
  height: calc(66 % - 10px);
}

.lockScreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z - index: 999999;
  pointer - events: none;
  opacity: 0;
  background: url("https://raw.githubusercontent.com/aboredvaro/codepen_resources/main/macOS/img/bg/abstract/macOS-Big-Sur-Vector-Wave-Wallpaper.jpg");
  background - size: 0px 0px;
  transition: opacity 0.1s linear;
}
.lockScreen: before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: inherit;
  background - position: center center;
  background - size: cover;
  filter: brightness(0.75) saturate(1.1);
}
.lockScreen.locked {
  pointer - events: auto;
  opacity: 1;
}
.lockScreen.user {
  position: absolute;
  bottom: calc(50 % + 24px);
  left: calc(50 % - 100px);
  width: 200px;
  height: 100px;
  background - size: 0px 0px;
}
.lockScreen.user: before {
  content: "";
  position: absolute;
  bottom: 60px;
  left: calc(50 % - 60px);
  width: 120px;
  height: 120px;
  background: url("https://avatars.githubusercontent.com/u/91379432?v=4");
  background - size: cover;
  background - position: center center;
  background - repeat: no - repeat;
  border - radius: 100 %;
}
.lockScreen.user: after {
  content: attr(data - user);
  position: absolute;
  bottom: 10px;
  left: -50 %;
  width: 200 %;
  height: 40px;
  color: white;
  text - shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  text - align: center;
  line - height: 40px;
  font - size: 20px;
}
.lockScreen input {
  position: absolute;
  top: calc(50 % - 17px);
  left: calc(50 % - 100px);
  width: 200px;
  height: 34px;
  background: rgba(255, 255, 255, 0.15);
  -webkit - backdrop - filter: blur(30px);
  backdrop - filter: blur(30px);
  padding: 0 15px;
  font - weight: 600;
  border - radius: 10px;
  border: none;
  color: rgba(255, 255, 255, 0.35);
  letter - spacing: 3px;
  transition: all 0.1s ease;
}
.lockScreen input:: selection {
  background: rgba(255, 255, 255, 0.35)!important;
  color: rgba(255, 255, 255, 0.5);
}
.lockScreen input:: placeholder {
  color: inherit;
  font - weight: 400;
  letter - spacing: 1px;
}
.lockScreen.login {
  position: absolute;
  top: calc(50 % - 15px);
  left: calc(50 % + 105px);
  width: 30px;
  height: 30px;
  text - align: center;
  line - height: 32px;
  font - size: 26px;
  background: rgba(255, 255, 255, 0.4);
  -webkit - backdrop - filter: blur(30px);
  backdrop - filter: blur(30px);
  color: rgba(0, 0, 0, 0.5);
  border - radius: 100 %;
  transition: all 0.1s ease;
}
.lockScreen.login: before {
  content: "";
}
.lockScreen.login.empty {
  opacity: 0;
}
.lockScreen.lockScreenLogIn {
  position: absolute;
  top: 0;
  left: 0;
  width: 100 %;
  height: 100 %;
}
.lockScreen.lockScreenLogIn.wait {
  pointer - events: none!important;
}
.lockScreen.lockScreenLogIn.wait input {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.2);
}
.lockScreen.lockScreenLogIn.wait.login {
  background: rgba(255, 255, 255, 0.3);
  color: rgba(0, 0, 0, 0.4);
}
.lockScreen.lockScreenLogIn.wrong {
  animation: shake 0.15s 2 linear;
}
.lockScreen.lockScreenLogIn.wrong: before {
  content: "Wrong password";
  position: absolute;
  top: calc(50 % + 20px);
  left: calc(50 % - 100px);
  width: 200px;
  height: 34px;
  line - height: 34px;
  color: rgba(255, 255, 255, 0.8);
  text - align: center;
}

@keyframes shake {
  0 % {
    transform: translate(10px, 0px);
  }
  50 % {
    transform: translate(-10px, 0px);
  }
  100 % {
    transform: translate(0px, 0px);
  }
}
@keyframes shake2 {
  0 % {
    transform: translate(6px, 0px);
  }
  50 % {
    transform: translate(-6px, 0px);
  }
  100 % {
    transform: translate(0px, 0px);
  }
}
.appMenu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  white - space: nowrap;
  z - index: 99998;
  pointer - events: none;
  opacity: 0;
  background: url("https://raw.githubusercontent.com/aboredvaro/codepen_resources/main/macOS/img/bg/abstract/macOS-Big-Sur-Vector-Wave-Wallpaper-blur.jpg");
  background - size: 0px 0px;
  transform: scale(1.025);
  transform - origin: center center;
  transition: all 0.15s ease -in -out, height 0s;
}
.appMenu: before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: inherit;
  background - position: center center;
  background - size: cover;
  filter: brightness(0.75) saturate(1.1);
}
.appMenu:: -webkit - scrollbar {
  min - width: 5px;
  width: 5px;
  max - width: 5px;
  min - height: 0;
  height: 0;
  max - height: 0;
  background: none;
}
.appMenu:: -webkit - scrollbar - thumb {
  background: rgba(0, 0, 0, 0.4);
  cursor: default ;
  backface - visibility: hidden;
}
.appMenu:: -webkit - scrollbar - thumb: hover, .appMenu :: -webkit - scrollbar - thumb: active {
  background: rgba(0, 0, 0, 0.6);
}
.appMenu:: -webkit - scrollbar - button {
  display: none;
  height: 0px;
}
.appMenu.open {
  pointer - events: auto;
  transform: scale(1);
  opacity: 1;
}
.appMenu.closeAppsMenu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100 %;
  height: 100 %;
}
.appMenu.searchApp {
  position: absolute;
  top: 30px;
  left: calc(50 % - 150px);
  width: 300px;
  height: 30px;
  z - index: 1;
  border - radius: 10px;
  overflow: hidden;
  line - height: 30px;
  background: rgba(255, 255, 255, 0.1);
  box - shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
}
.appMenu.searchApp i {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 100 %;
  color: rgba(255, 255, 255, 0.8);
  font - style: normal;
  text - align: center;
  font - size: 18px;
}
.appMenu.searchApp i: before {
  content: "";
}
.appMenu.searchApp input {
  position: absolute;
  left: 40px;
  width: calc(100 % - 40px);
  height: 100 %;
  border: none;
  background: none;
  padding: 0 12px 0 0;
  color: rgba(255, 255, 255, 0.8);
}
.appMenu.searchApp input:: placeholder {
  color: rgba(255, 255, 255, 0.5);
}
.appMenu.searchApp input:: selection {
  background: rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.9);
}
.appMenu.page {
  position: absolute;
  white - space: normal;
  top: 90px;
  left: 50 %;
  transform: translateX(-50 %);
  width: calc(7 * 12 %);
  max - width: 1700px;
  height: calc(100 % - 180px);
  overflow: auto;
  display: flex;
  -webkit - flex - flow: row wrap;
  justify - content: flex - start;
}
.appMenu.page.sep {
  position: relative;
  margin: 0 auto;
}
.appMenu.page.sep: before {
  content: attr(data - text);
  position: relative;
  display: block;
  height: 30px;
  line - height: 30px;
  font - size: 20px;
  padding: 20px 0 0 0;
  color: rgba(255, 255, 255, 0.5);
}
.appMenu.page.app {
  position: relative;
  width: calc((100 % /7)*(2/3));
  margin: 0 calc(((100 % /7)*(1/3)) / 2);
  margin - bottom: 40px;
  height: 125px;
}
.appMenu.page.app.icon {
  position: relative;
  top: 0;
  left: 0;
  width: 100 %;
  height: 100 %;
  background - position: center center!important;
  background - size: contain!important;
  background - repeat: no - repeat!important;
}
.appMenu.page.app.icon: active {
  filter: brightness(0.5);
}
.appMenu.page.app.name {
  position: absolute;
  bottom: -15px;
  left: -10 %;
  width: 120 %;
  height: 20px;
  line - height: 20px;
  color: #FFF;
  text - shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
  white - space: nowrap;
  overflow: hidden;
  text - overflow: ellipsis;
  text - align: center;
  font - size: 14px;
  padding: 0 10px;
  pointer - events: none;
}
.appMenu.page.app.noMatch {
  width: 0;
  opacity: 0;
  margin: 0 0!important;
}

.taskbar {
  position: absolute;
  left: 50 %;
  bottom: -1px;
  height: 46px;
  width: auto;
  -webkit - transform: translateX(-50 %);
  -moz - transform: translateX(-50 %);
  -ms - transform: translateX(-50 %);
  -o - transform: translateX(-50 %);
  transform: translateX(-50 %);
  border - radius: 5px 5px 0 0;
  padding: 0 10px;
  z - index: 99999;
  display: flex;
  -webkit - backdrop - filter: blur(30px) saturate(1.5) brightness(0.8);
  backdrop - filter: blur(30px) saturate(1.5) brightness(0.8);
  background: rgba(50, 50, 50, 0.5);
  box - shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.35);
  transition: 0.2s cubic - bezier(0.44, 0.14, 0.34, 0.97);
}
.taskbar.animateOnOpen.taskbarApp.open i {
  animation: 0.8s bounce ease - out;
}
.taskbar.taskbarApp {
  position: relative;
  display: inline - flex;
  width: 40px;
  height: 40px;
  margin: 0;
}
.taskbar.taskbarApp: active i {
  filter: brightness(0.65);
}
.taskbar.taskbarApp i {
  position: absolute;
  bottom: 2px;
  left: 0;
  width: 100 %;
  height: calc(100 % - 8px);
  background - size: contain!important;
  background - position: center center!important;
  background - repeat: no - repeat!important;
}
.taskbar.taskbarApp.open: after {
  content: "";
  position: absolute;
  left: calc(50 % - 2px);
  bottom: -4px;
  width: 4px;
  height: 4px;
  border - radius: 100 %;
  background: rgba(255, 255, 255, 0.85);
}
.taskbar.sep {
  position: relative;
  display: inline - flex;
  width: 1px;
  height: 30px;
  margin: 10px 5px 10px 10px;
  background: rgba(255, 255, 255, 0.15);
  border - radius: 15px;
}
.taskbar.hide {
  display: none;
  pointer - events: none;
  opacity: 0;
}

.actionbar {
  position: absolute;
  left: 0;
  top: 0;
  height: 22px;
  width: 100vw;
  z - index: 10000;
  display: flex;
  line - height: 22px;
  font - size: 14px;
  -webkit - backdrop - filter: blur(30px) saturate(2) brightness(0.5);
  backdrop - filter: blur(30px) saturate(2) brightness(0.5);
  background: rgba(50, 50, 50, 0.5);
  box - shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.05), 0 1px 0 0 rgba(0, 0, 0, 0.5);
}
.actionbar.rightActions {
  right: 0;
}
.actionbar.leftActions {
  left: 0;
}
.actionbar.rightActions, .actionbar.leftActions {
  position: absolute;
  display: flex;
  width: auto;
  height: 100 %;
}
.actionbar.rightActions.item, .actionbar.leftActions.item {
  position: relative;
  display: inline - flex;
  width: auto;
  height: 100 %;
  margin: 0;
  padding: 0 12px;
  color: white;
  letter - spacing: 0.5px;
}
.actionbar.rightActions.item: not(.sActionbarNotifications).active, .actionbar.leftActions.item: not(.sActionbarNotifications).active {
  background: #006AFF;
}
.actionbar.rightActions.item.sActionbarNotifications: active, .actionbar.leftActions.item.sActionbarNotifications: active {
  background: #006AFF;
}
.actionbar.rightActions.item.bold, .actionbar.leftActions.item.bold {
  font - weight: 600;
}
.actionbar.rightActions.item[data - trigger= sPanelLogOptions], .actionbar.leftActions.item[data - trigger= sPanelLogOptions] {
  margin - left: 10px;
}
.actionbar.rightActions.item[data - trigger= sPanelLogOptions]: before, .actionbar.leftActions.item[data - trigger= sPanelLogOptions]: before {
  content: "";
  font - size: 20px;
  line - height: 24px;
}
.actionbar.rightActions.item[data - trigger= sPanelLogOptions]: after, .actionbar.leftActions.item[data - trigger= sPanelLogOptions]: after {
  content: "";
  position: absolute;
  left: -10px;
  top: 0;
  width: 10px;
  height: 100 %;
}
.actionbar.rightActions.item[data - trigger= sPanelNotifications], .actionbar.leftActions.item[data - trigger= sPanelNotifications] {
  padding - right: 20px;
}
.actionbar.rightActions.item[data - trigger= sPanelNotifications]: before, .actionbar.leftActions.item[data - trigger= sPanelNotifications]: before {
  content: "";
}
.actionbar.rightActions.item[data - trigger= sPanelNotifications].hasNotifications: after, .actionbar.leftActions.item[data - trigger= sPanelNotifications].hasNotifications: after {
  content: "";
  position: absolute;
  bottom: 50 %;
  right: 16px;
  width: 8px;
  height: 8px;
  border - radius: 100 %;
  background: #E53939;
}
.actionbar.rightActions.item[data - trigger= sPanelBluetooth]: before, .actionbar.leftActions.item[data - trigger= sPanelBluetooth]: before {
  content: "";
  font - size: 16px;
  line - height: 24px;
}
.actionbar.rightActions.item[data - trigger= sPanelBluetooth]: after, .actionbar.leftActions.item[data - trigger= sPanelBluetooth]: after {
  content: "";
  position: absolute;
  top: 50 %;
  left: 50 %;
  width: 3px;
  height: 3px;
  border - radius: 100 %;
  transform: translateY(-50 %) translateX(-50 %);
  background: #FFF;
  opacity: 0;
  box - shadow: 0 0 0 1px rgba(0, 0, 0, 0.35), 5px 0 0 0 white, 5px 0 0 1px rgba(0, 0, 0, 0.25), -5px 0 0 0 white, -5px 0 0 1px rgba(0, 0, 0, 0.25);
}
.actionbar.rightActions.item[data - trigger= sPanelBluetooth][data - connected=true]: before, .actionbar.leftActions.item[data - trigger= sPanelBluetooth][data - connected=true]: before {
  opacity: 0.75;
}
.actionbar.rightActions.item[data - trigger= sPanelBluetooth][data - connected=true]: after, .actionbar.leftActions.item[data - trigger= sPanelBluetooth][data - connected=true]: after {
  opacity: 1;
}
.actionbar.rightActions.item[data - trigger= sPanelPower], .actionbar.leftActions.item[data - trigger= sPanelPower] {
  padding - right: 36px;
}
.actionbar.rightActions.item[data - trigger= sPanelPower][sPowerShowPercentage = true], .actionbar.leftActions.item[data - trigger= sPanelPower][sPowerShowPercentage = true] {
  padding - right: 46px;
}
.actionbar.rightActions.item[data - trigger= sPanelPower][sPowerShowPercentage = true]: before, .actionbar.leftActions.item[data - trigger= sPanelPower][sPowerShowPercentage = true]: before {
  content: attr(data - percentage) "%";
}
.actionbar.rightActions.item[data - trigger= sPanelPower]i, .actionbar.leftActions.item[data - trigger= sPanelPower]i {
  position: absolute;
  top: calc(50 % - 6px);
  right: 12px;
  width: 26px;
  height: 12px;
  border - radius: 3px;
  box - shadow: inset 0 0 0 1px white;
}
.actionbar.rightActions.item[data - trigger= sPanelPower]i: after, .actionbar.leftActions.item[data - trigger= sPanelPower]i: after {
  content: "";
  position: absolute;
  top: calc(50 % - 4px);
  left: 2px;
  width: 70 %;
  max - width: calc(100 % - 4px);
  height: 8px;
  background: white;
  border - radius: 1px;
}
.actionbar.rightActions.item[data - trigger= sPanelPower]i: before, .actionbar.leftActions.item[data - trigger= sPanelPower]i: before {
  content: "";
  position: absolute;
  top: calc(50 % - 2px);
  right: -3px;
  width: 2px;
  max - width: calc(100 % - 4px);
  height: 4px;
  background: white;
  border - radius: 0 100 % 100 % 0;
}
.actionbar.hide {
  top: -26px;
  pointer - events: none;
  opacity: 0;
  box - shadow: none;
}

.sPanel {
  position: absolute;
  width: auto;
  min - width: 10px;
  height: auto;
  min - height: 10px;
  max - height: 90vh;
  overflow: auto;
  color: white;
  font - size: 15px;
  letter - spacing: 0.5px;
  -webkit - backdrop - filter: blur(30px) saturate(1.5) brightness(0.8);
  backdrop - filter: blur(30px) saturate(1.5) brightness(0.8);
  background: rgba(50, 50, 50, 0.5);
  box - shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer - events: none;
  z - index: 1000;
}
.sPanel.active {
  opacity: 1;
  pointer - events: all;
}
.sPanel.disabled, .sPanel.menu.submenu.disabled {
  opacity: 0!important;
  pointer - events: none!important;
}
.sPanel.sActionbarPanel {
  top: 22px;
  min - width: 200px;
  border - top - left - radius: 0px!important;
  border - top - right - radius: 0px!important;
}
.sPanel.round, .sPanel.menu.submenu.round {
  border - radius: 10px;
}
.sPanel.round[data - roundCornerExceptionTopLeft= "1"], .sPanel.menu.submenu.round[data - roundCornerExceptionTopLeft= "1"] {
  border - top - left - radius: 0px!important;
}
.sPanel.round[data - roundCornerExceptionTopRight= "1"], .sPanel.menu.submenu.round[data - roundCornerExceptionTopRight= "1"] {
  border - top - right - radius: 0px!important;
}
.sPanel.round[data - roundCornerExceptionBottomLeft= "1"], .sPanel.menu.submenu.round[data - roundCornerExceptionBottomLeft= "1"] {
  border - bottom - left - radius: 0px!important;
}
.sPanel.round[data - roundCornerExceptionBottomRight= "1"], .sPanel.menu.submenu.round[data - roundCornerExceptionBottomRight= "1"] {
  border - bottom - right - radius: 0px!important;
}
.sPanel.round[data - roundCornerExceptionTop= "1"], .sPanel.menu.submenu.round[data - roundCornerExceptionTop= "1"] {
  border - top - left - radius: 0px!important;
  border - top - right - radius: 0px!important;
}
.sPanel.round[data - roundCornerExceptionRight= "1"], .sPanel.menu.submenu.round[data - roundCornerExceptionRight= "1"] {
  border - top - right - radius: 0px!important;
  border - bottom - right - radius: 0px!important;
}
.sPanel.round[data - roundCornerExceptionBottom= "1"], .sPanel.menu.submenu.round[data - roundCornerExceptionBottom= "1"] {
  border - bottom - left - radius: 0px!important;
  border - bottom - right - radius: 0px!important;
}
.sPanel.round[data - roundCornerExceptionLeft= "1"], .sPanel.menu.submenu.round[data - roundCornerExceptionLeft= "1"] {
  border - top - left - radius: 0px!important;
  border - bottom - left - radius: 0px!important;
}
.sPanel.default {
  padding: 10px 16px;
}
.sPanel.default.clickable: before, .sPanel.default.menu: before, .sPanel.default.input: before {
  width: calc(100 % + (2 * 10px));
  left: -10px;
}
.sPanel.scrollable {
  overflow: auto!important;
  overflow - x: hidden;
}
.sPanel.scrollable:: -webkit - scrollbar {
  min - width: 5px;
  width: 5px;
  max - width: 5px;
  min - height: 0px;
  height: 0px;
  max - height: 0px;
  background - color: none;
}
.sPanel.scrollable:: -webkit - scrollbar - thumb {
  background - color: rgba(255, 255, 255, 0.25);
  border: none;
  border - radius: 0px;
  backface - visibility: hidden;
}
.sPanel.scrollable:: -webkit - scrollbar - thumb: hover, .sPanel.scrollable:: -webkit - scrollbar - thumb: active {
  background: rgba(255, 255, 255, 0.4);
}
.sPanel.scrollable:: -webkit - scrollbar - button {
  display: none;
  height: 0px;
}
.sPanel.scrollable:: -webkit - resizer, .sPanel.scrollable :: -webkit - scrollbar - corner {
  background: none;
}
.sPanel[sSwitchVisibility = enabled] {
  display: block;
  pointer - events: all;
}
.sPanel[sSwitchVisibility = disabled] {
  display: none;
  pointer - events: none;
}
.sPanel.sidepanel {
  top: 22px;
  right: -350px;
  height: calc(100vh - 22px);
  border - radius: 0!important;
  opacity: 1!important;
  transition: right 0.2s cubic - bezier(0.5, 0.1, 0.5, 1);
}
.sPanel.sidepanel.active {
  right: 0px;
}
.sPanel.sidepanel.switch {
  position: relative;
  height: 52px;
  display: block;
  box - shadow: inset 0 - 1px 0 0 rgba(255, 255, 255, 0.15);
}
.sPanel.sidepanel.switch.select {
  position: absolute;
  top: calc(50 % - 13px);
  left: calc(50 % - 120px);
  width: 240px;
  height: 26px;
  background: rgba(255, 255, 255, 0.1);
  border - radius: 10px;
  overflow: hidden;
}
.sPanel.sidepanel.switch.select.option {
  position: absolute;
  top: 0;
  left: 0;
  width: 50 %;
  height: 100 %;
  line - height: 26px;
  font - size: 14px;
  text - align: center;
  color: rgba(255, 255, 255, 0.5);
  border - radius: 10px;
}
.sPanel.sidepanel.switch.select.option.active, .sPanel.sidepanel.switch.select.option.active: active {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}
.sPanel.sidepanel.switch.select.option: last - child {
  left: 50 %;
}
.sPanel.clickable, .sPanel.menu {
  position: relative;
  z - index: 0;
}
.sPanel.clickable: before, .sPanel.menu: before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100 %;
  border - radius: 8px;
  z - index: -1;
}
.sPanel.clickable: hover: before, .sPanel.menu: hover: before {
  background: rgba(255, 255, 255, 0.15);
}
.sPanel.clickable: active: before, .sPanel.menu: active: before {
  background: #006AFF;
}
.sPanel.input {
  position: relative;
  z - index: 0;
  padding: 6px 0!important;
  margin - bottom: 4px;
  content: "";
  position: absolute;
}
.sPanel.input.active: before {
  background: red;
}
.sPanel.input: before {
  top: 0;
  left: -15px!important;
  width: calc(100 % + (2 * 15px)) !important;
  height: 100 %;
  z - index: -1;
  background: rgba(255, 255, 255, 0.05);
}
.sPanel.input input {
  border: none;
  margin - left: 10px;
  border - radius: 5px;
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.075);
  color: #FFF;
  min - width: 250px;
}
.sPanel.checkable {
  position: relative;
}
.sPanel.checkable: after {
  content: "";
  position: absolute;
  top: 0;
  left: -20px;
  width: 20px;
  height: 20px;
  line - height: 24px;
  font - size: 24px;
  text - align: center;
}
.sPanel.checkable[data - checked= true]: after {
  content: "";
  transform - origin: center center;
  transform: scale(0.5);
}
.sPanel.info {
  position: relative;
  padding: 5px 0!important;
  border - radius: 5px;
}
.sPanel.info.clear, .sPanel.info.disabled {
  opacity: 0.45;
}
.sPanel.info.disabled {
  pointer - events: none;
}
.sPanel.info.block {
  display: block;
}
.sPanel.info.active {
  font - weight: 600;
}
.sPanel.info[data - before]: before {
  content: attr(data - before);
}
.sPanel.info[data - beforeAppend]: before {
  content: attr(data - before) attr(data - beforeAppend);
}
.sPanel.info[data - after]: after {
  content: attr(data - after);
}
.sPanel.info[data - afterAppend]: after {
  content: attr(data - after) attr(data - afterAppend);
}
.sPanel.info.app {
  opacity: 1;
  padding: 3px 0;
  padding - left: 26px;
}
.sPanel.info.app i {
  position: absolute;
  left: 0;
  vertical - align: middle;
  width: 18px;
  height: 18px;
  background - size: contain!important;
}
.sPanel.info.menu {
  padding - right: 20px;
}
.sPanel.info.menu: after {
  content: "";
  position: absolute;
  top: 0;
  right: -10px;
  width: 20px;
  height: 100 %;
  text - align: center;
  line - height: 150 %;
}
.sPanel.info.menu.submenu {
  display: none;
  pointer - events: none;
}
.sPanel.sep {
  position: relative;
  width: calc(100 % + 40px);
  height: 1px;
  margin: 5px - 20px;
  background: rgba(255, 255, 255, 0.15);
}

.sPanelTest {
  top: 50px;
  left: 50px;
  width: auto;
  max - width: 25vw;
  height: auto;
  padding: 20px;
  opacity: 1;
  pointer - events: all;
}

.sPanelNotifications {
  max - height: 100vh;
}
.sPanelNotifications.date {
  position: relative;
  display: block;
  margin: 51px;
  color: #FFF;
}
.sPanelNotifications.date.today {
  font - size: 30px;
  font - weight: 100;
  margin - bottom: 15px;
  display: block;
}
.sPanelNotifications.date.today.ordinal {
  display: inline - block;
  width: 20px;
  line - height: 22px;
  font - size: 14px;
  vertical - align: top;
  margin - left: 2px;
}
.sPanelNotifications.date.weather {
  position: relative;
  font - size: 14px;
}
.sPanelNotifications.date.weather.icon {
  position: absolute;
}
.sPanelNotifications.date.weather.icon[data - icon= cloudly] {
  top: 10px;
  left: -31px;
  width: 16px;
  height: 6px;
  background: #FFF;
  border - radius: 10px 0 0 10px;
}
.sPanelNotifications.date.weather.icon[data - icon= cloudly]: before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 12px;
  width: 10px;
  height: 10px;
  background: #FFF;
  border - radius: 12px 12px 12px 0;
}
.sPanelNotifications.date.weather.icon[data - icon= cloudly]: after {
  content: "";
  position: absolute;
  bottom: 0px;
  left: 3px;
  width: 14px;
  height: 14px;
  background: #FFF;
  border - radius: 12px;
}
.sPanelNotifications[sSwitchId = notifications] {
  padding - top: 15px;
}
.sPanelNotifications[sSwitchId = notifications]: before {
  content: attr(data - ifEmpty);
  position: absolute;
  top: 0;
  left: 0;
  width: 100 %;
  height: 100 %;
  text - align: center;
  line - height: calc(100vh - 22px);
  color: rgba(255, 255, 255, 0.25);
  pointer - events: none;
  opacity: 0;
}
.sPanelNotifications[sSwitchId = notifications].empty: before {
  opacity: 1;
}
.sPanelNotifications.item, .sPanelNotifications.widget {
  position: relative;
  display: block;
  padding: 40px 10px 10px 10px;
  margin: 0 15px 15px 15px;
  background: rgba(255, 255, 255, 0.1);
  box - shadow: 0 10px 15px rgba(0, 0, 0, 0.05), 0 2px 2px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  border - radius: 10px;
  color: rgba(255, 255, 255, 0.8);
  text - shadow: none;
  overflow: hidden;
  cursor: default ;
  text - overflow: ellipsis;
}
.sPanelNotifications.item.close, .sPanelNotifications.widget.close {
  animation: 0.3s closeNotificationItem;
  height: 0;
  padding: 0;
  margin: 0;
  pointer - events: none;
}
.sPanelNotifications.item > .name, .sPanelNotifications.widget > .name {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100 %;
  height: 40px;
  text - indent: 36px;
  line - height: 40px;
  color: white;
}
.sPanelNotifications.item > .name.icon, .sPanelNotifications.widget > .name.icon {
  position: absolute;
  top: calc(50 % - 9px);
  left: 9px;
  width: 18px;
  height: 18px;
  background - size: contain!important;
  background - position: center center!important;
  background - repeat: no - repeat!important;
}
.sPanelNotifications.item > .name.updateTime, .sPanelNotifications.widget > .name.updateTime {
  position: relative;
  float: right;
  padding: 0 10px 0 0;
  font - size: 14px;
  font - weight: 400;
  opacity: 0.35;
  transition: all 0.1s cubic - bezier(0.63, 0.92, 0.68, 0.98);
}
.sPanelNotifications.item > .name.updateTime: before, .sPanelNotifications.widget > .name.updateTime: before {
  content: attr(data - time);
}
.sPanelNotifications.item > b, .sPanelNotifications.widget > b {
  color: rgba(255, 255, 255, 0.95);
}
.sPanelNotifications.item > .dot, .sPanelNotifications.widget > .dot {
  position: relative;
  padding: 0 8px;
}
.sPanelNotifications.item > .dot:: before, .sPanelNotifications.widget > .dot:: before {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  top: calc(50 % - 2px);
  left: calc(50 % - 2px);
  border - radius: 100 %;
  background: rgba(255, 255, 255, 0.95);
}

iframe:: -webkit - scrollbar {
  min - width: 20px;
  width: 20px;
  max - width: 20px;
  min - height: 20px;
  height: 20px;
  max - height: 20px;
  background - color: #fafafa;
}
iframe:: -webkit - scrollbar - thumb {
  background: #cacaca;
  border: solid 7px #fafafa;
  border - radius: 100px;
  backface - visibility: hidden;
}
iframe:: -webkit - scrollbar - thumb: hover {
  background: #bababa;
}
iframe:: -webkit - scrollbar - thumb: active {
  background: #acacac;
}
iframe:: -webkit - scrollbar - button {
  display: none;
  height: 0px;
}
iframe:: -webkit - resizer, iframe :: -webkit - scrollbar - corner {
  background: #fafafa;
}

.full - textarea {
  -webkit - appearance: none;
  -moz - appearance: none;
  appearance: none;
  resize: none;
  position: absolute;
  z - index: 0;
  top: 0;
  left: 0;
  border: none;
  padding: 20px;
  width: 100 %;
  height: 100 %;
  margin: 0;
  font - size: 16px;
}

/*.full-textarea::selection{
  background: #EC407A;
  color: #FFF;
}*/
.video - js.vjs - big - play - button {
  background: rgba(255, 255, 255, 0.9);
  color: rgba(0, 0, 0, 0.9);
  mix - blend - mode: lighten!important;
}

.context {
  font - size: 16px;
  position: absolute;
  width: auto;
  min - width: 160px;
  height: auto;
  border - radius: 5px;
  box - shadow: 0 20px 30px rgba(0, 0, 0, 0.25), 0 0 15px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.075), 0 0 0 1px rgba(0, 0, 0, 0.5);
  color: white;
  font - weight: 600;
  font - size: 14px;
  padding: 5px 0;
  font - weight: 400;
  -webkit - backdrop - filter: blur(30px) saturate(1.5) brightness(1.2);
  backdrop - filter: blur(30px) saturate(1.5) brightness(1.2);
  background: rgba(30, 30, 31, 0.5);
  z - index: 99999;
}
.context.item, .context.text {
  height: 22px;
  line - height: 22px;
  text - overflow: ellipsis;
  white - space: nowrap;
  padding: 0 10px;
}
.context.item i, .context.text i {
  float: right;
  padding - left: 20px;
  opacity: 0.75;
}
.context.item.center, .context.text.center {
  text - align: center;
}
.context.icon {
  position: relative;
  height: 80px;
  width: 100 %;
  margin: 10px 0 35px 0;
  background - size: contain!important;
  background - repeat: no - repeat!important;
  background - position: center center!important;
}
.context.icon[data - type= f] {
  background: url(https://bit.ly/2m8TXOf);
}
.context.icon[data - type= text] {
  background: url(https://bit.ly/33YyJD2);
}
.context.icon[data - type= xlsx] {
  background: url(https://bit.ly/2JX15qR);
}
.context.icon: after {
  content: attr(data - name);
  position: absolute;
  bottom: -30px;
  left: 0;
  width: 100 %;
  height: 20px;
  line - height: 20px;
  white - space: nowrap;
  overflow: hidden;
  text - overflow: ellipsis;
  text - align: center;
  font - size: 14px;
  padding: 0 10px;
}
.context.item: hover {
  background - color: #006AFF;
  color: rgba(255, 255, 255, 0.9);
}
.context.item.warning: hover {
  background - color: #FA3A4D;
  color: rgba(255, 255, 255, 0.9);
}
.context.more: before {
  content: "";
  margin - left: 10px;
  float: right;
}
.context.sep {
  height: 1px;
  border - top: 1px solid rgba(255, 255, 255, 0.075);
  border - bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: calc(100 % - 2px);
  margin: 4px 1px;
  pointer - events: none;
}

/* CONSOLE */
.window--terminal.window__body.window__main {
  line - height: 24px;
  color: white;
  user - select: text;
  word - wrap: break-word;
  overflow - x: hidden;
}
.window--terminal.window__body.window__main :: -webkit - scrollbar {
  min - width: 10px;
  width: 10px;
  max - width: 10px;
  min - height: 10px;
  height: 10px;
  max - height: 10px;
  background: none;
}
.window--terminal.window__body.window__main :: -webkit - scrollbar - thumb {
  background: #cbcbcb;
  cursor: default ;
  backface - visibility: hidden;
  border - radius: 20px;
  box - shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
}
.window--terminal.window__body.window__main :: -webkit - scrollbar - thumb: hover {
  background: #bababa;
  box - shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
}
.window--terminal.window__body.window__main :: -webkit - scrollbar - thumb: active {
  background: #aaa;
  box - shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
}
.window--terminal.window__body.window__main :: -webkit - scrollbar - button {
  display: none;
  height: 0px;
}

.console - input {
  background: none;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  -webkit - appearance: none;
  -moz - appearance: none;
  appearance: none;
  font - family: inherit;
  width: 100 %;
  color: inherit;
  font - weight: inherit;
  overflow: hidden;
  word - spacing: 4px;
}

.output - text,
.output - cmd {
  display: block;
}

.output - cmd {
  word - spacing: 4px;
}

.output - text {
  color: rgba(255, 255, 255, 0.5);
}

.output - text li {
  padding - left: 20px;
  list - style: none;
  color: #ddd;
}

.output - text b {
  color: #444;
}

.console - prompt - box {
  position: relative;
  width: 100 %;
  height: 100 %;
}

.err, .output - text.err b, .output - text.err li {
  color: #F24848;
}

.icon {
  background - repeat: no - repeat!important;
}
.icon[data - size= "16"] {
  width: 16px;
  height: 16px;
}
.icon[data - size= "32"] {
  width: 32px;
  height: 32px;
}
.icon[data - size= "64"] {
  width: 64px;
  height: 64px;
}
.icon[data - size= "128"] {
  width: 128px;
  height: 128px;
}
.icon[data - display= inline - block] {
  display: inline - block;
}
.icon[data - icon= "os folder"] {
  background: url("https://raw.githubusercontent.com/aboredvaro/codepen_resources/main/macOS/img/system/icons/files/folder.png")!important;
}
.icon[data - icon= finder] {
  background: url("https://raw.githubusercontent.com/aboredvaro/codepen_resources/main/macOS/img/system/icons/finder.png")!important;
}
.icon[data - icon= launchpad] {
  background: url("https://raw.githubusercontent.com/aboredvaro/codepen_resources/main/macOS/img/system/icons/launchpad.png")!important;
}
.icon[data - icon= preferences] {
  background: url("https://raw.githubusercontent.com/aboredvaro/codepen_resources/main/macOS/img/system/icons/systempreferences.png")!important;
}
.icon[data - icon= messages] {
  background: url("https://raw.githubusercontent.com/aboredvaro/codepen_resources/main/macOS/img/system/icons/messages.png")!important;
}
.icon[data - icon= safari] {
  background: url("https://raw.githubusercontent.com/aboredvaro/codepen_resources/main/macOS/img/system/icons/safari.png")!important;
}
.icon[data - icon= podcast] {
  background: url("https://raw.githubusercontent.com/aboredvaro/codepen_resources/main/macOS/img/system/icons/podcasts.png")!important;
}
.icon[data - icon= reminders] {
  background: url("https://raw.githubusercontent.com/aboredvaro/codepen_resources/main/macOS/img/system/icons/reminders.png")!important;
}
.icon[data - icon= calendar] {
  background: url("https://raw.githubusercontent.com/aboredvaro/codepen_resources/main/macOS/img/system/icons/calendar.png")!important;
}
.icon[data - icon= apple_mail] {
  background: url("https://raw.githubusercontent.com/aboredvaro/codepen_resources/main/macOS/img/system/icons/mail.png")!important;
}
.icon[data - icon= chrome] {
  background: url(https://bit.ly/2Qj9Zmg) !important;
}
.icon[data - icon= drive] {
  background: url(https://bit.ly/2M2LqJq) !important;
}
.icon[data - icon= adobe] {
  background: url(https://bit.ly/2QmJnhJ) !important;
}
.icon[data - icon= "adobe ae"] {
  background: url(https://bit.ly/2Hz4FWU) !important;
}
.icon[data - icon= "adobe ps"] {
  background: url(https://bit.ly/2VJP1f0) !important;
}
.icon[data - icon= "adobe id"] {
  background: url(https://bit.ly/2HwDKL0) !important;
}
.icon[data - icon= "adobe lr"] {
  background: url(https://bit.ly/2Jy2Ewd) !important;
}
.icon[data - icon= outlook] {
  background: url(https://bit.ly/37YY8yD) !important;
}
.icon[data - icon= vscode] {
  background: url(https://bit.ly/2lWXorv) !important;
}
.icon[data - icon= word] {
  background: url(https://bit.ly/2vZeSIF) !important;
}
.icon[data - icon= excel] {
  background: url(https://bit.ly/2w1sdAc) !important;
}
.icon[data - icon= "power point"] {
  background: url(https://bit.ly/32rNtLO) !important;
}
.icon[data - icon= onenote] {
  background: url(https://bit.ly/3c322K9) !important;
}
.icon[data - icon= console] {
  background: url(https://bit.ly/2JwVZ5n) !important;
}
.icon[data - icon= whatsapp] {
  background: url(https://bit.ly/2K105Co) !important;
}
.icon[data - icon= instagram] {
  background: url(https://bit.ly/30EYpEw) !important;
}
.icon[data - icon= "vlc player"] {
  background: url(https://bit.ly/2VKPHRa) !important;
}
.icon[data - icon= spotify] {
  background: url(https://bit.ly/2VEdT81) !important;
}
.icon[data - icon= slack] {
  background: url(https://bit.ly/2Er8AmD) !important;
}
.icon[data - icon= "davinci resolve"] {
  background: url(https://bit.ly/35ygeXY) !important;
}
.icon[data - icon= discord] {
  background: url(https://bit.ly/30y4IJO) !important;
}
.icon[data - icon= comet] {
  background: url(https://bit.ly/2XP6Puo) !important;
}
.icon[data - icon= user] {
  background: url("https://raw.githubusercontent.com/aboredvaro/codepen_resources/main/macOS/img/user/pic/1.png")!important;
}

@keyframes bounce {
  0 %, 40 %, 70 %, 100 % {
    transform: translateY(0px);
    box- shadow: none;
}
20 % {
  transform: translateY(-50px);
  box- shadow: 0 50px 15px 0 rgba(0, 0, 0, 0.25);
  }
60 % {
  transform: translateY(-25px);
  box- shadow: 0 25px 15px 0 rgba(0, 0, 0, 0.125);
  }
90 % {
  transform: translateY(-10px);
  box- shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.075);
  }
}
@keyframes bounceScale {
  0 %, 40 %, 70 %, 100 % {
    transform: translateY(0px);
    box- shadow: none;
}
20 % {
  transform: translateY(-50px) scale(2.15);
    box- shadow: 0 50px 15px 0 rgba(0, 0, 0, 0.25);
  }
60 % {
  transform: translateY(-25px) scale(1.2);
    box- shadow: 0 25px 15px 0 rgba(0, 0, 0, 0.125);
  }
90 % {
  transform: translateY(-10px) scale(1.1);
    box- shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.075);
  }
}
@keyframes closeNotificationItem {
  0 % {
    transform: translateX(0px);
    height: auto;
    padding: 40px 10px 10px 10px;
    margin: 0 15px 15px 15px;
  }
  50 % {
    transform: translateX(150px);
    height: auto;
    padding: 40px 10px 10px 10px;
    margin: 0 15px 15px 15px;
  }
  100 % {
    transform: translateX(150px);
    height: 0px;
    padding: 0px;
    margin: 0px;
    opacity: 0;
  }
}
.sPanelNotifications.widget.reminders ul {
  list - style: none;
  margin: 10px;
  color: rgba(255, 255, 255, 0.9);
}
.sPanelNotifications.widget.reminders ul li {
  position: relative;
  padding: 12px 0 12px 30px;
  margin - bottom: 1px;
}
.sPanelNotifications.widget.reminders ul li.canCheck {
  position: absolute;
  top: calc(50 % - 10px);
  left: 0;
  height: 20px;
  width: 20px;
  border - radius: 100 %;
  box - shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.35);
}
.sPanelNotifications.widget.reminders ul li: after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100 %;
  height: 1px;
  background: rgba(255, 255, 255, 0.15);
}
.sPanelNotifications.widget.reminders ul li: last - child {
  margin - bottom: 0;
}
.sPanelNotifications.widget.reminders ul li: last - child: after {
  background: none;
}
.sPanelNotifications.widget.miniPlayer.z - index {
  position: relative;
  z - index: 1;
}
.sPanelNotifications.widget.miniPlayer.cover {
  position: relative;
  width: 50px;
  height: 50px;
  margin: 10px;
  border - radius: 5px;
  background - size: contain!important;
  background - position: center center!important;
  background - repeat: no - repeat!important;
  transform - origin: center center;
  transition: 0.1s ease -in -out;
  box - shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1);
}
.sPanelNotifications.widget.miniPlayer.cover: after {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  width: calc(100 % - 10px);
  height: 100 %;
  background - image: inherit;
  background - size: inherit;
  background - position: inherit;
  background - repeat: inherit;
  filter: blur(25px) saturate(1.5);
  opacity: 0.5;
  z - index: -1;
}
.sPanelNotifications.widget.miniPlayer > .title {
  position: absolute;
  top: 55px;
  left: 85px;
  width: calc(100 % - 105px);
  height: 40px;
  overflow: hidden;
}
.sPanelNotifications.widget.miniPlayer > .title: before, .sPanelNotifications.widget.miniPlayer > .title: after {
  position: absolute;
  left: 0;
  width: 100 %;
  height: 20px;
  line - height: 20px;
  overflow: hidden;
  word -break: break-all;
  text - overflow: ellipsis;
}
.sPanelNotifications.widget.miniPlayer > .title: before {
  content: attr(data - title);
  top: 0;
  font - weight: 600;
  color: rgba(255, 255, 255, 0.9);
  text - overflow: ellipsis;
  overflow: hidden;
  white - space: nowrap;
}
.sPanelNotifications.widget.miniPlayer > .title: after {
  content: attr(data - author);
  top: 20px;
  text - overflow: ellipsis;
  overflow: hidden;
  white - space: nowrap;
}
.sPanelNotifications.widget.miniPlayer > .controls {
  position: relative;
  left: 0;
  width: 100 %;
  height: 70px;
  overflow: hidden;
  text - align: center;
  color: rgba(255, 255, 255, 0.9);
  padding - top: 30px;
  z - index: 1;
}
.sPanelNotifications.widget.miniPlayer > .controls.timeNav {
  position: absolute;
  left: 10px;
  top: 6px;
  width: calc(100 % - 20px);
  height: 8px;
}
.sPanelNotifications.widget.miniPlayer > .controls.timeNav: before {
  content: "";
  position: absolute;
  left: 0;
  top: 2px;
  width: 100 %;
  height: 3px;
  background: rgba(255, 255, 255, 0.15);
}
.sPanelNotifications.widget.miniPlayer > .controls.timeNav.timeCurrent, .sPanelNotifications.widget.miniPlayer > .controls.timeNav.timeRemaining {
  position: absolute;
  bottom: -20px;
  width: 40 %;
  height: 20px;
  line - height: 20px;
  color: rgba(255, 255, 255, 0.9);
  font - size: 75 %;
  pointer - events: none;
}
.sPanelNotifications.widget.miniPlayer > .controls.timeNav.timeCurrent {
  left: 0;
  text - align: left;
}
.sPanelNotifications.widget.miniPlayer > .controls.timeNav.timeRemaining {
  right: 0;
  text - align: right;
}
.sPanelNotifications.widget.miniPlayer > .controls.timeNav.timeRemaining: before {
  content: "-";
}
.sPanelNotifications.widget.miniPlayer > .controls.timeNav.handler {
  position: absolute;
  left: 0;
  top: 2px;
  min - height: 3px;
  height: 3px;
  max - height: 3px;
  min - width: 7px;
  max - width: 100 %;
  background: rgba(255, 255, 255, 0.75);
}
.sPanelNotifications.widget.miniPlayer > .controls.timeNav.handler.ui - resizable - e {
  cursor: default ;
  width: 14px;
  right: -4px;
  top: -5px;
  height: 14px;
}
.sPanelNotifications.widget.miniPlayer > .controls.timeNav.handler: after {
  content: "";
  position: absolute;
  right: 0;
  top: -2px;
  width: 7px;
  height: 7px;
  background: #FFF;
  border - radius: 100 %;
  transform - origin: center center;
  transition: all 0.1s ease - out;
}
.sPanelNotifications.widget.miniPlayer > .controls.timeNav.handler: before {
  content: "";
  position: absolute;
  right: 0;
  top: -2px;
  width: 7px;
  height: 7px;
  background: none;
  border - radius: 100 %;
  transform - origin: center center;
  transform: scale(2);
}
.sPanelNotifications.widget.miniPlayer > .controls.timeNav.handler: hover: after {
  transform: scale(2);
}
.sPanelNotifications.widget.miniPlayer > .controls.btn {
  position: relative;
  display: inline - block;
  vertical - align: top;
  top: 0;
  width: 40px;
  height: 40px;
  font - size: 20px;
  line - height: 40px;
  text - align: center;
  transform - origin: center center;
  transition: all 0.1s cubic - bezier(0.63, 0.92, 0.68, 0.98);
}
.sPanelNotifications.widget.miniPlayer > .controls.btn: before, .sPanelNotifications.widget.miniPlayer > .controls.btn: after {
  transition: all 0.1s cubic - bezier(0.63, 0.92, 0.68, 0.98);
}
.sPanelNotifications.widget.miniPlayer > .controls.btn: active {
  transform: scale(0.9);
  opacity: 0.9;
}
.sPanelNotifications.widget.miniPlayer > .controls.prev: before {
  content: "";
}
.sPanelNotifications.widget.miniPlayer > .controls.play: before {
  content: "";
  position: absolute;
  top: 7px;
  left: calc(50 % + 2px);
  width: 8px;
  height: 26px;
  border - radius: 2px;
  background: rgba(255, 255, 255, 0.9);
  box - shadow: -12px 0 0 rgba(255, 255, 255, 0.9);
}
.sPanelNotifications.widget.miniPlayer > .controls.next: before {
  content: "";
}