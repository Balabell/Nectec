import './style.css';
import myDataOuter from './data/outer';
import myDataInner from './data/inner';
import myDataLevel1_2 from './data/org-level1-2';
import myDataLevel2_3 from './data/org-level2-3';
import minusPic from './picture/minus.png';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class pagenew1_2_3 extends Component {

    constructor() {
        super();

    }

    setLoop = (e) => {
        let cnt = 0;

        while (this.state.listRowLevel2[e][cnt] != null) {
            cnt = cnt + 1;
        }

        return cnt;
    }

    setLoop2 = (e) => {

        let cnt = 0;

        while (this.state.listRowLevel2[e][cnt] != null) {

            cnt = cnt + 1;
        }
        

        let x = 0;

        for (let i = 0; i < cnt; i++) {

            x = x + this.state.listsetLoop2[this.state.cntLevel3InSetLoop2];
            this.state.cntLevel3InSetLoop2 = this.state.cntLevel3InSetLoop2 + 1;
        }

        cnt = x;

        return cnt;
    }

    setData = () => {

        this.state = {
            ...this.state, blog: [], styleBlog: [], sumRow: [], sumCol: [], cntRowBlog: 0,
            listRowLevel1: [], listRowLevel2: [], listRowLevel3: [],
            currentLevel1: this.props.myCurrentLevel1, currentLevel2: this.props.myCurrentLevel2, currentLevel3: this.props.myCurrentLevel3,
            listsetLoop2: [], cntLevel3InSetLoop2: 0
        };


        let cntL2 = 0;


        if (this.state.currentLevel1 === 'ทุกประเภท') {
            if (this.state.currentLevel2 === 'ทุกประเภท' && this.state.currentLevel3 === 'ทุกประเภท') {  // all all all

                //alert('Please wait a moment :)');

                let cntOfL3 = 0;

                myDataLevel1_2.map((item, index) => {

                    this.state.listRowLevel1.push(item.level1);

                    this.state.listRowLevel2.push([]);
                    for (let i = 0; i < item.level2.length; i++) {
                        this.state.listRowLevel2[index][i] = item.level2[i]
                    }

                });


                //console.log('cntOfL3 is ' + cntOfL3);


                for (let i = 0; i < this.state.listRowLevel1.length; i++) {

                    let cnt = this.setLoop(i);

                    for (let j = 0; j < cnt; j++) {

                        myDataLevel2_3.map((item2, index2) => {

                            if (item2.level1 == this.state.listRowLevel1[i] && item2.level2 == this.state.listRowLevel2[i][j]) {

                                for (let j = 0; j < item2.level3.length; j++) {
                                    if (item2.level3 != "") {
                                        this.state.listRowLevel3.push(item2.level3[j]);

                                    }
                                    else {
                                        this.state.listRowLevel3.push(' - ');
                                    }
                                    cntOfL3 = cntOfL3 + 1;
                                }

                                this.state.listsetLoop2.push(cntOfL3);

                                cntOfL3 = 0;
                            }
                        });

                    }

                }


                let test = 0;


                myDataLevel2_3.map((item, index2) => {
                    if (item.level3 != "") {
                        test = test + item.level3.length
                    }
                    else {
                        test = test + 1;
                    }
                });

                this.state.cntRowBlog = test;

            }
            else if (this.state.currentLevel2 === 'ทุกประเภท') { // all all ...

                // this.state.dataLevel1 = [];
                // this.state.dataLevel2 = [];

                // myDataOuter.map((item) => {
                //     if (item.Level1 !== "" && item.Level2 !== "" && item.Level3 !== "") {

                //         if (this.state.currentLevel3 === item.Level3) {

                //             this.state.dataLevel1.push(item.Level1);
                //             this.state.dataLevel2.push(item.Level2);
                //         }
                //     }
                // });

            }
            else if (this.state.currentLevel3 === 'ทุกประเภท') { // all ... all

                // // this.state.dataLevel1 = [];
                // // this.state.listRowLevel3 = [];

                // myDataOuter.map((item) => {
                //     if (item.Level1 !== "" && item.Level2 !== "" && item.Level3 !== "") {

                //         if (this.state.currentLevel2 === item.Level2) {

                //             //this.state.dataLevel1.push(item.Level1);
                //             this.state.listRowLevel3.push(item.Level3);
                //         }
                //     }
                // });

            }
            else if (this.state.currentLevel2 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท') { // all ... ...

                // // this.state.dataLevel1 = [];
                // // this.state.listRowLevel3 = [];

                // myDataOuter.map((item) => {
                //     if (item.Level1 !== "" && item.Level2 !== "" && item.Level3 !== "") {

                //         if (this.state.currentLevel2 === item.Level2) {
                //             this.state.listRowLevel3.push(item.Level3);
                //         }

                //         if (this.state.currentLevel2 === item.Level2 && this.state.currentLevel3 === item.Level3) {
                //             //this.state.dataLevel1.push(item.Level1);
                //         }
                //     }
                // });
            }
        }
        else if (this.state.currentLevel2 === 'ทุกประเภท') {
            if (this.state.currentLevel3 === 'ทุกประเภท') {  // ... all all

                this.state.listRowLevel1.push(this.state.currentLevel1);
                this.state.listRowLevel2.push([]);

                this.state.listRowLevel1.map((item1, index1) => {

                    myDataLevel1_2.map((item3, index2) => {
                        if (item3.level1 == this.state.currentLevel1) {

                            for (let i = 0; i < item3.level2.length; i++) {
                                this.state.listRowLevel2[index1][i] = item3.level2[i]
                            }
                        }
                    });

                });

                let cntOfL3 = 0;

                for (let i = 0; i < this.state.listRowLevel1.length; i++) {

                    let cnt = this.setLoop(i);

                    for (let j = 0; j < cnt; j++) {

                        myDataLevel2_3.map((item2, index2) => {

                            if (item2.level1 == this.state.listRowLevel1[i] && item2.level2 == this.state.listRowLevel2[i][j]) {

                                for (let j = 0; j < item2.level3.length; j++) {
                                    if (item2.level3 != "") {
                                        this.state.listRowLevel3.push(item2.level3[j]);

                                    }
                                    else {
                                        this.state.listRowLevel3.push(' - ');
                                    }
                                    cntOfL3 = cntOfL3 + 1;
                                }

                                this.state.listsetLoop2.push(cntOfL3);

                                cntOfL3 = 0;
                            }
                        });

                    }

                }


                let test = 0;

                myDataLevel2_3.map((item, index2) => {
                    if (item.level3 != "") {
                        test = test + item.level3.length
                    }
                    else {
                        test = test + 1;
                    }
                });

                this.state.cntRowBlog = test;


            }
            else if (this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท') {// ... all ...

                // // this.state.dataLevel2 = [];
                // // this.state.listRowLevel3 = [];

                // myDataOuter.map((item) => {
                //     if (item.Level1 !== "" && item.Level2 !== "" && item.Level3 !== "") {

                //         if (this.state.currentLevel1 === item.Level1) {
                //             this.state.listRowLevel3.push(item.Level3);
                //         }

                //         if (this.state.currentLevel1 === item.Level1 && this.state.currentLevel3 === item.Level3) {
                //             //this.state.dataLevel2.push(item.Level2);
                //         }
                //     }
                // });

            }
        }
        else if (this.state.currentLevel3 === 'ทุกประเภท') {
            if (this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel2 !== 'ทุกประเภท') { // ... ... all


                this.state.listRowLevel1.push(this.state.currentLevel1);
                this.state.listRowLevel2.push([]);

                this.state.listRowLevel1.map((item1, index1) => {

                    myDataLevel1_2.map((item3, index2) => {
                        if (item3.level1 == this.state.currentLevel1) {

                            for (let i = 0; i < item3.level2.length; i++) {

                                if (item3.level2[i] == this.state.currentLevel2) {
                                    this.state.listRowLevel2[index1][0] = item3.level2[i];
                                }

                            }
                        }
                    });

                });

                let cntOfL3 = 0;

                for (let i = 0; i < this.state.listRowLevel1.length; i++) {

                    let cnt = this.setLoop(i);

                    for (let j = 0; j < cnt; j++) {

                        myDataLevel2_3.map((item2, index2) => {

                            if (item2.level1 == this.state.listRowLevel1[i] && item2.level2 == this.state.listRowLevel2[i][j]) {

                                for (let j = 0; j < item2.level3.length; j++) {
                                    if (item2.level3 != "") {
                                        this.state.listRowLevel3.push(item2.level3[j]);

                                    }
                                    else {
                                        this.state.listRowLevel3.push(' - ');
                                    }
                                    cntOfL3 = cntOfL3 + 1;
                                }

                                this.state.listsetLoop2.push(cntOfL3);

                                cntOfL3 = 0;
                            }
                        });

                    }

                }


                let test = 0;

                myDataLevel2_3.map((item, index2) => {
                    if (item.level3 != "") {
                        test = test + item.level3.length
                    }
                    else {
                        test = test + 1;
                    }
                });

                this.state.cntRowBlog = test;

            }
        }
        else if (this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel2 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท') { // ... ... ...

            this.state.listRowLevel1.push(this.state.currentLevel1);
            this.state.listRowLevel2.push([]);

            this.state.listRowLevel1.map((item1, index1) => {

                myDataLevel1_2.map((item3, index2) => {
                    if (item3.level1 == this.state.currentLevel1) {

                        for (let i = 0; i < item3.level2.length; i++) {

                            if (item3.level2[i] == this.state.currentLevel2) {
                                this.state.listRowLevel2[index1][0] = item3.level2[i];
                            }

                        }
                    }
                });

            });

            this.state.listRowLevel3.push(this.state.currentLevel3);
            this.state.listsetLoop2.push(1);


            let test = 0;

            myDataLevel2_3.map((item, index2) => {
                if (item.level3 != "") {
                    test = test + item.level3.length
                }
                else {
                    test = test + 1;
                }
            });

            this.state.cntRowBlog = test;

        }



        //console.log('!!!!!!!!!!!!!!!!!!!!!!!this.state.cntRowBlog is ' + this.state.cntRowBlog)
        // !-------- edit ---------!//
        for (let i = 0; i < this.state.cntRowBlog; i++) {
            this.state.blog.push([]);
            this.state.styleBlog.push([])
            this.state.sumRow[i] = 0;
            for (let j = 0; j < 11; j++) {
                this.state.blog[i][j] = 0;
            }
        }


        let cnt2 = 0, CNT = 0, setloop2 = 0;

        for (let i = 0; i < this.state.listRowLevel1.length; i++) {

            let cnt1_1 = this.setLoop(i);

            for (let j = 0; j < cnt1_1; j++) {

                for (let l = 0; l < this.state.listsetLoop2[setloop2]; l++) {

                    myDataInner.map((item3, index3) => {

                        if (item3.Level1 != "" && item3.Level2 != "" && item3.Level3 != "" && item3.Direct_Reform !== "") {
                            if (this.state.listRowLevel1[i] === item3.Level1 && this.state.listRowLevel2[i][j] === item3.Level2 && this.state.currentLevel1 === 'ทุกประเภท') {
                                if (this.state.currentLevel2 === 'ทุกประเภท' && this.state.currentLevel3 === 'ทุกประเภท' && item3.Direct_Strategy !== "" &&
                                    item3.Level3 == this.state.listRowLevel3[cnt2]) {  // all all all

                                        switch (this.setSplit(item3.Direct_Reform)) {
                                            case 'A': this.state.blog[cnt2][0] = this.state.blog[cnt2][0] + 1; break;
                                            case 'B': this.state.blog[cnt2][1] = this.state.blog[cnt2][1] + 1; break;
                                            case 'C': this.state.blog[cnt2][2] = this.state.blog[cnt2][2] + 1; break;
                                            case 'D': this.state.blog[cnt2][3] = this.state.blog[cnt2][3] + 1; break;
                                            case 'E': this.state.blog[cnt2][4] = this.state.blog[cnt2][4] + 1; break;
                                            case 'F': this.state.blog[cnt2][5] = this.state.blog[cnt2][5] + 1; break;
                                            case 'G': this.state.blog[cnt2][6] = this.state.blog[cnt2][6] + 1; break;
                                            case 'H': this.state.blog[cnt2][7] = this.state.blog[cnt2][7] + 1; break;
                                            case 'I': this.state.blog[cnt2][8] = this.state.blog[cnt2][8] + 1; break;
                                            case 'J': this.state.blog[cnt2][9] = this.state.blog[cnt2][9] + 1; break;
                                            case 'K': this.state.blog[cnt2][10] = this.state.blog[cnt2][10] + 1; break;
                                        }

                                }
                                else if (this.state.currentLevel2 === 'ทุกประเภท' && this.state.currentLevel3 === item3.Level3 && item3.Direct_Strategy !== "" &&
                                    item3.Level3 == this.state.listRowLevel3[cnt2]) { // all all ...

                                        switch (this.setSplit(item3.Direct_Reform)) {
                                            case 'A': this.state.blog[cnt2][0] = this.state.blog[cnt2][0] + 1; break;
                                            case 'B': this.state.blog[cnt2][1] = this.state.blog[cnt2][1] + 1; break;
                                            case 'C': this.state.blog[cnt2][2] = this.state.blog[cnt2][2] + 1; break;
                                            case 'D': this.state.blog[cnt2][3] = this.state.blog[cnt2][3] + 1; break;
                                            case 'E': this.state.blog[cnt2][4] = this.state.blog[cnt2][4] + 1; break;
                                            case 'F': this.state.blog[cnt2][5] = this.state.blog[cnt2][5] + 1; break;
                                            case 'G': this.state.blog[cnt2][6] = this.state.blog[cnt2][6] + 1; break;
                                            case 'H': this.state.blog[cnt2][7] = this.state.blog[cnt2][7] + 1; break;
                                            case 'I': this.state.blog[cnt2][8] = this.state.blog[cnt2][8] + 1; break;
                                            case 'J': this.state.blog[cnt2][9] = this.state.blog[cnt2][9] + 1; break;
                                            case 'K': this.state.blog[cnt2][10] = this.state.blog[cnt2][10] + 1; break;
                                        }
                                }
                                else if (this.state.currentLevel3 === 'ทุกประเภท' && this.state.currentLevel2 === item3.Level2 && item3.Direct_Strategy !== "" &&
                                    item3.Level3 == this.state.listRowLevel3[cnt2]) { // all ... all

                                        switch (this.setSplit(item3.Direct_Reform)) {
                                            case 'A': this.state.blog[cnt2][0] = this.state.blog[cnt2][0] + 1; break;
                                            case 'B': this.state.blog[cnt2][1] = this.state.blog[cnt2][1] + 1; break;
                                            case 'C': this.state.blog[cnt2][2] = this.state.blog[cnt2][2] + 1; break;
                                            case 'D': this.state.blog[cnt2][3] = this.state.blog[cnt2][3] + 1; break;
                                            case 'E': this.state.blog[cnt2][4] = this.state.blog[cnt2][4] + 1; break;
                                            case 'F': this.state.blog[cnt2][5] = this.state.blog[cnt2][5] + 1; break;
                                            case 'G': this.state.blog[cnt2][6] = this.state.blog[cnt2][6] + 1; break;
                                            case 'H': this.state.blog[cnt2][7] = this.state.blog[cnt2][7] + 1; break;
                                            case 'I': this.state.blog[cnt2][8] = this.state.blog[cnt2][8] + 1; break;
                                            case 'J': this.state.blog[cnt2][9] = this.state.blog[cnt2][9] + 1; break;
                                            case 'K': this.state.blog[cnt2][10] = this.state.blog[cnt2][10] + 1; break;
                                        }

                                }
                                else if (this.state.currentLevel2 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท' &&
                                    this.state.currentLevel2 === item3.Level2 && this.state.currentLevel3 === item3.Level3 &&
                                    item3.Direct_Strategy !== "" && item3.Level3 == this.state.listRowLevel3[cnt2]) { // all ... ...

                                        switch (this.setSplit(item3.Direct_Reform)) {
                                            case 'A': this.state.blog[cnt2][0] = this.state.blog[cnt2][0] + 1; break;
                                            case 'B': this.state.blog[cnt2][1] = this.state.blog[cnt2][1] + 1; break;
                                            case 'C': this.state.blog[cnt2][2] = this.state.blog[cnt2][2] + 1; break;
                                            case 'D': this.state.blog[cnt2][3] = this.state.blog[cnt2][3] + 1; break;
                                            case 'E': this.state.blog[cnt2][4] = this.state.blog[cnt2][4] + 1; break;
                                            case 'F': this.state.blog[cnt2][5] = this.state.blog[cnt2][5] + 1; break;
                                            case 'G': this.state.blog[cnt2][6] = this.state.blog[cnt2][6] + 1; break;
                                            case 'H': this.state.blog[cnt2][7] = this.state.blog[cnt2][7] + 1; break;
                                            case 'I': this.state.blog[cnt2][8] = this.state.blog[cnt2][8] + 1; break;
                                            case 'J': this.state.blog[cnt2][9] = this.state.blog[cnt2][9] + 1; break;
                                            case 'K': this.state.blog[cnt2][10] = this.state.blog[cnt2][10] + 1; break;
                                        }


                                }
                            }
                            else if (this.state.listRowLevel1[i] === item3.Level1 && this.state.listRowLevel2[i][j] === item3.Level2 && this.state.listRowLevel1[i] === this.state.currentLevel1 && this.state.currentLevel2 === 'ทุกประเภท') {
                                if (this.state.currentLevel3 === 'ทุกประเภท' && item3.Direct_Strategy !== "" &&
                                    item3.Level3 == this.state.listRowLevel3[cnt2]) {  // ... all all

                                        switch (this.setSplit(item3.Direct_Reform)) {
                                            case 'A': this.state.blog[cnt2][0] = this.state.blog[cnt2][0] + 1; break;
                                            case 'B': this.state.blog[cnt2][1] = this.state.blog[cnt2][1] + 1; break;
                                            case 'C': this.state.blog[cnt2][2] = this.state.blog[cnt2][2] + 1; break;
                                            case 'D': this.state.blog[cnt2][3] = this.state.blog[cnt2][3] + 1; break;
                                            case 'E': this.state.blog[cnt2][4] = this.state.blog[cnt2][4] + 1; break;
                                            case 'F': this.state.blog[cnt2][5] = this.state.blog[cnt2][5] + 1; break;
                                            case 'G': this.state.blog[cnt2][6] = this.state.blog[cnt2][6] + 1; break;
                                            case 'H': this.state.blog[cnt2][7] = this.state.blog[cnt2][7] + 1; break;
                                            case 'I': this.state.blog[cnt2][8] = this.state.blog[cnt2][8] + 1; break;
                                            case 'J': this.state.blog[cnt2][9] = this.state.blog[cnt2][9] + 1; break;
                                            case 'K': this.state.blog[cnt2][10] = this.state.blog[cnt2][10] + 1; break;
                                        }

                                }
                                else if (this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท' &&
                                    this.state.currentLevel1 === item3.Level1 && this.state.currentLevel3 === item3.Level3 &&
                                    item3.Direct_Strategy !== "" && item3.Level3 == this.state.listRowLevel3[cnt2]) {// ... all ...

                                        switch (this.setSplit(item3.Direct_Reform)) {
                                            case 'A': this.state.blog[cnt2][0] = this.state.blog[cnt2][0] + 1; break;
                                            case 'B': this.state.blog[cnt2][1] = this.state.blog[cnt2][1] + 1; break;
                                            case 'C': this.state.blog[cnt2][2] = this.state.blog[cnt2][2] + 1; break;
                                            case 'D': this.state.blog[cnt2][3] = this.state.blog[cnt2][3] + 1; break;
                                            case 'E': this.state.blog[cnt2][4] = this.state.blog[cnt2][4] + 1; break;
                                            case 'F': this.state.blog[cnt2][5] = this.state.blog[cnt2][5] + 1; break;
                                            case 'G': this.state.blog[cnt2][6] = this.state.blog[cnt2][6] + 1; break;
                                            case 'H': this.state.blog[cnt2][7] = this.state.blog[cnt2][7] + 1; break;
                                            case 'I': this.state.blog[cnt2][8] = this.state.blog[cnt2][8] + 1; break;
                                            case 'J': this.state.blog[cnt2][9] = this.state.blog[cnt2][9] + 1; break;
                                            case 'K': this.state.blog[cnt2][10] = this.state.blog[cnt2][10] + 1; break;
                                        }

                                }
                            }
                            else if (this.state.listRowLevel1[i] === item3.Level1 && this.state.listRowLevel2[i][j] === item3.Level2 && this.state.currentLevel3 === 'ทุกประเภท') {
                                if (this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel2 !== 'ทุกประเภท' &&
                                    this.state.currentLevel1 === item3.Level1 && this.state.currentLevel2 === item3.Level2 &&
                                    item3.Direct_Strategy !== "" && item3.Level3 == this.state.listRowLevel3[cnt2]) { // ... ... all

                                        switch (this.setSplit(item3.Direct_Reform)) {
                                            case 'A': this.state.blog[cnt2][0] = this.state.blog[cnt2][0] + 1; break;
                                            case 'B': this.state.blog[cnt2][1] = this.state.blog[cnt2][1] + 1; break;
                                            case 'C': this.state.blog[cnt2][2] = this.state.blog[cnt2][2] + 1; break;
                                            case 'D': this.state.blog[cnt2][3] = this.state.blog[cnt2][3] + 1; break;
                                            case 'E': this.state.blog[cnt2][4] = this.state.blog[cnt2][4] + 1; break;
                                            case 'F': this.state.blog[cnt2][5] = this.state.blog[cnt2][5] + 1; break;
                                            case 'G': this.state.blog[cnt2][6] = this.state.blog[cnt2][6] + 1; break;
                                            case 'H': this.state.blog[cnt2][7] = this.state.blog[cnt2][7] + 1; break;
                                            case 'I': this.state.blog[cnt2][8] = this.state.blog[cnt2][8] + 1; break;
                                            case 'J': this.state.blog[cnt2][9] = this.state.blog[cnt2][9] + 1; break;
                                            case 'K': this.state.blog[cnt2][10] = this.state.blog[cnt2][10] + 1; break;
                                        }
                                }
                            }
                            else if (this.state.listRowLevel1[i] === item3.Level1 && this.state.listRowLevel2[i][j] === item3.Level2 && this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel2 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท'
                                && this.state.currentLevel1 === item3.Level1 && this.state.currentLevel2 === item3.Level2 && this.state.currentLevel3 === item3.Level3 &&
                                item3.Direct_Strategy !== "" && item3.Level3 == this.state.listRowLevel3[cnt2]) { // ... ... ...

                                    switch (this.setSplit(item3.Direct_Reform)) {
                                        case 'A': this.state.blog[cnt2][0] = this.state.blog[cnt2][0] + 1; break;
                                        case 'B': this.state.blog[cnt2][1] = this.state.blog[cnt2][1] + 1; break;
                                        case 'C': this.state.blog[cnt2][2] = this.state.blog[cnt2][2] + 1; break;
                                        case 'D': this.state.blog[cnt2][3] = this.state.blog[cnt2][3] + 1; break;
                                        case 'E': this.state.blog[cnt2][4] = this.state.blog[cnt2][4] + 1; break;
                                        case 'F': this.state.blog[cnt2][5] = this.state.blog[cnt2][5] + 1; break;
                                        case 'G': this.state.blog[cnt2][6] = this.state.blog[cnt2][6] + 1; break;
                                        case 'H': this.state.blog[cnt2][7] = this.state.blog[cnt2][7] + 1; break;
                                        case 'I': this.state.blog[cnt2][8] = this.state.blog[cnt2][8] + 1; break;
                                        case 'J': this.state.blog[cnt2][9] = this.state.blog[cnt2][9] + 1; break;
                                        case 'K': this.state.blog[cnt2][10] = this.state.blog[cnt2][10] + 1; break;
                                    }
                            }
                        }

                    })
                    cnt2 = cnt2 + 1;
                }
                setloop2 = setloop2 + 1;


            }


        }

        //console.log('cnt2 is ' + cnt2);


        for (let i = 0; i < this.state.cntRowBlog; i++) {
            this.state.sumRow[i] = 0;
            for (let j = 0; j < 11; j++) {
                this.state.styleBlog[i][j] = this.checkColor(this.state.blog[i][j]);
                this.state.sumRow[i] = this.state.sumRow[i] + this.state.blog[i][j];
            }
        }



        let cnt = 0;
        for (var i = 0; i < 11; i++) {
            this.state.sumCol[i] = 0;

            for (var j = 0; j < this.state.cntRowBlog; j++) {
                this.state.sumCol[i] = this.state.sumCol[i] + this.state.blog[j][cnt];

            }
            cnt = cnt + 1;
        }

    }

    uniqueArray = (oList) => {

        return oList.reduce(function (a, d, i) {
            if (a.indexOf(d) === -1) {
                a.push(d);
            }

            return a;

        }, []);

    }

    setSplit = (e) => {

        let temp = e.split('');
        let col = temp[0];

        return col;

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
        else if (e > 100 && e <= 110) {
            return { backgroundColor: '#330000', color: 'white' };
        }
        else if (e > 110) {
            return { backgroundColor: 'black', color: 'white' };
        }
    }

    createTable = () => {

        let table = [];
        let sum = 0;
        let cnt3 = 0;

        // for (let i = 0; i < this.state.cntRowBlog; i++) {
        //     sum = sum + this.state.sumRow[i];
        // }

        table.push(<tr>
            <th rowSpan="2" colSpan="3" class="boxplus1"></th>
            <th colSpan="12">ปฏิรูปประเทศ</th>
        </tr>);

        table.push(
            <tr>
                <th class="maxLencol">1:ทุจริตและประพฤติมิชอบ</th>
                <th class="maxLencol">2:เศรษฐกิจ</th>
                <th class="maxLencol">3:ทรัพยากร ธรรมชาติ</th>
                <th class="maxLencol">4:พลังงาน</th>
                <th class="maxLencol">5:บริหารราชการแผ่นดิน</th>
                <th class="maxLencol">6:สาธารณสุข</th>
                <th class="maxLencol">7:กระบวนการยุติธรรม</th>
                <th class="maxLencol">8:กฎหมาย</th>
                <th class="maxLencol">9:สื่อสารมวลชน</th>
                <th class="maxLencol">10:การเมือง</th>
                <th class="maxLencol">11:สังคม</th>
                <th class="maxLencol">รวม</th>
            </tr>
        );

        table.push(<tr>
            <th colSpan="3" class="row">รวมจำนวนโครงการ</th>
            {this.state.sumCol.map((item1, index1) => {
                sum = sum + this.state.sumCol[index1];
                return (<th class="col">{this.state.sumCol[index1]}</th>)
            })}
            <th class="col">{sum}</th>
        </tr>);


        let cnt2 = 0, CNT = 0, setloop2 = 0;

        for (let i = 0; i < this.state.listRowLevel1.length; i++) {

            let children = []
            let cnt1_1 = this.setLoop(i);
            let cnt1_2 = this.setLoop2(i);

            //console.log('cnt is ' + cnt1_2);

            children.push(<th rowSpan={cnt1_2} class="row-with-width-max1">{this.state.listRowLevel1[i]}</th>)

            for (let j = 0; j < cnt1_1; j++) {
                children.push(<th rowSpan={this.state.listsetLoop2[setloop2]} class="row-with-width-max2">{this.state.listRowLevel2[i][j]}</th>)

                for (let l = 0; l < this.state.listsetLoop2[setloop2]; l++) {
                    children.push(<th class="row-with-width-max3">{this.state.listRowLevel3[CNT]}</th>)


                    for (let k = 0; k < 11; k++) {
                        children.push(<th class="col" style={this.state.styleBlog[cnt2][k]}>{this.state.blog[cnt2][k]}</th>)
                    }
                    children.push(<th class="col">{this.state.sumRow[cnt2]}</th>)

                    table.push(<tr>{children}</tr>)
                    children = []

                    cnt2 = cnt2 + 1;
                    CNT = CNT + 1;
                }
                setloop2 = setloop2 + 1;

            }


        }


        return table


    }

    render() {

          this.setData();

        return (
            <div>

                <div class="myMatrix">
                    <table>
                        {this.createTable()}
                    </table>
                </div>

                <Link to={'/new1'}><img class="newminus1" src={minusPic} width='10px' height='10px' /></Link>
                <Link to={'/new1_2'}><img class="newminus2" src={minusPic} width='10px' height='10px' /></Link>

            </div >
        );
    }
}

export default pagenew1_2_3;
