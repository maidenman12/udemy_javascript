function MemberFactory() {
  this.createMember = function(name, type) {
    let member;

    if(type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'premium') {
      member = new PremiumMembership(name);
    }

    member.type = type;

    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }
    
    return member;
  }
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '£5'
}

const StandardMembership = function(name) {
  this.name = name;
  this.cost = '£10'
}
const PremiumMembership = function(name) {
  this.name = name;
  this.cost = '£15'
}

const members = [];
const factory = new MemberFactory();


members.push(factory.createMember('Rich Hirst', 'simple'));
members.push(factory.createMember('Beccy Jardine', 'standard'));
members.push(factory.createMember('Tyrone Simpson', 'premium'));
members.push(factory.createMember('Dave Dave', 'simple'));

// console.log(members);

members.forEach(function(member){
  member.define();
});