import './style.css';
import myDataOuter from './data/outer';
import myDataInner from './data/inner';
import plusPic from './picture/plus.png';
import minusPic from './picture/minus.png';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class Part1_2 extends Component {

    constructor() {
        super();

    }

    checkRowSpan = (e) => {
        let cnt = 0;

        while (this.state.listRowLevel2[e][cnt] != null) {
            cnt = cnt + 1;
        }

        return (<th rowSpan={cnt}>ศาล</th>)
    }

    setLoop = (e) => {
        let cnt = 0;

        while (this.state.listRowLevel2[e][cnt] != null) {
            cnt = cnt + 1;
        }

        return cnt;
    }

    handleSelectLevel1Change = (e) => {
        //alert('1');
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
            blog: [], styleBlog: [], sumRow: [], sumCol: [], cntRowBlog: 0,
            currentLevel1: this.props.myCurrentLevel1, currentLevel2: this.props.myCurrentLevel2, currentLevel3: this.props.myCurrentLevel3,
            listRowLevel1: [], listRowLevel2: [], listRowTest1: [], dataLevel1: [], dataLevel2: [], dataLevel3: []
        };

        this.state.dataLevel1.push(this.props.myCurrentLevel1);
        myDataOuter.map((item) => {
            if (item.Level1 !== "" && item.Level2 !== "" && item.Level3 !== "") {
                this.state.dataLevel1.push(item.Level1);
            }
        });


        if (this.props.myCurrentLevel1 != 'ทุกประเภท') {
            this.state.listRowLevel1.push(this.props.myCurrentLevel1);
        }
        else {
            myDataOuter.map((item) => {
                if (item.Level1 !== "" && item.Level2 !== "" && item.Level3 !== "") {
                    this.state.listRowTest1.push(item.Level1);
                }
            });
            this.state.listRowLevel1 = this.uniqueArray(this.state.listRowTest1)
        }


        for (var i = 0; i < this.state.listRowLevel1.length; i++) {
            this.state.listRowLevel2.push([]);
        }









        this.state.listRowLevel1.map((item1, index1) => {
            this.state.listRowTest2 = [];

            myDataOuter.map((item3, index2) => {
                if (item3.Level1 !== "" && item3.Level2 !== "" && item3.Level3 !== "" && item1 === item3.Level1) {
                    this.state.listRowTest2.push(item3.Level2);
                }
            });
            for (let j = 0; j < this.uniqueArray(this.state.listRowTest2).length; j++) {
                this.state.listRowLevel2[index1][j] = this.uniqueArray(this.state.listRowTest2)[j];
            }

        });



        for (let i = 0; i < this.state.listRowLevel1.length; i++) {
            let cnt = this.setLoop(i);
            this.state.cntRowBlog = this.state.cntRowBlog + cnt;
        }


        if (this.state.currentLevel1 === 'ทุกประเภท') {
            if (this.state.currentLevel2 === 'ทุกประเภท' && this.state.currentLevel3 === 'ทุกประเภท') {  // all all all

                this.state.dataLevel1 = [];
                this.state.dataLevel2 = [];
                this.state.dataLevel3 = [];

                myDataOuter.map((item) => {
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

            alert('ddddddddddd');
        }


        for (let i = 0; i < this.state.cntRowBlog; i++) {
            this.state.blog.push([]);
            this.state.styleBlog.push([])
            this.state.sumRow[i] = 0;
            for (let j = 0; j < 6; j++) {
                this.state.blog[i][j] = 0;
            }
        }

        let cnt2 = 0;

        this.state.listRowLevel1.map((item1, index1) => {

            let cnt = this.setLoop(index1);
            for (let j = 0; j < cnt; j++) {

                myDataInner.map((item3, index3) => {

                    if (item1 === item3.Level1 && this.state.listRowLevel2[index1][j] === item3.Level2 && this.state.currentLevel1 === 'ทุกประเภท') {
                        if (this.state.currentLevel2 === 'ทุกประเภท' && this.state.currentLevel3 === 'ทุกประเภท' && item3.Direct_Strategy !== "") {  // all all all

                            switch (this.setSplit(item3.Direct_Strategy)) {
                                case 'Y1': this.state.blog[cnt2][0] = this.state.blog[cnt2][0] + 1; break;
                                case 'Y2': this.state.blog[cnt2][1] = this.state.blog[cnt2][1] + 1; break;
                                case 'Y3': this.state.blog[cnt2][2] = this.state.blog[cnt2][2] + 1; break;
                                case 'Y4': this.state.blog[cnt2][3] = this.state.blog[cnt2][3] + 1; break;
                                case 'Y5': this.state.blog[cnt2][4] = this.state.blog[cnt2][4] + 1; break;
                                case 'Y6': this.state.blog[cnt2][5] = this.state.blog[cnt2][5] + 1; break;
                            }

                        }
                        else if (this.state.currentLevel2 === 'ทุกประเภท' && this.state.currentLevel3 === item3.Level3 && item3.Direct_Strategy !== "") { // all all ...
                            switch (this.setSplit(item3.Direct_Strategy)) {
                                case 'Y1': this.state.blog[cnt2][0] = this.state.blog[cnt2][0] + 1; break;
                                case 'Y2': this.state.blog[cnt2][1] = this.state.blog[cnt2][1] + 1; break;
                                case 'Y3': this.state.blog[cnt2][2] = this.state.blog[cnt2][2] + 1; break;
                                case 'Y4': this.state.blog[cnt2][3] = this.state.blog[cnt2][3] + 1; break;
                                case 'Y5': this.state.blog[cnt2][4] = this.state.blog[cnt2][4] + 1; break;
                                case 'Y6': this.state.blog[cnt2][5] = this.state.blog[cnt2][5] + 1; break;
                            }
                        }
                        else if (this.state.currentLevel3 === 'ทุกประเภท' && this.state.currentLevel2 === item3.Level2 && item3.Direct_Strategy !== "") { // all ... all
                            switch (this.setSplit(item3.Direct_Strategy)) {
                                case 'Y1': this.state.blog[cnt2][0] = this.state.blog[cnt2][0] + 1; break;
                                case 'Y2': this.state.blog[cnt2][1] = this.state.blog[cnt2][1] + 1; break;
                                case 'Y3': this.state.blog[cnt2][2] = this.state.blog[cnt2][2] + 1; break;
                                case 'Y4': this.state.blog[cnt2][3] = this.state.blog[cnt2][3] + 1; break;
                                case 'Y5': this.state.blog[cnt2][4] = this.state.blog[cnt2][4] + 1; break;
                                case 'Y6': this.state.blog[cnt2][5] = this.state.blog[cnt2][5] + 1; break;
                            }

                        }
                        else if (this.state.currentLevel2 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท' &&
                            this.state.currentLevel2 === item3.Level2 && this.state.currentLevel3 === item3.Level3 &&
                            item3.Direct_Strategy !== "") { // all ... ...

                            switch (this.setSplit(item3.Direct_Strategy)) {
                                case 'Y1': this.state.blog[cnt2][0] = this.state.blog[cnt2][0] + 1; break;
                                case 'Y2': this.state.blog[cnt2][1] = this.state.blog[cnt2][1] + 1; break;
                                case 'Y3': this.state.blog[cnt2][2] = this.state.blog[cnt2][2] + 1; break;
                                case 'Y4': this.state.blog[cnt2][3] = this.state.blog[cnt2][3] + 1; break;
                                case 'Y5': this.state.blog[cnt2][4] = this.state.blog[cnt2][4] + 1; break;
                                case 'Y6': this.state.blog[cnt2][5] = this.state.blog[cnt2][5] + 1; break;
                            }


                        }
                    }
                    else if (item1 === item3.Level1 && this.state.listRowLevel2[index1][j] === item3.Level2 && item1 === this.state.currentLevel1 && this.state.currentLevel2 === 'ทุกประเภท') {
                        if (this.state.currentLevel3 === 'ทุกประเภท' &&
                            this.state.currentLevel3 === 'ทุกประเภท' && item3.Direct_Strategy !== "") {  // ... all all
                            switch (this.setSplit(item3.Direct_Strategy)) {
                                case 'Y1': this.state.blog[cnt2][0] = this.state.blog[cnt2][0] + 1; break;
                                case 'Y2': this.state.blog[cnt2][1] = this.state.blog[cnt2][1] + 1; break;
                                case 'Y3': this.state.blog[cnt2][2] = this.state.blog[cnt2][2] + 1; break;
                                case 'Y4': this.state.blog[cnt2][3] = this.state.blog[cnt2][3] + 1; break;
                                case 'Y5': this.state.blog[cnt2][4] = this.state.blog[cnt2][4] + 1; break;
                                case 'Y6': this.state.blog[cnt2][5] = this.state.blog[cnt2][5] + 1; break;
                            }

                        }
                        else if (this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท' &&
                            this.state.currentLevel1 === item3.Level1 && this.state.currentLevel3 === item3.Level3 &&
                            item3.Direct_Strategy !== "") {// ... all ...
                            switch (this.setSplit(item3.Direct_Strategy)) {
                                case 'Y1': this.state.blog[cnt2][0] = this.state.blog[cnt2][0] + 1; break;
                                case 'Y2': this.state.blog[cnt2][1] = this.state.blog[cnt2][1] + 1; break;
                                case 'Y3': this.state.blog[cnt2][2] = this.state.blog[cnt2][2] + 1; break;
                                case 'Y4': this.state.blog[cnt2][3] = this.state.blog[cnt2][3] + 1; break;
                                case 'Y5': this.state.blog[cnt2][4] = this.state.blog[cnt2][4] + 1; break;
                                case 'Y6': this.state.blog[cnt2][5] = this.state.blog[cnt2][5] + 1; break;
                            }

                        }
                    }
                    else if (item1 === item3.Level1 && this.state.listRowLevel2[index1][j] === item3.Level2 && this.state.currentLevel3 === 'ทุกประเภท') {
                        if (this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel2 !== 'ทุกประเภท' &&
                            this.state.currentLevel1 === item3.Level1 && this.state.currentLevel2 === item3.Level2 &&
                            item3.Direct_Strategy !== "") { // ... ... all
                            switch (this.setSplit(item3.Direct_Strategy)) {
                                case 'Y1': this.state.blog[cnt2][0] = this.state.blog[cnt2][0] + 1; break;
                                case 'Y2': this.state.blog[cnt2][1] = this.state.blog[cnt2][1] + 1; break;
                                case 'Y3': this.state.blog[cnt2][2] = this.state.blog[cnt2][2] + 1; break;
                                case 'Y4': this.state.blog[cnt2][3] = this.state.blog[cnt2][3] + 1; break;
                                case 'Y5': this.state.blog[cnt2][4] = this.state.blog[cnt2][4] + 1; break;
                                case 'Y6': this.state.blog[cnt2][5] = this.state.blog[cnt2][5] + 1; break;

                            }
                        }
                    }
                    else if (item1 === item3.Level1 && this.state.listRowLevel2[index1][j] === item3.Level2 && this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel2 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท'
                        && this.state.currentLevel1 === item3.Level1 && this.state.currentLevel2 === item3.Level2 && this.state.currentLevel3 === item3.Level3 &&
                        item3.Direct_Strategy !== "") { // ... ... ...
                        switch (this.setSplit(item3.Direct_Strategy)) {
                            case 'Y1': this.state.blog[cnt2][0] = this.state.blog[cnt2][0] + 1; break;
                            case 'Y2': this.state.blog[cnt2][1] = this.state.blog[cnt2][1] + 1; break;
                            case 'Y3': this.state.blog[cnt2][2] = this.state.blog[cnt2][2] + 1; break;
                            case 'Y4': this.state.blog[cnt2][3] = this.state.blog[cnt2][3] + 1; break;
                            case 'Y5': this.state.blog[cnt2][4] = this.state.blog[cnt2][4] + 1; break;
                            case 'Y6': this.state.blog[cnt2][5] = this.state.blog[cnt2][5] + 1; break;

                        }
                    }
                })

                cnt2 = cnt2 + 1;
            }
        })


        for (let i = 0; i < this.state.cntRowBlog; i++) {
            this.state.sumRow[i] = 0;
            for (let j = 0; j < 6; j++) {
                this.state.styleBlog[i][j] = this.checkColor(this.state.blog[i][j]);
                this.state.sumRow[i] = this.state.sumRow[i] + this.state.blog[i][j];
            }
        }

        let cnt = 0;
        for (var i = 0; i < 6; i++) {
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

    createTable = () => {

        let table = [];
        let sum = 0;

        // for (let i = 0; i < this.state.cntRowBlog; i++) {
        //     sum = sum + this.state.sumRow[i];
        // }


        table.push(<tr>
            <th rowSpan="2" colSpan="2" class="boxplus1"></th>
            <th colSpan="7">ยุทธศาสตร์ชาติ</th>
        </tr>);

        table.push(<tr>
            <th>1:มั่นคง</th>
            <th>2:แข่งขัน</th>
            <th>3:มนุษย์</th>
            <th>4:เสมอภาค</th>
            <th>5:สิ่งแวดล้อม</th>
            <th>6:ภาครัฐ</th>
            <th>รวม</th>
        </tr>);

        table.push(<tr>
            <th colSpan="2" class="row">รวมจำนวนโครงการ</th>
            {this.state.sumCol.map((item1, index1) => {
                sum = sum + this.state.sumCol[index1];
                return (<th class="col">{this.state.sumCol[index1]}</th>)
            })}
            <th class="col">{sum}</th>
        </tr>);

        let cnt2 = 0;

        for (let i = 0; i < this.state.listRowLevel1.length; i++) {

            let children = []
            let cnt = this.setLoop(i);
            children.push(<th rowSpan={cnt} class="row-with-width-max1">{this.state.listRowLevel1[i]}</th>)

            for (let j = 0; j < cnt; j++) {
                children.push(<th class="row-with-width-max2">{this.state.listRowLevel2[i][j]}</th>)

                for (let k = 0; k < 6; k++) {
                    children.push(<th class="col" style={this.state.styleBlog[cnt2][k]}>{this.state.blog[cnt2][k]}</th>)
                }

                children.push(<th class="col">{this.state.sumRow[cnt2]}</th>)

                table.push(<tr>{children}</tr>)
                children = []

                cnt2 = cnt2 + 1;
            }



        }


        return table


    }

    setFilter = (e) => {

        this.setState({ currentLevel1: e })

    }

    render() {

        this.setData();

        return (
            <div>

                <div className="filters">

                    <h4 className="inLine">Level1 : </h4>
                    <select onChange={this.handleSelectLevel1Change}>
                        <option value={this.uniqueArray(this.state.dataLevel1)[0]}>{this.uniqueArray(this.state.dataLevel1)[0]}</option>
                        {this.uniqueArray(this.state.dataLevel1).map((opt, index) => {
                            if(index!=0){
                                return (<option key={opt} value={opt}>{opt}</option>);
                            }
                        })}
                    </select>

                    <h4 className="inLine">Level2 : </h4>
                    <select onChange={this.handleSelectLevel2Change}>
                        <option value={this.state.currentLevel2}>{this.state.currentLevel2}</option>
                        {this.uniqueArray(this.state.dataLevel2).map(opt => {
                            return (<option key={opt} value={opt}>{opt}</option>);
                        })}
                    </select>

                    <h4 className="inLine">Level3 : </h4>
                    <select onChange={this.handleSelectLevel3Change}>
                        <option value={this.state.currentLevel3}>{this.state.currentLevel3}</option>
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
                    <table>
                        {this.createTable()}
                    </table>
                </div>

                <Link to={'/1_2'}><img class="plus1" src={plusPic} width='10px' height='10px' /></Link>
                <Link to={'/1'}><img class="minus1" src={minusPic} width='10px' height='10px' /></Link>

            </div >
        );
    }
}

export default Part1_2;
