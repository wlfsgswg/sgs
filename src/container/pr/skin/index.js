const indexData = [
  {
    title: "普通皮肤",
    pr: 70
  },
  {
    title: "稀有皮肤",
    pr: 20
  },
  {
    title: "史诗皮肤",
    pr: 7
  },
  {
    title: "传说皮肤",
    pr: 3
  }
];

export const skinData = () => {
  let Data1 = [];
  indexData.map(it => {
    let itemTitle = it.title;
    let data = [];
    data.length = it.pr;
    for (let i = 0; i < data.length; i++) {
      data[i] = itemTitle;
    }
    Data1 = [...Data1, ...data];
  });
  return Data1;
};
