function skillsMember() {
    let that = this;
    this.skills = ['js', 'react', 'node'];
    this.addSkill = function(skill) {
        that.skills.push(skill);
    }
}