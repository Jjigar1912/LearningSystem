import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import "./style.css";
const Add = ()=>{
    return(
        <>
        <Header />
        <div class="main-container">
        <Navbar />
        <div class="main">
            
        <div class="add-course-container add-course" id="add-course">
                <div class="report-header">
                    <h1 class="recent-Articles">Create Course</h1>
                </div>
<div class="container">
        <h1>Create Course</h1>
        <p>Have any questions or suggestions? Drop us a message</p>
        <form>
            <div class="row">
                <div class="column">
                    <label for="course-name">Course Name</label>
                    <input type="text" id="course-name" placeholder="Your name here" />
                </div>
                <div class="column">
                    <label for="headline">Headline</label>
                    <input type="email" id="headline" placeholder="Your email here" />
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <label for="category">Category</label>
                    <select name="category" id="category">
                        <option selected disabled value="">Select category</option>
                        <option value="Programming">Programming</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Soft Skill">Soft Skill</option>
                    </select>
                </div>
                <div class="column">
                    <label for="difficulty">difficulty Level</label>
                    <select name="difficulty" id="difficulty">
                        <option selected disabled value="">select difficulty Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advance">Advance</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <label for="description">Describe your issue</label>
                    <textarea id="description" placeholder="Describe your issue in detail here" rows="3"></textarea>
                </div>
            </div>
            <button>Create</button>
        </form>
    </div>
        </div>
        </div>
        </div>
        </>
    );
}
export default Add;