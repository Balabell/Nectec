import './style.css';
import myDataOuter from './data/outer';
import myDataInner from './data/inner';
import React, { Component } from 'react';

class page2 extends Component {

    constructor() {
        super();

        this.state = {
            currentLevel1: 'ทุกประเภท', currentLevel2: 'ทุกประเภท', currentLevel3: 'ทุกประเภท', listRowTest: []
        };

        myDataOuter.map((item) => {
            if (item.Level1 !== "" && item.Level2 !== "" && item.Level3 !== "") {
                this.state.listRowTest.push(item.Level2);
            }
        });

        this.state = {
            ...this.state, listRow: this.uniqueArray(this.state.listRowTest)
        };

    }

    handleSelectLevel1Change = (e) => {
        this.setState({ currentLevel1: e.target.value });
    }

    handleSelectLevel2Change = (e) => {
        this.setState({ currentLevel2: e.target.value });
    }

    handleSelectLevel3Change = (e) => {
        this.setState({ currentLevel3: e.target.value });
    }

    setData = () => {


        this.state = {
            ...this.state, blog: [], styleBlog: [], sumRow: [], sumCol: []
        };


        if (this.state.currentLevel1 === 'ทุกประเภท') {
            if (this.state.currentLevel2 === 'ทุกประเภท' && this.state.currentLevel3 === 'ทุกประเภท') {  // all all all

                this.state.dataLevel1 = [];
                this.state.dataLevel2 = [];
                this.state.dataLevel3 = [];

                myDataOuter.map((item, index1) => {
                    if (item.Level1 !== "" && item.Level2 !== "" && item.Level3 !== "") {

                        this.state.dataLevel1.push(item.Level1);
                        this.state.dataLevel2.push(item.Level2);
                        this.state.dataLevel3.push(item.Level3);
                    }

                });

            }
            else if (this.state.currentLevel2 === 'ทุกประเภท') { // all all ...

                this.state.dataLevel1 = [];
                this.state.dataLevel2 = [];

                myDataOuter.map((item) => {
                    if (item.Level1 !== "" && item.Level2 !== "" && item.Level3 !== "") {

                        if (this.state.currentLevel3 === item.Level3) {

                            this.state.dataLevel1.push(item.Level1);
                            this.state.dataLevel2.push(item.Level2);
                        }
                    }
                });

            }
            else if (this.state.currentLevel3 === 'ทุกประเภท') { // all ... all

                this.state.dataLevel1 = [];
                this.state.dataLevel3 = [];

                myDataOuter.map((item) => {
                    if (item.Level1 !== "" && item.Level2 !== "" && item.Level3 !== "") {

                        if (this.state.currentLevel2 === item.Level2) {

                            this.state.dataLevel1.push(item.Level1);
                            this.state.dataLevel3.push(item.Level3);
                        }
                    }
                });

            }
            else if (this.state.currentLevel2 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท') { // all ... ...

                this.state.dataLevel1 = [];
                this.state.dataLevel3 = [];

                myDataOuter.map((item) => {
                    if (item.Level1 !== "" && item.Level2 !== "" && item.Level3 !== "") {

                        if (this.state.currentLevel2 === item.Level2) {
                            this.state.dataLevel3.push(item.Level3);
                        }

                        if (this.state.currentLevel2 === item.Level2 && this.state.currentLevel3 === item.Level3) {
                            this.state.dataLevel1.push(item.Level1);
                        }
                    }
                });
            }
        }
        else if (this.state.currentLevel2 === 'ทุกประเภท') {
            if (this.state.currentLevel3 === 'ทุกประเภท') {  // ... all all

                this.state.dataLevel2 = [];
                this.state.dataLevel3 = [];

                myDataOuter.map((item, index1) => {
                    if (item.Level1 !== "" && item.Level2 !== "" && item.Level3 !== "") {

                        if (this.state.currentLevel1 === item.Level1) {

                            this.state.dataLevel2.push(item.Level2);
                            this.state.dataLevel3.push(item.Level3);

                        }
                    }
                });

            }
            else if (this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท') {// ... all ...

                this.state.dataLevel2 = [];
                this.state.dataLevel3 = [];

                myDataOuter.map((item) => {
                    if (item.Level1 !== "" && item.Level2 !== "" && item.Level3 !== "") {

                        if (this.state.currentLevel1 === item.Level1) {
                            this.state.dataLevel3.push(item.Level3);
                        }

                        if (this.state.currentLevel1 === item.Level1 && this.state.currentLevel3 === item.Level3) { // ... all ...
                            this.state.dataLevel2.push(item.Level2);
                        }
                    }
                });

            }
        }
        else if (this.state.currentLevel3 === 'ทุกประเภท') {
            if (this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel2 !== 'ทุกประเภท') { // ... ... all

                this.state.dataLevel3 = [];
                this.state.dataLevel2 = [];

                myDataOuter.map((item) => {
                    if (item.Level1 !== "" && item.Level2 !== "" && item.Level3 !== "") {

                        if (this.state.currentLevel1 === item.Level1) {
                            this.state.dataLevel2.push(item.Level2);
                        }

                        if (this.state.currentLevel1 === item.Level1 && this.state.currentLevel2 === item.Level2) {
                            this.state.dataLevel3.push(item.Level3);
                        }
                    }
                });
            }
        }
        else if (this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel2 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท') { // ... ... ...

            this.state.dataLevel3 = [];
            this.state.dataLevel2 = [];

            myDataOuter.map((item) => {
                if (item.Level1 !== "" && item.Level2 !== "" && item.Level3 !== "") {

                    if (this.state.currentLevel1 === item.Level1) {
                        this.state.dataLevel2.push(item.Level2);
                    }
                    if (this.state.currentLevel1 === item.Level1 && this.state.currentLevel2 === item.Level2) {
                        this.state.dataLevel3.push(item.Level3);
                    }
                }
            });
        }

        //var blog = [];
        for (var i = 0; i < this.state.listRow.length; i++) {
            this.state.blog.push([]);
            for (var j = 0; j < 6; j++) {
                this.state.blog[i][j] = 0;
            }
        }


        this.state.listRow.map((item1, index1) => {
            myDataInner.map((item2, index2) => {

                if (item1 === item2.Level2 && this.state.currentLevel1 === 'ทุกประเภท' && item2.Level1 !== "" && item2.Level2 !== "" && item2.Level3 !== "") {
                    if (this.state.currentLevel2 === 'ทุกประเภท' && this.state.currentLevel3 === 'ทุกประเภท' && item2.Direct_Strategy !== "") {  // all all all
                        switch (this.setSplit(item2.Direct_Strategy)) {
                            case 'Y1': this.state.blog[index1][0] = this.state.blog[index1][0] + 1; break;
                            case 'Y2': this.state.blog[index1][1] = this.state.blog[index1][1] + 1; break;
                            case 'Y3': this.state.blog[index1][2] = this.state.blog[index1][2] + 1; break;
                            case 'Y4': this.state.blog[index1][3] = this.state.blog[index1][3] + 1; break;
                            case 'Y5': this.state.blog[index1][4] = this.state.blog[index1][4] + 1; break;
                            case 'Y6': this.state.blog[index1][5] = this.state.blog[index1][5] + 1; break;
                        }

                    }
                    else if (this.state.currentLevel2 === 'ทุกประเภท' && item2.Level3 === this.state.currentLevel3 && item2.Direct_Strategy !== "") { // all all ...
                        switch (this.setSplit(item2.Direct_Strategy)) {
                            case 'Y1': this.state.blog[index1][0] = this.state.blog[index1][0] + 1; break;
                            case 'Y2': this.state.blog[index1][1] = this.state.blog[index1][1] + 1; break;
                            case 'Y3': this.state.blog[index1][2] = this.state.blog[index1][2] + 1; break;
                            case 'Y4': this.state.blog[index1][3] = this.state.blog[index1][3] + 1; break;
                            case 'Y5': this.state.blog[index1][4] = this.state.blog[index1][4] + 1; break;
                            case 'Y6': this.state.blog[index1][5] = this.state.blog[index1][5] + 1; break;
                        }
                    }
                    else if (this.state.currentLevel3 === 'ทุกประเภท' && item1 === this.state.currentLevel2 && item2.Direct_Strategy !== "") { // all ... all
                        switch (this.setSplit(item2.Direct_Strategy)) {
                            case 'Y1': this.state.blog[index1][0] = this.state.blog[index1][0] + 1; break;
                            case 'Y2': this.state.blog[index1][1] = this.state.blog[index1][1] + 1; break;
                            case 'Y3': this.state.blog[index1][2] = this.state.blog[index1][2] + 1; break;
                            case 'Y4': this.state.blog[index1][3] = this.state.blog[index1][3] + 1; break;
                            case 'Y5': this.state.blog[index1][4] = this.state.blog[index1][4] + 1; break;
                            case 'Y6': this.state.blog[index1][5] = this.state.blog[index1][5] + 1; break;
                        }

                    }
                    else if (this.state.currentLevel2 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท' &&
                        item1 === this.state.currentLevel2 && item2.Level3 === this.state.currentLevel3 &&
                        item2.Direct_Strategy !== "") { // all ... ...

                        switch (this.setSplit(item2.Direct_Strategy)) {
                            case 'Y1': this.state.blog[index1][0] = this.state.blog[index1][0] + 1; break;
                            case 'Y2': this.state.blog[index1][1] = this.state.blog[index1][1] + 1; break;
                            case 'Y3': this.state.blog[index1][2] = this.state.blog[index1][2] + 1; break;
                            case 'Y4': this.state.blog[index1][3] = this.state.blog[index1][3] + 1; break;
                            case 'Y5': this.state.blog[index1][4] = this.state.blog[index1][4] + 1; break;
                            case 'Y6': this.state.blog[index1][5] = this.state.blog[index1][5] + 1; break;
                        }


                    }
                }
                else if (item1 === item2.Level2 && item2.Level1 === this.state.currentLevel1 && this.state.currentLevel2 === 'ทุกประเภท' && item2.Level1 !== "" && item2.Level2 !== "" && item2.Level3 !== "") {
                    if (this.state.currentLevel3 === 'ทุกประเภท' &&
                        this.state.currentLevel3 === 'ทุกประเภท' && item2.Direct_Strategy !== "") {  // ... all all
                        switch (this.setSplit(item2.Direct_Strategy)) {
                            case 'Y1': this.state.blog[index1][0] = this.state.blog[index1][0] + 1; break;
                            case 'Y2': this.state.blog[index1][1] = this.state.blog[index1][1] + 1; break;
                            case 'Y3': this.state.blog[index1][2] = this.state.blog[index1][2] + 1; break;
                            case 'Y4': this.state.blog[index1][3] = this.state.blog[index1][3] + 1; break;
                            case 'Y5': this.state.blog[index1][4] = this.state.blog[index1][4] + 1; break;
                            case 'Y6': this.state.blog[index1][5] = this.state.blog[index1][5] + 1; break;
                        }

                    }
                    else if (this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท' &&
                        item2.Level1 === this.state.currentLevel1 && item2.Level3 === this.state.currentLevel3 &&
                        item2.Direct_Strategy !== "") {// ... all ...
                        switch (this.setSplit(item2.Direct_Strategy)) {
                            case 'Y1': this.state.blog[index1][0] = this.state.blog[index1][0] + 1; break;
                            case 'Y2': this.state.blog[index1][1] = this.state.blog[index1][1] + 1; break;
                            case 'Y3': this.state.blog[index1][2] = this.state.blog[index1][2] + 1; break;
                            case 'Y4': this.state.blog[index1][3] = this.state.blog[index1][3] + 1; break;
                            case 'Y5': this.state.blog[index1][4] = this.state.blog[index1][4] + 1; break;
                            case 'Y6': this.state.blog[index1][5] = this.state.blog[index1][5] + 1; break;
                        }

                    }
                }
                else if (item1 === item2.Level2 && this.state.currentLevel3 === 'ทุกประเภท' && item2.Level1 !== "" && item2.Level2 !== "" && item2.Level3 !== "") {
                    if (this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel2 !== 'ทุกประเภท' &&
                        item2.Level1 === this.state.currentLevel1 && item1 === this.state.currentLevel2 &&
                        item2.Direct_Strategy !== "") { // ... ... all
                        switch (this.setSplit(item2.Direct_Strategy)) {
                            case 'Y1': this.state.blog[index1][0] = this.state.blog[index1][0] + 1; break;
                            case 'Y2': this.state.blog[index1][1] = this.state.blog[index1][1] + 1; break;
                            case 'Y3': this.state.blog[index1][2] = this.state.blog[index1][2] + 1; break;
                            case 'Y4': this.state.blog[index1][3] = this.state.blog[index1][3] + 1; break;
                            case 'Y5': this.state.blog[index1][4] = this.state.blog[index1][4] + 1; break;
                            case 'Y6': this.state.blog[index1][5] = this.state.blog[index1][5] + 1; break;

                        }
                    }
                }
                else if (item1 === item2.Level2 && this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel2 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท' &&
                    item2.Level1 === this.state.currentLevel1 && item1 === this.state.currentLevel2 && item2.Level3 === this.state.currentLevel3 &&
                    item2.Direct_Strategy !== "" && item2.Level1 !== "" && item2.Level2 !== "" && item2.Level3 !== "") { // ... ... ...
                    switch (this.setSplit(item2.Direct_Strategy)) {
                        case 'Y1': this.state.blog[index1][0] = this.state.blog[index1][0] + 1; break;
                        case 'Y2': this.state.blog[index1][1] = this.state.blog[index1][1] + 1; break;
                        case 'Y3': this.state.blog[index1][2] = this.state.blog[index1][2] + 1; break;
                        case 'Y4': this.state.blog[index1][3] = this.state.blog[index1][3] + 1; break;
                        case 'Y5': this.state.blog[index1][4] = this.state.blog[index1][4] + 1; break;
                        case 'Y6': this.state.blog[index1][5] = this.state.blog[index1][5] + 1; break;

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
        let col = temp[0] + temp[1];

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
            for (var j = 0; j < 6; j++) {
                this.state.styleBlog[i][j] = this.checkColor(this.state.blog[i][j]);
                this.state.sumRow[i] = this.state.sumRow[i] + this.state.blog[i][j];
            }
        }

        let cnt = 0;
        for (var i = 0; i < 6; i++) {
            this.state.sumCol[i] = 0;

            for (var j = 0; j < this.state.listRow.length; j++) {
                this.state.sumCol[i] = this.state.sumCol[i] + this.state.blog[j][cnt];

            }
            cnt = cnt + 1;
        }

        let sum = 0;
        this.state.listRow.map((item1, index1) => {
            sum = sum + this.state.sumRow[index1];
        })

        return (<table>
            <tr>
                <th rowSpan="2"></th>
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
                <th class="row">รวมจำนวนโครงการ</th>
                {this.state.sumCol.map((item1, index1) => {
                    sum = sum + this.state.sumCol[index1];
                    return (<th class="col">{this.state.sumCol[index1]}</th>)
                })}
                <th class="col">{sum}</th>
            </tr>

            {this.state.listRow.map((item1, index1) => {

                return (<tr>
                    <th class="row-with-width-max">{index1 + 1}:{item1}</th>
                    <th class="col" style={this.state.styleBlog[index1][0]}>{this.state.blog[index1][0]}</th>
                    <th class="col" style={this.state.styleBlog[index1][1]}>{this.state.blog[index1][1]}</th>
                    <th class="col" style={this.state.styleBlog[index1][2]}>{this.state.blog[index1][2]}</th>
                    <th class="col" style={this.state.styleBlog[index1][3]}>{this.state.blog[index1][3]}</th>
                    <th class="col" style={this.state.styleBlog[index1][4]}>{this.state.blog[index1][4]}</th>
                    <th class="col" style={this.state.styleBlog[index1][5]}>{this.state.blog[index1][5]}</th>
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

                <div className="filters">

                    <h4 className="inLine">Level1 : </h4>
                    <select onChange={this.handleSelectLevel1Change}>
                        <option value="ทุกประเภท">ทุกประเภท</option>
                        {this.uniqueArray(this.state.dataLevel1).map(opt => {
                            return (<option key={opt} value={opt}>{opt}</option>);
                        })}
                    </select>

                    <h4 className="inLine">Level2 : </h4>
                    <select onChange={this.handleSelectLevel2Change}>
                        <option value="ทุกประเภท">ทุกประเภท</option>
                        {this.uniqueArray(this.state.dataLevel2).map(opt => {
                            return (<option key={opt} value={opt}>{opt}</option>);
                        })}
                    </select>

                    <h4 className="inLine">Level3 : </h4>
                    <select onChange={this.handleSelectLevel3Change}>
                        <option value="ทุกประเภท">ทุกประเภท</option>
                        {this.uniqueArray(this.state.dataLevel3).map(opt => {
                            return (<option key={opt} value={opt}>{opt}</option>);
                        })}
                    </select>

                </div>

                <div class="myScale">
                    <div class="scale-color" style={{ backgroundColor: 'white', border: '1px solid black' }}>0</div>
                    <div class="scale-color" style={{ backgroundColor: '#AFEEEE', border: '1px solid black' }}>1-100</div>
                    <div class="scale-color" style={{ backgroundColor: '#00CCFF', border: '1px solid black' }}>101-200</div>
                    <div class="scale-color" style={{ backgroundColor: '#0099FF', border: '1px solid black' }}>201-300</div>
                    <div class="scale-color" style={{ backgroundColor: '#0066FF', border: '1px solid black' }}>301-400</div>
                    <div class="scale-color" style={{ backgroundColor: '#0033FF', color: 'white', border: '1px solid black' }}>401-500</div>
                    <div class="scale-color" style={{ backgroundColor: '#0000FF', color: 'white', border: '1px solid black' }}>501-600</div>
                    <div class="scale-color" style={{ backgroundColor: '#3300CC', color: 'white', border: '1px solid black' }}>601-700</div>
                    <div class="scale-color" style={{ backgroundColor: '#330099', color: 'white', border: '1px solid black' }}>701-800</div>
                    <div class="scale-color" style={{ backgroundColor: '#330066', color: 'white', border: '1px solid black' }}>801-900</div>
                    <div class="scale-color" style={{ backgroundColor: '#330033', color: 'white', border: '1px solid black' }}>901-1000</div>
                    <div class="scale-color" style={{ backgroundColor: '#330000', color: 'white', border: '1px solid black' }}>1001-1100</div>
                    <div class="scale-color" style={{ backgroundColor: 'black', color: 'white', border: '1px solid black' }}>>1100</div>
                </div>


                <div class="myMatrix">
                    {this.getMatrix()}
                </div>

            </div>
        );
    }
}

export default page2;
