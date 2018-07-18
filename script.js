	function initSkill(Up, UpLink, L, LLink, LD, LDLink, RD, RDLink, R, RLink) {
		var skill = {};
		skill.js = '<a href=' + UpLink + '>' + Up + '</a>';
		skill.php = '<a href=' + LLink + '>' + L + '</a>';
		skill.c = '<a href=' + LDLink + '>' + LD + '</a>';
		skill.ts = '<a href=' + RDLink + '>' + RD + '</a>';
		skill.css = '<a href=' + RLink + '>' + R + '</a>';
		var skillUp = document.getElementById("skillUp");
		skillUp.innerHTML = skill.js;
		var skillL = document.getElementById("skillL");
		skillL.innerHTML = skill.php ;
		var skillLD = document.getElementById("skillLD");
		skillLD.innerHTML = skill.c;
		var skillRD = document.getElementById("skillRD");
		skillRD.innerHTML = skill.ts;
		var skillR = document.getElementById("skillR");
		skillR.innerHTML = skill.css;
	}
	// init skill
	initSkill("JS", "", "PHP", "", "C#", "https://github.com/Sank-WoT/Forex", "TS", "", "CSS", "");

	var morphing = anime({
	  targets: '#morphing .polymorph',
	  points: [
	    { value: '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369' },
	    { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
	    { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
	    { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
	  ],
	  easing: 'easeOutQuad',
	  duration: 2000,
	  loop: true
	});