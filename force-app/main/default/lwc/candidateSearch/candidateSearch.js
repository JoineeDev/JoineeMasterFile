import { LightningElement, track } from 'lwc';

export default class CandidateSearch extends LightningElement {
    @track searchResultAvailable = false;
    handleSearch(event) {
        //Added Comment for Git
        this.searchResultAvailable = true;
        alert(this.searchResultAvailable);
    }
}