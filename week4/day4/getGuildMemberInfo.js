/**

  Sebuah guild dalam game memiliki beberapa anggota, dari berbagai jenis class dan level
  sebuah fungsi getGuildMemberInfo akan menerima daftar member dari guild tesebut
  fungsi tersebut akan menampilkan jumlah member, rata-rata level anggota dan
  daftar member per-class yang levelnya diatas rata-rata

  contoh:
  - input:
    [{
      name: 'antonio',
      level: 90,
      class: 'Knight'
    },
    {
      name: 'banderaz',
      level: 90,
      class: 'Priest'
    },
    {
      name: 'cecile',
      level: 99,
      class: 'Knight'
    },
    {
      name: 'dominique',
      level: 92,
      class: 'Hunter'
    },
    {
      name: 'eric',
      level: 92,
      class: 'Priest'
    },
    {
      name: 'fernandez',
      level: 91,
      class: 'Knight'
    }]
  - output:
  {
   totalMember: 6,
   averageLevel: 92,
   Knight: [ { name: 'cecile', level: 99 } ],
   Priest: [ { name: 'eric', level: 92 } ],
   Hunter: [ { name: 'dominique', level: 92 } ]
  }

  PENJELASAN
  jumlah total level member adalah 90 + 90 + 99 + 92 + 92 + 91 = 554
  totalMember didapat dari jumlah member yaitu 6 orang
  averageLevel didapat dari total level member/total member yang dibulakan ke bawah 554/6 = 92
  sehingga untuk Top masing-masing class adalah member dengan class tersebut yang levelnya diatas atau sama dengan 92
  jika tidak ada class tersebut yang diatas atau sama dengan rata-rata maka top class tidak ditampilkan

  RULES:
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .map(), .filter() dan .reduce()
  - DILARANG MENGGUNAKAN SPREAD SYNTAX

 */

function getGuildMemberInfo(members) {
  let obj = {
    totalMember : 0,
    averageLevel : 0
  }
  let jumlah = 0
  for (let i = 0; i < members.length; i++) {
    const data = members[i];
    jumlah += data.level
  }
  let averageLevel = Math.floor(jumlah / members.length)
  obj.totalMember = members.length
  obj.averageLevel = averageLevel
  for (let j = 0; j < members.length; j++) {
    if(members[j].level >= obj.averageLevel){
      if(obj[members[j].class] === undefined){
        obj[members[j].class] = [members[j]]
        delete obj[members[j].class].class
      }else{
        obj[members[j].class].push(members[j])
        delete obj[members[j].class].class
      }
    }
  }
  return obj
}
  
  console.log(
    getGuildMemberInfo([
      {
        name: "antonio",
        level: 90,
        class: "Knight",
      },
      {
        name: "banderaz",
        level: 90,
        class: "Priest",
      },
      {
        name: "cecile",
        level: 99,
        class: "Knight",
      },
      {
        name: "dominique",
        level: 92,
        class: "Hunter",
      },
      {
        name: "ernest",
        level: 92,
        class: "Priest",
      },
      {
        name: "fernandez",
        level: 91,
        class: "Knight",
      },
      {
        name: "goblin",
        level: 95,
        class: "Knight",
      },
      {
        name: "hemogoblin",
        level: 93,
        class: "Hunter",
      },
    ])
  );
  /**
  output
  {
    totalMember: 8,
    averageLevel: 92,
    Knight: [ { name: 'cecile', level: 99 }, { name: 'goblin', level: 95 } ],
    Priest: [ { name: 'ernest', level: 92 } ],
    Hunter: [ { name: 'dominique', level: 92 },{ name: 'hemogoblin', level: 93 } ]
  }
   */
  // console.log(getGuildMemberInfo([
  //   { name: 'indah', level: 85, class: 'Assasint' },
  //   { name: 'juminten', level: 92, class: 'Blacksmith' },
  //   { name: 'kumar', level: 95, class: 'Wizard' },
  //   { name: 'lili', class: 'Priest', level: 99 },
  //   { name: 'munaroh', class: 'Blacksmith', level: 95 }
  // ]));
  /**
   output:
  {
    totalMember: 5,
    averageLevel: 93,
    Blacksmith: [ { name: 'munaroh', level: 95 } ],
    Wizard: [ { name: 'kumar', level: 95 } ],
    Priest: [ { name: 'lili', level: 99 } ]
  }
   */
  // console.log(getGuildMemberInfo([])); // invalid data
  