/*! For license information please see main.cab19b8b103502290c62.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/animations/Paragraph.js":(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var n=a("./node_modules/gsap/index.js"),s=a("./app/classes/Animation.js"),i=a("./app/utils/text.js");class l extends s.default{constructor({element:e,elements:t}){super({element:e,elements:t}),this.elementLinesSpans=(0,i.split)({append:!0,element:this.element})}animateIn(){this.timelineIn=n.default.timeline({delay:.5}),this.timelineIn.to(this.element,{autoAlpha:1,duration:1})}animateOut(){n.default.set(this.element,{autoAlpha:0})}}}},(function(e){e.h=()=>"93e91eb0debc271f30bb"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jYWIxOWI4YjEwMzUwMjI5MGM2Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7OE5BS2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ25DQyxXQUFBQSxFQUFZLFFBQUVDLEVBQU8sU0FBRUMsSUFDckJDLE1BQU0sQ0FBRUYsVUFBU0MsYUFFakJFLEtBQUtDLG1CQUFvQkMsRUFBQUEsRUFBQUEsT0FBTSxDQUM3QkMsUUFBUSxFQUNSTixRQUFTRyxLQUFLSCxTQUVsQixDQUVBTyxTQUFBQSxHQUNJSixLQUFLSyxXQUFhQyxFQUFBQSxRQUFLQyxTQUFTLENBQzVCQyxNQUFPLEtBR1RSLEtBQUtLLFdBQVdJLEdBQUdULEtBQUtILFFBQVMsQ0FDL0JhLFVBQVcsRUFDWEMsU0FBUyxHQW9CakIsQ0FDQUMsVUFBQUEsR0FDSU4sRUFBQUEsUUFBS08sSUFBSWIsS0FBS0gsUUFBUyxDQUNyQmEsVUFBVyxHQUVmLGtCQy9DTkksRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9hbmltYXRpb25zL1BhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnO1xuaW1wb3J0IEFuaW1hdGlvbiBmcm9tICdjbGFzc2VzL0FuaW1hdGlvbic7XG5cbmltcG9ydCB7IGNhbGN1bGF0ZSwgc3BsaXQgfSBmcm9tICd1dGlscy90ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYWdyYXBoIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pIHtcbiAgICAgIHN1cGVyKHsgZWxlbWVudCwgZWxlbWVudHMgfSk7XG5cbiAgICAgIHRoaXMuZWxlbWVudExpbmVzU3BhbnMgPSBzcGxpdCh7XG4gICAgICAgIGFwcGVuZDogdHJ1ZSxcbiAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZUluKCkge1xuICAgICAgICB0aGlzLnRpbWVsaW5lSW4gPSBHU0FQLnRpbWVsaW5lKHtcbiAgICAgICAgICAgIGRlbGF5OiAwLjUsXG4gICAgICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgICB0aGlzLnRpbWVsaW5lSW4udG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICBhdXRvQWxwaGE6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjoxXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy/mr4/ooYznmoTlrZfkvZPnmoTmuJDlj5hcbiAgICAgICAgICAvLyBlYWNoKHRoaXMuZWxlbWVudHNMaW5lcywgKGxpbmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgLy8gICB0aGlzLnRpbWVsaW5lSW4uZnJvbVRvKFxuICAgICAgICAgIC8vICAgICBsaW5lLFxuICAgICAgICAgIC8vICAgICB7XG4gICAgICAgICAgLy8gICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICAgIC8vICAgICAgIHk6ICcxMDAlJyxcbiAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAvLyAgICAge1xuICAgICAgICAgIC8vICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgICAvLyAgICAgICBkZWxheTogaW5kZXggKiAwLjEsXG4gICAgICAgICAgLy8gICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgICAvLyAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgICAgIC8vICAgICAgIHk6ICcwJScsXG4gICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgLy8gICAgIDBcbiAgICAgICAgICAvLyAgICk7XG4gICAgICAgICAgLy8gfSk7XG4gICAgfVxuICAgIGFuaW1hdGVPdXQoKSB7XG4gICAgICAgIEdTQVAuc2V0KHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgLy8gLy/orqHnrpfmr4/ooYxcbiAgICAvLyBvblJlc2l6ZSgpIHtcbiAgICAvLyAgICAgdGhpcy5lbGVtZW50c0xpbmVzID0gY2FsY3VsYXRlKHRoaXMuZWxlbWVudExpbmVzU3BhbnMpO1xuICAgIC8vIH1cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjkzZTkxZWIwZGViYzI3MWYzMGJiXCIpIl0sIm5hbWVzIjpbIlBhcmFncmFwaCIsIkFuaW1hdGlvbiIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwic3VwZXIiLCJ0aGlzIiwiZWxlbWVudExpbmVzU3BhbnMiLCJzcGxpdCIsImFwcGVuZCIsImFuaW1hdGVJbiIsInRpbWVsaW5lSW4iLCJHU0FQIiwidGltZWxpbmUiLCJkZWxheSIsInRvIiwiYXV0b0FscGhhIiwiZHVyYXRpb24iLCJhbmltYXRlT3V0Iiwic2V0IiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9