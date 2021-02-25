import { LightningElement, track  } from 'lwc';

export default class Testlwc extends LightningElement {
    @track jobTitle = '';
    handleChange(event){
        this.jobTitle = event.target.value;
     }

}