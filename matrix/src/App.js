import React, { Component } from 'react';
import { Route } from 'react-router-dom';
//import myDataOuter from './data/outer';
import myDataLevel1_2 from './data/org-level1-2';
import myDataLevel2_3 from './data/org-level2-3';
import './style.css';
import Page from './page';
import Page1 from './page1';
import Page1_2 from './page1_2';
import Page1_2_3 from './page1_2_3';
import Pagenew1 from './pagenew1';
import Pagenew1_2 from './pagenew1_2';
import Pagenew1_2_3 from './pagenew1_2_3';

class App extends Component {

    constructor() {
        super();

        this.state = {
            ...this.state, dataLevel1: [], dataLevel2: [], dataLevel3: [],
            currentLevel1: 'ทุกประเภท', currentLevel2: 'ทุกประเภท', currentLevel3: 'ทุกประเภท', 
            onChangeL1:'', onChangeL2:'true', onChangeL3:'true',
            loading: true

        };


    }


    handleSelectLevel1Change = (e) => {
        this.setState({ currentLevel1: e.target.value ,currentLevel2: 'ทุกประเภท' ,currentLevel3: 'ทุกประเภท'});
        this.state.onChangeL1='';
        this.state.onChangeL2='true';
        this.state.onChangeL3='true';
    }

    handleSelectLevel2Change = (e) => {
        this.setState({ currentLevel2: e.target.value ,currentLevel3: 'ทุกประเภท'});
        this.state.onChangeL1='';
        this.state.onChangeL2='';
        this.state.onChangeL3='true';
    }

    handleSelectLevel3Change = (e) => {
        this.setState({ currentLevel3: e.target.value });
    }

    uniqueArray = (oList) => {

        return oList.reduce(function (a, d, i) {
            if (a.indexOf(d) === -1) {
                a.push(d);
            }

            return a;

        }, []);

    }

    setData = () => {

        if (this.state.currentLevel1 === 'ทุกประเภท') {
            if (this.state.currentLevel2 === 'ทุกประเภท' && this.state.currentLevel3 === 'ทุกประเภท') {  // all all all

                this.state.onChangeL1='';
                this.state.onChangeL2='true';
                this.state.onChangeL3='true';

                this.state.dataLevel1 = [];
                this.state.dataLevel2 = [];
                this.state.dataLevel3 = [];

                this.state.dataLevel1.push('ทุกประเภท');
                this.state.dataLevel2.push('ทุกประเภท');
                this.state.dataLevel3.push('ทุกประเภท');

                myDataLevel1_2.map((item) => {

                    if(item.level1 != "" && item.level2 !=""){
                        this.state.dataLevel1.push(item.level1);

                        for (let i = 0; i < item.level2.length; i++) {
                            this.state.dataLevel2.push(item.level2[i]);
                        }
                    }
                    
                });

                myDataLevel2_3.map(item2 => {

                    for (let j = 0; j < item2.level3.length; j++) {
                        if (item2.level3 != "") {
                            this.state.dataLevel3.push(item2.level3[j]);
                        }

                    }
                })

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

                // this.state.dataLevel1 = [];
                // this.state.dataLevel3 = [];

                // myDataOuter.map((item) => {
                //     if (item.Level1 !== "" && item.Level2 !== "" && item.Level3 !== "") {

                //         if (this.state.currentLevel2 === item.Level2) {

                //             this.state.dataLevel1.push(item.Level1);
                //             this.state.dataLevel3.push(item.Level3);
                //         }
                //     }
                // });

            }
            else if (this.state.currentLevel2 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท') { // all ... ...

                // this.state.dataLevel1 = [];
                // this.state.dataLevel3 = [];

                // myDataOuter.map((item) => {
                //     if (item.Level1 !== "" && item.Level2 !== "" && item.Level3 !== "") {

                //         if (this.state.currentLevel2 === item.Level2) {
                //             this.state.dataLevel3.push(item.Level3);
                //         }

                //         if (this.state.currentLevel2 === item.Level2 && this.state.currentLevel3 === item.Level3) {
                //             this.state.dataLevel1.push(item.Level1);
                //         }
                //     }
                // });
            }
        }
        else if (this.state.currentLevel2 === 'ทุกประเภท') {
            if (this.state.currentLevel3 === 'ทุกประเภท') {  // ... all all
                
                //alert('. a a')

                this.state.onChangeL2='';

                this.state.dataLevel2 = [];
                this.state.dataLevel3 = [];

                this.state.dataLevel2.push('ทุกประเภท');
                this.state.dataLevel3.push('ทุกประเภท');
                

                myDataLevel1_2.map((item, index2) => {
                    if (item.level1 == this.state.currentLevel1) {

                        for (let i = 0; i < item.level2.length; i++) {

                            this.state.dataLevel2.push(item.level2[i]);
                            myDataLevel2_3.map(item2 => {

                                if (item.level1 == item2.level1 && item2.level3 != "") {

                                    for (let j = 0; j < item2.level3.length; j++) {
                                        this.state.dataLevel3.push(item2.level3[j]);
                                    }
                                }
                            })

                        }
                    }
                });



            }
            else if (this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท') {// ... all ...

                // this.state.dataLevel2 = [];
                // this.state.dataLevel3 = [];

                // myDataOuter.map((item) => {
                //     if (item.Level1 !== "" && item.Level2 !== "" && item.Level3 !== "") {

                //         if (this.state.currentLevel1 === item.Level1) {
                //             this.state.dataLevel3.push(item.Level3);
                //         }

                //         if (this.state.currentLevel1 === item.Level1 && this.state.currentLevel3 === item.Level3) { // ... all ...
                //             this.state.dataLevel2.push(item.Level2);
                //         }
                //     }
                // });

            }
        }
        else if (this.state.currentLevel3 === 'ทุกประเภท') {
            if (this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel2 !== 'ทุกประเภท') { // ... ... all

                this.state.onChangeL2='';
                this.state.onChangeL3='';

                this.state.dataLevel3 = [];
                this.state.dataLevel2 = [];

                this.state.dataLevel2.push('ทุกประเภท');
                this.state.dataLevel3.push('ทุกประเภท');

                //this.setState({ currentLevel1: e.target.value });

                this.state.listRow = [];
                this.state.listRow.push(this.state.currentLevel1)

                myDataLevel1_2.map((item) => {

                    if (this.state.currentLevel1 === item.level1 && item.level2 !== "") {

                        for (let i = 0; i < item.level2.length; i++) {
                            this.state.dataLevel2.push(item.level2[i]);
                        }

                    }
                });

                myDataLevel2_3.map(item2 => {

                    if (item2.level1 == this.state.currentLevel1 && item2.level2 == this.state.currentLevel2 && item2.level3 != "") {

                        for (let j = 0; j < item2.level3.length; j++) {
                            if(item2.level3[j] != ""){
                                this.state.dataLevel3.push(item2.level3[j]);
                            }
                        }
                    }
                })

            }
        }
        else if (this.state.currentLevel1 !== 'ทุกประเภท' && this.state.currentLevel2 !== 'ทุกประเภท' && this.state.currentLevel3 !== 'ทุกประเภท') { // ... ... ...

            this.state.dataLevel3 = [];
            this.state.dataLevel2 = [];

            this.state.dataLevel2.push('ทุกประเภท');
            this.state.dataLevel3.push('ทุกประเภท');

            this.state.listRow = [];
            this.state.listRow.push(this.state.currentLevel1)

            myDataLevel1_2.map((item) => {

                if (this.state.currentLevel1 === item.level1 && item.level3 !== "") {

                    for (let i = 0; i < item.level2.length; i++) {
                        this.state.dataLevel2.push(item.level2[i]);
                    }

                }
            });

            myDataLevel2_3.map(item2 => {

                if (item2.level1 == this.state.currentLevel1 && item2.level2 == this.state.currentLevel2 && item2.level3 != "") {

                    for (let j = 0; j < item2.level3.length; j++) {
                        this.state.dataLevel3.push(item2.level3[j]);
                    }
                }
            })
            
        }

    }

    render() {


          this.setData();

        return (
            <div>

                <header>
                    <h1>จำนวนโครงการที่สอดคล้องกับยุทธศาสตร์ชาติและแผนการปฏิรูปประเทศด้านต่างๆ</h1>

                    <div className="filters">

                        <h4 className="inLine">Level1 : </h4>
                        <select onChange={this.handleSelectLevel1Change} disabled = {this.state.onChangeL1}>
                            {this.uniqueArray(this.state.dataLevel1).map(opt => {
                                return (<option key={opt} value={opt}>{opt}</option>);
                            })}
                        </select>

                        <h4 className="inLine">Level2 : </h4>
                        <select onChange={this.handleSelectLevel2Change} disabled = {this.state.onChangeL2}>
                            {this.uniqueArray(this.state.dataLevel2).map(opt => {
                                return (<option key={opt} value={opt}>{opt}</option>);
                            })}
                        </select>

                        <h4 className="inLine">Level3 : </h4>
                        <select onChange={this.handleSelectLevel3Change} disabled = {this.state.onChangeL3}>
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


                </header>

                <section>
                    <Route path="/test" exact render={() =>
                        (<Page
                            myCurrentLevel1={this.state.currentLevel1}
                            myCurrentLevel2={this.state.currentLevel2}
                            myCurrentLevel3={this.state.currentLevel3}
                        />) 
                    }
                    />
                    <Route path="/" exact render={() =>
                        (<Page1
                            myCurrentLevel1={this.state.currentLevel1}
                            myCurrentLevel2={this.state.currentLevel2}
                            myCurrentLevel3={this.state.currentLevel3}
                        />)
                    }
                    />
                    <Route path="/1_2" exact render={() =>
                        (<Page1_2
                            myCurrentLevel1={this.state.currentLevel1}
                            myCurrentLevel2={this.state.currentLevel2}
                            myCurrentLevel3={this.state.currentLevel3}
                        />)
                    }
                    />
                    <Route path="/1_2_3" exact render={() =>
                        (<Page1_2_3
                            myCurrentLevel1={this.state.currentLevel1}
                            myCurrentLevel2={this.state.currentLevel2}
                            myCurrentLevel3={this.state.currentLevel3}
                            myDataLevel3={this.state.dataLevel3}
                        />)
                    } />

                    <Route path="/new1" exact render={() =>
                        (<Pagenew1
                            myCurrentLevel1={this.state.currentLevel1}
                            myCurrentLevel2={this.state.currentLevel2}
                            myCurrentLevel3={this.state.currentLevel3}
                            myDataLevel3={this.state.dataLevel3}
                        />)
                    } />

                    <Route path="/new1_2" exact render={() =>
                        (<Pagenew1_2
                            myCurrentLevel1={this.state.currentLevel1}
                            myCurrentLevel2={this.state.currentLevel2}
                            myCurrentLevel3={this.state.currentLevel3}
                            myDataLevel3={this.state.dataLevel3}
                        />)
                    } />

                    <Route path="/new1_2_3" exact render={() =>
                        (<Pagenew1_2_3
                            myCurrentLevel1={this.state.currentLevel1}
                            myCurrentLevel2={this.state.currentLevel2}
                            myCurrentLevel3={this.state.currentLevel3}
                            myDataLevel3={this.state.dataLevel3}
                        />)
                    } />

                </section>

            </div>
        );
    }
}

export default App;
