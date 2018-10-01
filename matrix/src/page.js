import './style.css';
import myData from './data/outer';
import React, { Component } from 'react';

class page extends Component {

  constructor() {
    super();
  }

  setData = () => {

    this.state = {
      ...this.state, currentLevel1: this.props.myCurrentLevel1, currentLevel2: this.props.myCurrentLevel2, currentLevel3: this.props.myCurrentLevel3,
      direct_strategy: [], direct_reform: [],
      blog_AY1: 0, blog_AY2: 0, blog_AY3: 0, blog_AY4: 0, blog_AY5: 0, blog_AY6: 0,
      blog_BY1: 0, blog_BY2: 0, blog_BY3: 0, blog_BY4: 0, blog_BY5: 0, blog_BY6: 0,
      blog_CY1: 0, blog_CY2: 0, blog_CY3: 0, blog_CY4: 0, blog_CY5: 0, blog_CY6: 0,
      blog_DY1: 0, blog_DY2: 0, blog_DY3: 0, blog_DY4: 0, blog_DY5: 0, blog_DY6: 0,
      blog_EY1: 0, blog_EY2: 0, blog_EY3: 0, blog_EY4: 0, blog_EY5: 0, blog_EY6: 0,
      blog_FY1: 0, blog_FY2: 0, blog_FY3: 0, blog_FY4: 0, blog_FY5: 0, blog_FY6: 0,
      blog_GY1: 0, blog_GY2: 0, blog_GY3: 0, blog_GY4: 0, blog_GY5: 0, blog_GY6: 0,
      blog_HY1: 0, blog_HY2: 0, blog_HY3: 0, blog_HY4: 0, blog_HY5: 0, blog_HY6: 0,
      blog_IY1: 0, blog_IY2: 0, blog_IY3: 0, blog_IY4: 0, blog_IY5: 0, blog_IY6: 0,
      blog_JY1: 0, blog_JY2: 0, blog_JY3: 0, blog_JY4: 0, blog_JY5: 0, blog_JY6: 0,
      blog_KY1: 0, blog_KY2: 0, blog_KY3: 0, blog_KY4: 0, blog_KY5: 0, blog_KY6: 0
    };

    if (this.state.currentLevel1 === 'ทุกประเภท') {
      if (this.state.currentLevel2 === 'ทุกประเภท' && this.state.currentLevel3 === 'ทุกประเภท') {  // all all all

        myData.map((item) => {
          if (item.Level1 != "" && item.Level2 != "" && item.Level3 != "") {
            this.state.direct_reform.push(item.Direct_Reform);
            this.state.direct_strategy.push(item.Direct_Strategy);
          }

        });
      }
      else if (this.state.currentLevel2 === 'ทุกประเภท') { // all all ...

        myData.map((item) => {
          if (item.Level1 != "" && item.Level2 != "" && item.Level3 != "") {

            if (this.state.currentLevel3 === item.Level3) {
              this.state.direct_reform.push(item.Direct_Reform);
              this.state.direct_strategy.push(item.Direct_Strategy);
            }
          }

        });

      }
      else if (this.state.currentLevel3 === 'ทุกประเภท') { // all ... all

        myData.map((item) => {
          if (item.Level1 != "" && item.Level2 != "" && item.Level3 != "") {

            if (this.state.currentLevel2 === item.Level2) {
              this.state.direct_reform.push(item.Direct_Reform);
              this.state.direct_strategy.push(item.Direct_Strategy);
            }
          }
        });

      }
      else if (this.state.currentLevel2 != 'ทุกประเภท' && this.state.currentLevel3 != 'ทุกประเภท') { // all ... ...

        myData.map((item) => {
          if (item.Level1 != "" && item.Level2 != "" && item.Level3 != "") {

            if (this.state.currentLevel2 === item.Level2 && this.state.currentLevel3 === item.Level3) {
              this.state.direct_reform.push(item.Direct_Reform);
              this.state.direct_strategy.push(item.Direct_Strategy);
            }
          }
        });
      }
    }

    else if (this.state.currentLevel2 === 'ทุกประเภท') {
      if (this.state.currentLevel3 === 'ทุกประเภท') {  // ... all all

        myData.map((item) => {
          if (item.Level1 != "" && item.Level2 != "" && item.Level3 != "") {

            if (this.state.currentLevel1 === item.Level1) {
              this.state.direct_reform.push(item.Direct_Reform);
              this.state.direct_strategy.push(item.Direct_Strategy);
            }
          }
        });

      }
      else if (this.state.currentLevel1 != 'ทุกประเภท' && this.state.currentLevel3 != 'ทุกประเภท') {// ... all ...

        myData.map((item) => {
          if (item.Level1 != "" && item.Level2 != "" && item.Level3 != "") {

            if (this.state.currentLevel1 === item.Level1 && this.state.currentLevel3 === item.Level3) { // ... all ...
              this.state.direct_reform.push(item.Direct_Reform);
              this.state.direct_strategy.push(item.Direct_Strategy);
            }
          }
        });

      }
    }

    else if (this.state.currentLevel3 === 'ทุกประเภท') {
      if (this.state.currentLevel1 != 'ทุกประเภท' && this.state.currentLevel2 != 'ทุกประเภท') { // ... ... all

        myData.map((item) => {
          if (item.Level1 != "" && item.Level2 != "" && item.Level3 != "") {

            if (this.state.currentLevel1 === item.Level1 && this.state.currentLevel2 === item.Level2) {
              this.state.direct_reform.push(item.Direct_Reform);
              this.state.direct_strategy.push(item.Direct_Strategy);
            }
          }
        });
      }
    }

    else if (this.state.currentLevel1 != 'ทุกประเภท' && this.state.currentLevel2 != 'ทุกประเภท' && this.state.currentLevel3 != 'ทุกประเภท') { // ... ... ...

      myData.map((item) => {
        if (item.Level1 != "" && item.Level2 != "" && item.Level3 != "") {

          if (this.state.currentLevel1 === item.Level1 && this.state.currentLevel2 === item.Level2 && this.state.currentLevel3 === item.Level3) {
            this.state.direct_reform.push(item.Direct_Reform);
            this.state.direct_strategy.push(item.Direct_Strategy);
          }
        }
      });
    }

    this.setSplit();

  }

  setSplit = () => {

    let row, col;

    for (let i = 0; i < this.state.direct_reform.length; i++) {
      if (this.state.direct_reform[i] != null && this.state.direct_strategy != null) {
        let temp1 = this.state.direct_reform[i].split('');
        let row = temp1[0];

        let temp2 = this.state.direct_strategy[i].split('');
        let col = temp2[0] + temp2[1];


        this.checkCategory(row, col);
      }
    }

  }

  checkCategory = (row, col) => {

    switch (row) {
      case 'A': if (col === 'Y1') { this.state = { ...this.state, blog_AY1: this.state.blog_AY1 + 1 }; break; }
      else if (col === 'Y2') { this.state = { ...this.state, blog_AY2: this.state.blog_AY2 + 1 }; break; }
      else if (col === 'Y3') { this.state = { ...this.state, blog_AY3: this.state.blog_AY3 + 1 }; break; }
      else if (col === 'Y4') { this.state = { ...this.state, blog_AY4: this.state.blog_AY4 + 1 }; break; }
      else if (col === 'Y5') { this.state = { ...this.state, blog_AY5: this.state.blog_AY5 + 1 }; break; }
      else if (col === 'Y6') { this.state = { ...this.state, blog_AY6: this.state.blog_AY6 + 1 }; break; }

      case 'B': if (col === 'Y1') { this.state = { ...this.state, blog_BY1: this.state.blog_BY1 + 1 }; break; }
      else if (col === 'Y2') { this.state = { ...this.state, blog_BY2: this.state.blog_BY2 + 1 }; break; }
      else if (col === 'Y3') { this.state = { ...this.state, blog_BY3: this.state.blog_BY3 + 1 }; break; }
      else if (col === 'Y4') { this.state = { ...this.state, blog_BY4: this.state.blog_BY4 + 1 }; break; }
      else if (col === 'Y5') { this.state = { ...this.state, blog_BY5: this.state.blog_BY5 + 1 }; break; }
      else if (col === 'Y6') { this.state = { ...this.state, blog_BY6: this.state.blog_BY6 + 1 }; break; }

      case 'C': if (col === 'Y1') { this.state = { ...this.state, blog_CY1: this.state.blog_CY1 + 1 }; break; }
      else if (col === 'Y2') { this.state = { ...this.state, blog_CY2: this.state.blog_CY2 + 1 }; break; }
      else if (col === 'Y3') { this.state = { ...this.state, blog_CY3: this.state.blog_CY3 + 1 }; break; }
      else if (col === 'Y4') { this.state = { ...this.state, blog_CY4: this.state.blog_CY4 + 1 }; break; }
      else if (col === 'Y5') { this.state = { ...this.state, blog_CY5: this.state.blog_CY5 + 1 }; break; }
      else if (col === 'Y6') { this.state = { ...this.state, blog_CY6: this.state.blog_CY6 + 1 }; break; }

      case 'D': if (col === 'Y1') { this.state = { ...this.state, blog_DY1: this.state.blog_DY1 + 1 }; break; }
      else if (col === 'Y2') { this.state = { ...this.state, blog_DY2: this.state.blog_DY2 + 1 }; break; }
      else if (col === 'Y3') { this.state = { ...this.state, blog_DY3: this.state.blog_DY3 + 1 }; break; }
      else if (col === 'Y4') { this.state = { ...this.state, blog_DY4: this.state.blog_DY4 + 1 }; break; }
      else if (col === 'Y5') { this.state = { ...this.state, blog_DY5: this.state.blog_DY5 + 1 }; break; }
      else if (col === 'Y6') { this.state = { ...this.state, blog_DY6: this.state.blog_DY6 + 1 }; break; }

      case 'E': if (col === 'Y1') { this.state = { ...this.state, blog_EY1: this.state.blog_EY1 + 1 }; break; }
      else if (col === 'Y2') { this.state = { ...this.state, blog_EY2: this.state.blog_EY2 + 1 }; break; }
      else if (col === 'Y3') { this.state = { ...this.state, blog_EY3: this.state.blog_EY3 + 1 }; break; }
      else if (col === 'Y4') { this.state = { ...this.state, blog_EY4: this.state.blog_EY4 + 1 }; break; }
      else if (col === 'Y5') { this.state = { ...this.state, blog_EY5: this.state.blog_EY5 + 1 }; break; }
      else if (col === 'Y6') { this.state = { ...this.state, blog_EY6: this.state.blog_EY6 + 1 }; break; }

      case 'F': if (col === 'Y1') { this.state = { ...this.state, blog_FY1: this.state.blog_FY1 + 1 }; break; }
      else if (col === 'Y2') { this.state = { ...this.state, blog_FY2: this.state.blog_FY2 + 1 }; break; }
      else if (col === 'Y3') { this.state = { ...this.state, blog_FY3: this.state.blog_FY3 + 1 }; break; }
      else if (col === 'Y4') { this.state = { ...this.state, blog_FY4: this.state.blog_FY4 + 1 }; break; }
      else if (col === 'Y5') { this.state = { ...this.state, blog_FY5: this.state.blog_FY5 + 1 }; break; }
      else if (col === 'Y6') { this.state = { ...this.state, blog_FY6: this.state.blog_FY6 + 1 }; break; }

      case 'G': if (col === 'Y1') { this.state = { ...this.state, blog_GY1: this.state.blog_GY1 + 1 }; break; }
      else if (col === 'Y2') { this.state = { ...this.state, blog_GY2: this.state.blog_GY2 + 1 }; break; }
      else if (col === 'Y3') { this.state = { ...this.state, blog_GY3: this.state.blog_GY3 + 1 }; break; }
      else if (col === 'Y4') { this.state = { ...this.state, blog_GY4: this.state.blog_GY4 + 1 }; break; }
      else if (col === 'Y5') { this.state = { ...this.state, blog_GY5: this.state.blog_GY5 + 1 }; break; }
      else if (col === 'Y6') { this.state = { ...this.state, blog_GY6: this.state.blog_GY6 + 1 }; break; }

      case 'H': if (col === 'Y1') { this.state = { ...this.state, blog_HY1: this.state.blog_HY1 + 1 }; break; }
      else if (col === 'Y2') { this.state = { ...this.state, blog_HY2: this.state.blog_HY2 + 1 }; break; }
      else if (col === 'Y3') { this.state = { ...this.state, blog_HY3: this.state.blog_HY3 + 1 }; break; }
      else if (col === 'Y4') { this.state = { ...this.state, blog_HY4: this.state.blog_HY4 + 1 }; break; }
      else if (col === 'Y5') { this.state = { ...this.state, blog_HY5: this.state.blog_HY5 + 1 }; break; }
      else if (col === 'Y6') { this.state = { ...this.state, blog_HY6: this.state.blog_HY6 + 1 }; break; }

      case 'I': if (col === 'Y1') { this.state = { ...this.state, blog_IY1: this.state.blog_IY1 + 1 }; break; }
      else if (col === 'Y2') { this.state = { ...this.state, blog_IY2: this.state.blog_IY2 + 1 }; break; }
      else if (col === 'Y3') { this.state = { ...this.state, blog_IY3: this.state.blog_IY3 + 1 }; break; }
      else if (col === 'Y4') { this.state = { ...this.state, blog_IY4: this.state.blog_IY4 + 1 }; break; }
      else if (col === 'Y5') { this.state = { ...this.state, blog_IY5: this.state.blog_IY5 + 1 }; break; }
      else if (col === 'Y6') { this.state = { ...this.state, blog_IY6: this.state.blog_IY6 + 1 }; break; }

      case 'J': if (col === 'Y1') { this.state = { ...this.state, blog_JY1: this.state.blog_JY1 + 1 }; break; }
      else if (col === 'Y2') { this.state = { ...this.state, blog_JY2: this.state.blog_JY2 + 1 }; break; }
      else if (col === 'Y3') { this.state = { ...this.state, blog_JY3: this.state.blog_JY3 + 1 }; break; }
      else if (col === 'Y4') { this.state = { ...this.state, blog_JY4: this.state.blog_JY4 + 1 }; break; }
      else if (col === 'Y5') { this.state = { ...this.state, blog_JY5: this.state.blog_JY5 + 1 }; break; }
      else if (col === 'Y6') { this.state = { ...this.state, blog_JY6: this.state.blog_JY6 + 1 }; break; }

      case 'K': if (col === 'Y1') { this.state = { ...this.state, blog_KY1: this.state.blog_KY1 + 1 }; break; }
      else if (col === 'Y2') { this.state = { ...this.state, blog_KY2: this.state.blog_KY2 + 1 }; break; }
      else if (col === 'Y3') { this.state = { ...this.state, blog_KY3: this.state.blog_KY3 + 1 }; break; }
      else if (col === 'Y4') { this.state = { ...this.state, blog_KY4: this.state.blog_KY4 + 1 }; break; }
      else if (col === 'Y5') { this.state = { ...this.state, blog_KY5: this.state.blog_KY5 + 1 }; break; }
      else if (col === 'Y6') { this.state = { ...this.state, blog_KY6: this.state.blog_KY6 + 1 }; break; }

    }
  }

  checkColor = (e) => {

    e = e / 11;

    if (e === 0) {
      return { backgroundColor: 'white' };
    }
    else if (e > 0 && e <= 10) {
      return { backgroundColor: '#AFEEEE' };
    }
    else if (e > 10 && e <= 20) {
      return { backgroundColor: '#00CCFF' };
    }
    else if (e > 20 && e <= 30) {
      return { backgroundColor: '#0099FF' };
    }
    else if (e > 30 && e <= 40) {
      return { backgroundColor: '#0066FF' };
    }
    else if (e > 40 && e <= 50) {
      return { backgroundColor: '#0033FF', color: 'white' };
    }
    else if (e > 50 && e <= 60) {
      return { backgroundColor: '#0000FF', color: 'white' };
    }
    else if (e > 60 && e <= 70) {
      return { backgroundColor: '#3300CC', color: 'white' };
    }
    else if (e > 70 && e <= 80) {
      return { backgroundColor: '#330099', color: 'white' };
    }
    else if (e > 80 && e <= 90) {
      return { backgroundColor: '#330066', color: 'white' };
    }
    else if (e > 90 && e <= 100) {
      return { backgroundColor: '#330033', color: 'white' };
    }
    else if (e > 100) {
      return { backgroundColor: '#330000', color: 'white' };
    }
  }


  getMatrix = () => {

    let sumrowA = this.state.blog_AY1 + this.state.blog_AY2 + this.state.blog_AY3 + this.state.blog_AY4 + this.state.blog_AY5 + this.state.blog_AY6;
    let sumrowB = this.state.blog_BY1 + this.state.blog_BY2 + this.state.blog_BY3 + this.state.blog_BY4 + this.state.blog_BY5 + this.state.blog_BY6;
    let sumrowC = this.state.blog_CY1 + this.state.blog_CY2 + this.state.blog_CY3 + this.state.blog_CY4 + this.state.blog_CY5 + this.state.blog_CY6;
    let sumrowD = this.state.blog_DY1 + this.state.blog_DY2 + this.state.blog_DY3 + this.state.blog_DY4 + this.state.blog_DY5 + this.state.blog_DY6;
    let sumrowE = this.state.blog_EY1 + this.state.blog_EY2 + this.state.blog_EY3 + this.state.blog_EY4 + this.state.blog_EY5 + this.state.blog_EY6;
    let sumrowF = this.state.blog_FY1 + this.state.blog_FY2 + this.state.blog_FY3 + this.state.blog_FY4 + this.state.blog_FY5 + this.state.blog_FY6;
    let sumrowG = this.state.blog_GY1 + this.state.blog_GY2 + this.state.blog_GY3 + this.state.blog_GY4 + this.state.blog_GY5 + this.state.blog_GY6;
    let sumrowH = this.state.blog_HY1 + this.state.blog_HY2 + this.state.blog_HY3 + this.state.blog_HY4 + this.state.blog_HY5 + this.state.blog_HY6;
    let sumrowI = this.state.blog_IY1 + this.state.blog_IY2 + this.state.blog_IY3 + this.state.blog_IY4 + this.state.blog_IY5 + this.state.blog_IY6;
    let sumrowJ = this.state.blog_JY1 + this.state.blog_JY2 + this.state.blog_JY3 + this.state.blog_JY4 + this.state.blog_JY5 + this.state.blog_JY6;
    let sumrowK = this.state.blog_KY1 + this.state.blog_KY2 + this.state.blog_KY3 + this.state.blog_KY4 + this.state.blog_KY5 + this.state.blog_KY6;

    let sumcol1 = this.state.blog_AY1 + this.state.blog_BY1 + this.state.blog_CY1 + this.state.blog_DY1 + this.state.blog_EY1 + this.state.blog_FY1 + this.state.blog_GY1 + this.state.blog_HY1 + this.state.blog_IY1 + this.state.blog_JY1 + this.state.blog_KY1;
    let sumcol2 = this.state.blog_AY2 + this.state.blog_BY2 + this.state.blog_CY2 + this.state.blog_DY2 + this.state.blog_EY2 + this.state.blog_FY2 + this.state.blog_GY2 + this.state.blog_HY2 + this.state.blog_IY2 + this.state.blog_JY2 + this.state.blog_KY2;
    let sumcol3 = this.state.blog_AY3 + this.state.blog_BY3 + this.state.blog_CY3 + this.state.blog_DY3 + this.state.blog_EY3 + this.state.blog_FY3 + this.state.blog_GY3 + this.state.blog_HY3 + this.state.blog_IY3 + this.state.blog_JY3 + this.state.blog_KY3;
    let sumcol4 = this.state.blog_AY4 + this.state.blog_BY4 + this.state.blog_CY4 + this.state.blog_DY4 + this.state.blog_EY4 + this.state.blog_FY4 + this.state.blog_GY4 + this.state.blog_HY4 + this.state.blog_IY4 + this.state.blog_JY4 + this.state.blog_KY4
    let sumcol5 = this.state.blog_AY5 + this.state.blog_BY5 + this.state.blog_CY5 + this.state.blog_DY5 + this.state.blog_EY5 + this.state.blog_FY5 + this.state.blog_GY5 + this.state.blog_HY5 + this.state.blog_IY5 + this.state.blog_JY5 + this.state.blog_KY5;
    let sumcol6 = this.state.blog_AY6 + this.state.blog_BY6 + this.state.blog_CY6 + this.state.blog_DY6 + this.state.blog_EY6 + this.state.blog_FY6 + this.state.blog_GY6 + this.state.blog_HY6 + this.state.blog_IY6 + this.state.blog_JY6 + this.state.blog_KY6;

    let styleBlogAY1 = this.checkColor(this.state.blog_AY1);
    let styleBlogAY2 = this.checkColor(this.state.blog_AY2);
    let styleBlogAY3 = this.checkColor(this.state.blog_AY3);
    let styleBlogAY4 = this.checkColor(this.state.blog_AY4);
    let styleBlogAY5 = this.checkColor(this.state.blog_AY5);
    let styleBlogAY6 = this.checkColor(this.state.blog_AY6);

    let styleBlogBY1 = this.checkColor(this.state.blog_BY1);
    let styleBlogBY2 = this.checkColor(this.state.blog_BY2);
    let styleBlogBY3 = this.checkColor(this.state.blog_BY3);
    let styleBlogBY4 = this.checkColor(this.state.blog_BY4);
    let styleBlogBY5 = this.checkColor(this.state.blog_BY5);
    let styleBlogBY6 = this.checkColor(this.state.blog_BY6);

    let styleBlogCY1 = this.checkColor(this.state.blog_CY1);
    let styleBlogCY2 = this.checkColor(this.state.blog_CY2);
    let styleBlogCY3 = this.checkColor(this.state.blog_CY3);
    let styleBlogCY4 = this.checkColor(this.state.blog_CY4);
    let styleBlogCY5 = this.checkColor(this.state.blog_CY5);
    let styleBlogCY6 = this.checkColor(this.state.blog_CY6);

    let styleBlogDY1 = this.checkColor(this.state.blog_DY1);
    let styleBlogDY2 = this.checkColor(this.state.blog_DY2);
    let styleBlogDY3 = this.checkColor(this.state.blog_DY3);
    let styleBlogDY4 = this.checkColor(this.state.blog_DY4);
    let styleBlogDY5 = this.checkColor(this.state.blog_DY5);
    let styleBlogDY6 = this.checkColor(this.state.blog_DY6);

    let styleBlogEY1 = this.checkColor(this.state.blog_EY1);
    let styleBlogEY2 = this.checkColor(this.state.blog_EY2);
    let styleBlogEY3 = this.checkColor(this.state.blog_EY3);
    let styleBlogEY4 = this.checkColor(this.state.blog_EY4);
    let styleBlogEY5 = this.checkColor(this.state.blog_EY5);
    let styleBlogEY6 = this.checkColor(this.state.blog_EY6);

    let styleBlogFY1 = this.checkColor(this.state.blog_FY1);
    let styleBlogFY2 = this.checkColor(this.state.blog_FY2);
    let styleBlogFY3 = this.checkColor(this.state.blog_FY3);
    let styleBlogFY4 = this.checkColor(this.state.blog_FY4);
    let styleBlogFY5 = this.checkColor(this.state.blog_FY5);
    let styleBlogFY6 = this.checkColor(this.state.blog_FY6);

    let styleBlogGY1 = this.checkColor(this.state.blog_GY1);
    let styleBlogGY2 = this.checkColor(this.state.blog_GY2);
    let styleBlogGY3 = this.checkColor(this.state.blog_GY3);
    let styleBlogGY4 = this.checkColor(this.state.blog_GY4);
    let styleBlogGY5 = this.checkColor(this.state.blog_GY5);
    let styleBlogGY6 = this.checkColor(this.state.blog_GY6);

    let styleBlogHY1 = this.checkColor(this.state.blog_HY1);
    let styleBlogHY2 = this.checkColor(this.state.blog_HY2);
    let styleBlogHY3 = this.checkColor(this.state.blog_HY3);
    let styleBlogHY4 = this.checkColor(this.state.blog_HY4);
    let styleBlogHY5 = this.checkColor(this.state.blog_HY5);
    let styleBlogHY6 = this.checkColor(this.state.blog_HY6);

    let styleBlogIY1 = this.checkColor(this.state.blog_IY1);
    let styleBlogIY2 = this.checkColor(this.state.blog_IY2);
    let styleBlogIY3 = this.checkColor(this.state.blog_IY3);
    let styleBlogIY4 = this.checkColor(this.state.blog_IY4);
    let styleBlogIY5 = this.checkColor(this.state.blog_IY5);
    let styleBlogIY6 = this.checkColor(this.state.blog_IY6);

    let styleBlogJY1 = this.checkColor(this.state.blog_JY1);
    let styleBlogJY2 = this.checkColor(this.state.blog_JY2);
    let styleBlogJY3 = this.checkColor(this.state.blog_JY3);
    let styleBlogJY4 = this.checkColor(this.state.blog_JY4);
    let styleBlogJY5 = this.checkColor(this.state.blog_JY5);
    let styleBlogJY6 = this.checkColor(this.state.blog_JY6);

    let styleBlogKY1 = this.checkColor(this.state.blog_KY1);
    let styleBlogKY2 = this.checkColor(this.state.blog_KY2);
    let styleBlogKY3 = this.checkColor(this.state.blog_KY3);
    let styleBlogKY4 = this.checkColor(this.state.blog_KY4);
    let styleBlogKY5 = this.checkColor(this.state.blog_KY5);
    let styleBlogKY6 = this.checkColor(this.state.blog_KY6);


    return (<table>
      <tr>
        <th rowSpan="2">ปฏิรูปประเทศ</th>
        <th colSpan="7">ยุทธศาสตร์ชาติ</th>
      </tr>
      <tr>
        <th>1:มั่นคง</th>
        <th>2:แข่งขัน</th>
        <th>3:มนุษย์</th>
        <th>4:เสมอภาค</th>
        <th>5:สิ่งแวดล้อม</th>
        <th>6:ภาครัฐ</th>
        <th>รวม</th>
      </tr>
      <tr>
        <th class="row-with-width-max">1:ทุจริตและประพฤติมิชอบ</th>
        <th class="col" style={styleBlogAY1}>{this.state.blog_AY1}</th>
        <th class="col" style={styleBlogAY2}>{this.state.blog_AY2}</th>
        <th class="col" style={styleBlogAY3}>{this.state.blog_AY3}</th>
        <th class="col" style={styleBlogAY4}>{this.state.blog_AY4}</th>
        <th class="col" style={styleBlogAY5}>{this.state.blog_AY5}</th>
        <th class="col" style={styleBlogAY6}>{this.state.blog_AY6}</th>
        <th class="col">{sumrowA}</th>
      </tr>
      <tr>
        <th class="row-with-width-max">2:เศรษฐกิจ</th>
        <th class="col" style={styleBlogBY1}>{this.state.blog_BY1}</th>
        <th class="col" style={styleBlogBY2}>{this.state.blog_BY2}</th>
        <th class="col" style={styleBlogBY3}>{this.state.blog_BY3}</th>
        <th class="col" style={styleBlogBY4}>{this.state.blog_BY4}</th>
        <th class="col" style={styleBlogBY5}>{this.state.blog_BY5}</th>
        <th class="col" style={styleBlogBY6}>{this.state.blog_BY6}</th>
        <th class="col">{sumrowB}</th>
      </tr>
      <tr>
        <th class="row-with-width-max">3:ทรัพยากรธรรมชาติ</th>
        <th class="col" style={styleBlogCY1}>{this.state.blog_CY1}</th>
        <th class="col" style={styleBlogCY2}>{this.state.blog_CY2}</th>
        <th class="col" style={styleBlogCY3}>{this.state.blog_CY3}</th>
        <th class="col" style={styleBlogCY4}>{this.state.blog_CY4}</th>
        <th class="col" style={styleBlogCY5}>{this.state.blog_CY5}</th>
        <th class="col" style={styleBlogCY6}>{this.state.blog_CY6}</th>
        <th class="col">{sumrowC}</th>
      </tr>
      <tr>
        <th class="row-with-width-max">4:พลังงาน</th>
        <th class="col" style={styleBlogDY1}>{this.state.blog_DY1}</th>
        <th class="col" style={styleBlogDY2}>{this.state.blog_DY2}</th>
        <th class="col" style={styleBlogDY3}>{this.state.blog_DY3}</th>
        <th class="col" style={styleBlogDY4}>{this.state.blog_DY4}</th>
        <th class="col" style={styleBlogDY5}>{this.state.blog_DY5}</th>
        <th class="col" style={styleBlogDY6}>{this.state.blog_DY6}</th>
        <th class="col">{sumrowD}</th>
      </tr>
      <tr>
        <th class="row-with-width-max">5:บริหารราชการแผ่นดิน</th>
        <th class="col" style={styleBlogEY1}>{this.state.blog_EY1}</th>
        <th class="col" style={styleBlogEY2}>{this.state.blog_EY2}</th>
        <th class="col" style={styleBlogEY3}>{this.state.blog_EY3}</th>
        <th class="col" style={styleBlogEY4}>{this.state.blog_EY4}</th>
        <th class="col" style={styleBlogEY5}>{this.state.blog_EY5}</th>
        <th class="col" style={styleBlogEY6}>{this.state.blog_EY6}</th>
        <th class="col">{sumrowE}</th>
      </tr>
      <tr>
        <th class="row-with-width-max">6:สาธารณสุข</th>
        <th class="col" style={styleBlogFY1}>{this.state.blog_FY1}</th>
        <th class="col" style={styleBlogFY2}>{this.state.blog_FY2}</th>
        <th class="col" style={styleBlogFY3}>{this.state.blog_FY3}</th>
        <th class="col" style={styleBlogFY4}>{this.state.blog_FY4}</th>
        <th class="col" style={styleBlogFY5}>{this.state.blog_FY5}</th>
        <th class="col" style={styleBlogFY6}>{this.state.blog_FY6}</th>
        <th class="col">{sumrowF}</th>
      </tr>
      <tr>
        <th class="row-with-width-max">7:กระบวนการยุติธรรม</th>
        <th class="col" style={styleBlogGY1}>{this.state.blog_GY1}</th>
        <th class="col" style={styleBlogGY2}>{this.state.blog_GY2}</th>
        <th class="col" style={styleBlogGY3}>{this.state.blog_GY3}</th>
        <th class="col" style={styleBlogGY4}>{this.state.blog_GY4}</th>
        <th class="col" style={styleBlogGY5}>{this.state.blog_GY5}</th>
        <th class="col" style={styleBlogGY6}>{this.state.blog_GY6}</th>
        <th class="col">{sumrowG}</th>
      </tr>
      <tr>
        <th class="row-with-width-max">8:กฎหมาย</th>
        <th class="col" style={styleBlogHY1}>{this.state.blog_HY1}</th>
        <th class="col" style={styleBlogHY2}>{this.state.blog_HY2}</th>
        <th class="col" style={styleBlogHY3}>{this.state.blog_HY3}</th>
        <th class="col" style={styleBlogHY4}>{this.state.blog_HY4}</th>
        <th class="col" style={styleBlogHY5}>{this.state.blog_HY5}</th>
        <th class="col" style={styleBlogHY6}>{this.state.blog_HY6}</th>
        <th class="col">{sumrowH}</th>
      </tr>
      <tr>
        <th class="row-with-width-max">9:สื่อสารมวลชน</th>
        <th class="col" style={styleBlogIY1}>{this.state.blog_IY1}</th>
        <th class="col" style={styleBlogIY2}>{this.state.blog_IY2}</th>
        <th class="col" style={styleBlogIY3}>{this.state.blog_IY3}</th>
        <th class="col" style={styleBlogIY4}>{this.state.blog_IY4}</th>
        <th class="col" style={styleBlogIY5}>{this.state.blog_IY5}</th>
        <th class="col" style={styleBlogIY6}>{this.state.blog_IY6}</th>
        <th class="col">{sumrowI}</th>
      </tr>
      <tr>
        <th class="row-with-width-max">10:การเมือง</th>
        <th class="col" style={styleBlogJY1}>{this.state.blog_JY1}</th>
        <th class="col" style={styleBlogJY2}>{this.state.blog_JY2}</th>
        <th class="col" style={styleBlogJY3}>{this.state.blog_JY3}</th>
        <th class="col" style={styleBlogJY4}>{this.state.blog_JY4}</th>
        <th class="col" style={styleBlogJY5}>{this.state.blog_JY5}</th>
        <th class="col" style={styleBlogJY6}>{this.state.blog_JY6}</th>
        <th class="col">{sumrowJ}</th>
      </tr>
      <tr>
        <th class="row-with-width-max">11:สังคม</th>
        <th class="col" style={styleBlogKY1}>{this.state.blog_KY1}</th>
        <th class="col" style={styleBlogKY2}>{this.state.blog_KY2}</th>
        <th class="col" style={styleBlogKY3}>{this.state.blog_KY3}</th>
        <th class="col" style={styleBlogKY4}>{this.state.blog_KY4}</th>
        <th class="col" style={styleBlogKY5}>{this.state.blog_KY5}</th>
        <th class="col" style={styleBlogKY6}>{this.state.blog_KY6}</th>
        <th class="col">{sumrowK}</th>
      </tr>
      <tr>
        <th class="row-with-width-max">รวมจำนวนโครงการ</th>
        <th class="col">{sumcol1}</th>
        <th class="col">{sumcol2}</th>
        <th class="col">{sumcol3}</th>
        <th class="col">{sumcol4}</th>
        <th class="col">{sumcol5}</th>
        <th class="col">{sumcol6}</th>
        <th class="col">{sumrowA + sumrowB + sumrowC + sumrowD + sumrowE + sumrowF + sumrowG + sumrowH + sumrowI + sumrowJ + sumrowK}</th>
      </tr>
    </table>);
  }

  render() {

    this.setData();


    return (
      <div>

        <div class="myMatrix">
          {this.getMatrix()}
        </div>



      </div>
    );
  }
}

export default page;
