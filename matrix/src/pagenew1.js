import './style.css';
import myDataInner from './data/inner';
import myDataLevel1_2 from './data/org-level1-2';
import plusPic from './picture/plus.png';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class pagenew1 extends Component {

    constructor() {

        super();

    }

    setData = () => {


        this.state = {
            ...this.state, blog: [], styleBlog: [], sumRow: [], sumCol: [], listRow: [],
            currentLevel1: this.props.myCurrentLevel1, currentLevel2: this.props.myCurrentLevel2, currentLevel3: this.props.myCurrentLevel3
        };


        if (this.state.currentLevel1 === 'ทุกประเภท') {
            if (this.state.currentLevel2 === 'ทุกประเภท' && this.state.currentLevel3 === 'ทุกประเภท') {  // all all all

                myDataLevel1_2.map((item, index) => {

                    this.state.listRow.push(item.level1);

                });


            }
            else if (this.state.currentLevel2 === 'ทุกประเภท') { // all all ...

                myDataLevel1_2.map((item, index) => {

                    this.state.listRow.push(item.level1);

                });

            }
            else if (this.state.currentLevel3 === 'ทุกประเภท') { // all ... all

                myDataLevel1_2.map((item, index) => {

                    this.state.listRow.push(item.level1);

                });

            }
            else if (this.state.currentLevel2 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท') { // all ... ...

                myDataLevel1_2.map((item, index) => {

                    this.state.listRow.push(item.level1);

                });
            }
        }

        else if (this.state.currentLevel2 === 'ทุกประเภท') {
            if (this.state.currentLevel3 === 'ทุกประเภท') {  // ... all all

                this.state.listRow.push(this.state.currentLevel1);

            }
            else if (this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท') {// ... all ...

                this.state.listRow.push(this.state.currentLevel1);

            }
        }

        else if (this.state.currentLevel3 === 'ทุกประเภท') {
            if (this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel2 !== 'ทุกประเภท') { // ... ... all

                this.state.listRow.push(this.state.currentLevel1);

            }

        }

        else if (this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel2 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท') { // ... ... ...

            this.state.listRow.push(this.state.currentLevel1);
        }



        //var blog = [];
        for (var i = 0; i < this.state.listRow.length; i++) {
            //console.log('this.state.listRow is ' + this.state.listRow[i]);
            this.state.blog.push([]);
            for (var j = 0; j < 11; j++) {
                this.state.blog[i][j] = 0;
                ////alert('this.state.blog[' + i +'][' + j + '] ' + this.state.blog[i][j]);
            }
        }


        this.state.listRow.map((item1, index1) => {
            myDataInner.map((item2, index2) => {

                if (item1 === item2.Level1 && this.state.currentLevel1 === 'ทุกประเภท' && item2.Level1 !== "" && item2.Level2 !== "" && item2.Level3 !== "") {
                    if (this.state.currentLevel2 === 'ทุกประเภท' && this.state.currentLevel3 === 'ทุกประเภท' && item2.Direct_Strategy !== "" 
                        && item2.Direct_Reform !== "") {  // all all all
                        switch (this.setSplit(item2.Direct_Reform)) {
                            case 'A': this.state.blog[index1][0] = this.state.blog[index1][0] + 1; break;
                            case 'B': this.state.blog[index1][1] = this.state.blog[index1][1] + 1; break;
                            case 'C': this.state.blog[index1][2] = this.state.blog[index1][2] + 1; break;
                            case 'D': this.state.blog[index1][3] = this.state.blog[index1][3] + 1; break;
                            case 'E': this.state.blog[index1][4] = this.state.blog[index1][4] + 1; break;
                            case 'F': this.state.blog[index1][5] = this.state.blog[index1][5] + 1; break;
                            case 'G': this.state.blog[index1][6] = this.state.blog[index1][6] + 1; break;
                            case 'H': this.state.blog[index1][7] = this.state.blog[index1][7] + 1; break;
                            case 'I': this.state.blog[index1][8] = this.state.blog[index1][8] + 1; break;
                            case 'J': this.state.blog[index1][9] = this.state.blog[index1][9] + 1; break;
                            case 'K': this.state.blog[index1][10] = this.state.blog[index1][10] + 1; break;
                        }

                    }
                    else if (this.state.currentLevel2 === 'ทุกประเภท' && this.state.currentLevel3 === item2.Level3 && item2.Direct_Strategy !== ""
                             && item2.Direct_Reform !== "") { // all all ...
                        switch (this.setSplit(item2.Direct_Reform)) {
                            case 'A': this.state.blog[index1][0] = this.state.blog[index1][0] + 1; break;
                            case 'B': this.state.blog[index1][1] = this.state.blog[index1][1] + 1; break;
                            case 'C': this.state.blog[index1][2] = this.state.blog[index1][2] + 1; break;
                            case 'D': this.state.blog[index1][3] = this.state.blog[index1][3] + 1; break;
                            case 'E': this.state.blog[index1][4] = this.state.blog[index1][4] + 1; break;
                            case 'F': this.state.blog[index1][5] = this.state.blog[index1][5] + 1; break;
                            case 'G': this.state.blog[index1][6] = this.state.blog[index1][6] + 1; break;
                            case 'H': this.state.blog[index1][7] = this.state.blog[index1][7] + 1; break;
                            case 'I': this.state.blog[index1][8] = this.state.blog[index1][8] + 1; break;
                            case 'J': this.state.blog[index1][9] = this.state.blog[index1][9] + 1; break;
                            case 'K': this.state.blog[index1][10] = this.state.blog[index1][10] + 1; break;
                        }
                    }
                    else if (this.state.currentLevel3 === 'ทุกประเภท' && this.state.currentLevel2 === item2.Level2 && item2.Direct_Strategy !== ""
                            && item2.Direct_Reform !== "") { // all ... all
                        switch (this.setSplit(item2.Direct_Reform)) {
                            case 'A': this.state.blog[index1][0] = this.state.blog[index1][0] + 1; break;
                            case 'B': this.state.blog[index1][1] = this.state.blog[index1][1] + 1; break;
                            case 'C': this.state.blog[index1][2] = this.state.blog[index1][2] + 1; break;
                            case 'D': this.state.blog[index1][3] = this.state.blog[index1][3] + 1; break;
                            case 'E': this.state.blog[index1][4] = this.state.blog[index1][4] + 1; break;
                            case 'F': this.state.blog[index1][5] = this.state.blog[index1][5] + 1; break;
                            case 'G': this.state.blog[index1][6] = this.state.blog[index1][6] + 1; break;
                            case 'H': this.state.blog[index1][7] = this.state.blog[index1][7] + 1; break;
                            case 'I': this.state.blog[index1][8] = this.state.blog[index1][8] + 1; break;
                            case 'J': this.state.blog[index1][9] = this.state.blog[index1][9] + 1; break;
                            case 'K': this.state.blog[index1][10] = this.state.blog[index1][10] + 1; break;
                        }

                    }
                    else if (this.state.currentLevel2 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท' &&
                        this.state.currentLevel2 === item2.Level2 && this.state.currentLevel3 === item2.Level3 &&
                        item2.Direct_Strategy !== "" && item2.Direct_Reform !== "") { // all ... ...

                        switch (this.setSplit(item2.Direct_Reform)) {
                            case 'A': this.state.blog[index1][0] = this.state.blog[index1][0] + 1; break;
                            case 'B': this.state.blog[index1][1] = this.state.blog[index1][1] + 1; break;
                            case 'C': this.state.blog[index1][2] = this.state.blog[index1][2] + 1; break;
                            case 'D': this.state.blog[index1][3] = this.state.blog[index1][3] + 1; break;
                            case 'E': this.state.blog[index1][4] = this.state.blog[index1][4] + 1; break;
                            case 'F': this.state.blog[index1][5] = this.state.blog[index1][5] + 1; break;
                            case 'G': this.state.blog[index1][6] = this.state.blog[index1][6] + 1; break;
                            case 'H': this.state.blog[index1][7] = this.state.blog[index1][7] + 1; break;
                            case 'I': this.state.blog[index1][8] = this.state.blog[index1][8] + 1; break;
                            case 'J': this.state.blog[index1][9] = this.state.blog[index1][9] + 1; break;
                            case 'K': this.state.blog[index1][10] = this.state.blog[index1][10] + 1; break;
                        }


                    }
                }
                else if (item1 === item2.Level1 && item1 === this.state.currentLevel1 && this.state.currentLevel2 === 'ทุกประเภท' && item2.Level1 !== "" && item2.Level2 !== "" && item2.Level3 !== "") {
                    if (this.state.currentLevel3 === 'ทุกประเภท' && this.state.currentLevel3 === 'ทุกประเภท' && item2.Direct_Strategy !== ""
                        && item2.Direct_Reform !== "") {  // ... all all
                        
                            switch (this.setSplit(item2.Direct_Reform)) {
                                case 'A': this.state.blog[index1][0] = this.state.blog[index1][0] + 1; break;
                                case 'B': this.state.blog[index1][1] = this.state.blog[index1][1] + 1; break;
                                case 'C': this.state.blog[index1][2] = this.state.blog[index1][2] + 1; break;
                                case 'D': this.state.blog[index1][3] = this.state.blog[index1][3] + 1; break;
                                case 'E': this.state.blog[index1][4] = this.state.blog[index1][4] + 1; break;
                                case 'F': this.state.blog[index1][5] = this.state.blog[index1][5] + 1; break;
                                case 'G': this.state.blog[index1][6] = this.state.blog[index1][6] + 1; break;
                                case 'H': this.state.blog[index1][7] = this.state.blog[index1][7] + 1; break;
                                case 'I': this.state.blog[index1][8] = this.state.blog[index1][8] + 1; break;
                                case 'J': this.state.blog[index1][9] = this.state.blog[index1][9] + 1; break;
                                case 'K': this.state.blog[index1][10] = this.state.blog[index1][10] + 1; break;
                        }

                    }
                    else if (this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท' &&
                        this.state.currentLevel1 === item2.Level1 && this.state.currentLevel3 === item2.Level3 &&
                        item2.Direct_Strategy !== "" && item2.Direct_Reform !== "") {// ... all ...
                        
                            switch (this.setSplit(item2.Direct_Reform)) {
                                case 'A': this.state.blog[index1][0] = this.state.blog[index1][0] + 1; break;
                                case 'B': this.state.blog[index1][1] = this.state.blog[index1][1] + 1; break;
                                case 'C': this.state.blog[index1][2] = this.state.blog[index1][2] + 1; break;
                                case 'D': this.state.blog[index1][3] = this.state.blog[index1][3] + 1; break;
                                case 'E': this.state.blog[index1][4] = this.state.blog[index1][4] + 1; break;
                                case 'F': this.state.blog[index1][5] = this.state.blog[index1][5] + 1; break;
                                case 'G': this.state.blog[index1][6] = this.state.blog[index1][6] + 1; break;
                                case 'H': this.state.blog[index1][7] = this.state.blog[index1][7] + 1; break;
                                case 'I': this.state.blog[index1][8] = this.state.blog[index1][8] + 1; break;
                                case 'J': this.state.blog[index1][9] = this.state.blog[index1][9] + 1; break;
                                case 'K': this.state.blog[index1][10] = this.state.blog[index1][10] + 1; break;
                        }

                    }
                }
                else if (item1 === item2.Level1 && this.state.currentLevel3 === 'ทุกประเภท' && item2.Level1 !== "" && item2.Level2 !== "" && item2.Level3 !== "") {
                    if (this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel2 !== 'ทุกประเภท' &&
                        this.state.currentLevel1 === item2.Level1 && this.state.currentLevel2 === item2.Level2 &&
                        item2.Direct_Strategy !== "" && item2.Direct_Reform !== "") { // ... ... all
                        
                            switch (this.setSplit(item2.Direct_Reform)) {
                                case 'A': this.state.blog[index1][0] = this.state.blog[index1][0] + 1; break;
                                case 'B': this.state.blog[index1][1] = this.state.blog[index1][1] + 1; break;
                                case 'C': this.state.blog[index1][2] = this.state.blog[index1][2] + 1; break;
                                case 'D': this.state.blog[index1][3] = this.state.blog[index1][3] + 1; break;
                                case 'E': this.state.blog[index1][4] = this.state.blog[index1][4] + 1; break;
                                case 'F': this.state.blog[index1][5] = this.state.blog[index1][5] + 1; break;
                                case 'G': this.state.blog[index1][6] = this.state.blog[index1][6] + 1; break;
                                case 'H': this.state.blog[index1][7] = this.state.blog[index1][7] + 1; break;
                                case 'I': this.state.blog[index1][8] = this.state.blog[index1][8] + 1; break;
                                case 'J': this.state.blog[index1][9] = this.state.blog[index1][9] + 1; break;
                                case 'K': this.state.blog[index1][10] = this.state.blog[index1][10] + 1; break;

                        }
                    }
                }
                else if (item1 === item2.Level1 && this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel2 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท'
                    && this.state.currentLevel1 === item2.Level1 && this.state.currentLevel2 === item2.Level2 && this.state.currentLevel3 === item2.Level3 &&
                    item2.Direct_Strategy !== "" && item2.Level1 !== "" && item2.Level2 !== "" && item2.Level3 !== "" && item2.Direct_Reform !== "") { // ... ... ...
                    
                        switch (this.setSplit(item2.Direct_Reform)) {
                            case 'A': this.state.blog[index1][0] = this.state.blog[index1][0] + 1; break;
                            case 'B': this.state.blog[index1][1] = this.state.blog[index1][1] + 1; break;
                            case 'C': this.state.blog[index1][2] = this.state.blog[index1][2] + 1; break;
                            case 'D': this.state.blog[index1][3] = this.state.blog[index1][3] + 1; break;
                            case 'E': this.state.blog[index1][4] = this.state.blog[index1][4] + 1; break;
                            case 'F': this.state.blog[index1][5] = this.state.blog[index1][5] + 1; break;
                            case 'G': this.state.blog[index1][6] = this.state.blog[index1][6] + 1; break;
                            case 'H': this.state.blog[index1][7] = this.state.blog[index1][7] + 1; break;
                            case 'I': this.state.blog[index1][8] = this.state.blog[index1][8] + 1; break;
                            case 'J': this.state.blog[index1][9] = this.state.blog[index1][9] + 1; break;
                            case 'K': this.state.blog[index1][10] = this.state.blog[index1][10] + 1; break;

                    }
                }
            })
        })

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


    getMatrix = () => {


        for (var i = 0; i < this.state.listRow.length; i++) {
            this.state.styleBlog.push([]);
            this.state.sumRow[i] = 0;
            for (var j = 0; j < 11; j++) {
                this.state.styleBlog[i][j] = this.checkColor(this.state.blog[i][j]);
                this.state.sumRow[i] = this.state.sumRow[i] + this.state.blog[i][j];
            }
        }
        let cnt = 0;
        for (var i = 0; i < 11; i++) {
            this.state.sumCol[i] = 0;

            for (var j = 0; j < this.state.listRow.length; j++) {
                this.state.sumCol[i] = this.state.sumCol[i] + this.state.blog[j][cnt];

            }
            cnt = cnt + 1;
        }

        let sum = 0;
        // this.state.listRow.map((item1, index1) => {
        //     sum = sum + this.state.sumRow[index1];
        // })

        return (<table>
            <tr>
                <th rowSpan="2" class="boxplus1"></th>
                <th colSpan="12">ปฏิรูปประเทศ</th>
            </tr>
            <tr>
                <th class="maxLencol">1:ทุจริตและ ประพฤติมิชอบ</th>
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

            <tr>
                <th class="row">รวมจำนวนโครงการ</th>
                {this.state.sumCol.map((item1, index1) => {
                    sum = sum + this.state.sumCol[index1];
                    return (<th class="col">{this.state.sumCol[index1]}</th>)
                })}
                <th class="col">{sum}</th>
            </tr>

            {this.state.listRow.map((item1, index1) => {
                //console.log();

                return (<tr>
                    <th class="row-with-width-max">{index1 + 1}:{item1}</th>
                    <th class="col" style={this.state.styleBlog[index1][0]}>{this.state.blog[index1][0]}</th>
                    <th class="col" style={this.state.styleBlog[index1][1]}>{this.state.blog[index1][1]}</th>
                    <th class="col" style={this.state.styleBlog[index1][2]}>{this.state.blog[index1][2]}</th>
                    <th class="col" style={this.state.styleBlog[index1][3]}>{this.state.blog[index1][3]}</th>
                    <th class="col" style={this.state.styleBlog[index1][4]}>{this.state.blog[index1][4]}</th>
                    <th class="col" style={this.state.styleBlog[index1][5]}>{this.state.blog[index1][5]}</th>
                    <th class="col" style={this.state.styleBlog[index1][6]}>{this.state.blog[index1][6]}</th>
                    <th class="col" style={this.state.styleBlog[index1][7]}>{this.state.blog[index1][7]}</th>
                    <th class="col" style={this.state.styleBlog[index1][8]}>{this.state.blog[index1][8]}</th>
                    <th class="col" style={this.state.styleBlog[index1][9]}>{this.state.blog[index1][9]}</th>
                    <th class="col" style={this.state.styleBlog[index1][10]}>{this.state.blog[index1][10]}</th>
                    <th class="col">{this.state.sumRow[index1]}</th>
                </tr>
                )

            })}

        </table>);
    }

    render() {

        this.setData();

        return (
            <div>

                <div class="myMatrix">
                    {this.getMatrix()}
                </div>

                <Link to={'/new1_2'}><img class="newplus1" src={plusPic} width='10px' height='10px' /></Link>

            </div>
        );
    }
}
export default pagenew1;
