const indexData1 = [
  {
    title: "校尉将印",
    pr: 80
  },
  {
    title: "中郎将印",
    pr: 20
  }
];

const indexData2 = [
  {
    title: "校尉将印",
    pr: 80
  },
  {
    title: "中郎将印",
    pr: 13
  },
  {
    title: "大将军印",
    pr: 7
  }
];

const indexData3 = [
  {
    title: "校尉将印",
    pr: 70
  },
  {
    title: "中郎将印",
    pr: 20
  },
  {
    title: "大将军印",
    pr: 5
  },
  {
    title: "枭雄将印",
    pr: 5
  }
];

export const sealData1 = () => {
  let Data1 = [];
  indexData1.map(it => {
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
export const sealData2 = () => {
  let Data1 = [];
  indexData2.map(it => {
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
export const sealData3 = () => {
  let Data1 = [];
  indexData3.map(it => {
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
