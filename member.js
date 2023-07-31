function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.createElement("div");
    skillsMember.className = "skillsMember";
    skills.appendChild(skillsMember);
    var skillsMemberImg = document.createElement("img");
    skillsMemberImg.className = "skillsMemberImg";
    skillsMemberImg.src = "img/skillsMember.png";
    skillsMember.appendChild(skillsMemberImg);
    var skillsMemberName = document.createElement("div");
    skillsMemberName.className = "skillsMemberName";
    skillsMemberName.innerHTML = "Name";
    skillsMember.appendChild(skillsMemberName);
    var skillsMemberPosition = document.createElement("div");
    skillsMemberPosition.className = "skillsMemberPosition";
    skillsMemberPosition.innerHTML = "Position";
    skillsMember.appendChild(skillsMemberPosition);
    var skillsMemberDescription = document.createElement("div");
    skillsMemberDescription.className = "skillsMemberDescription";
    skillsMemberDescription.innerHTML = "Description";
    skillsMember.appendChild(skillsMemberDescription);
}