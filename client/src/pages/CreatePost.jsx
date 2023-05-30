import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";
import { useState } from "react";
import ReactDOM from "react-dom/client";

export default function CreatePost() {
    return(
        <form>
            <input type="tittle" placeholder={'Title'}/>
            <input type="summary" placeholder={'Summary'}/>
            <input type="author" placeholder={'Summary'}/>
            <input type="summary" placeholder={'Summary'}/>
            <input type="file"/>
            <ReactQuill/>
        </form>
    );
}