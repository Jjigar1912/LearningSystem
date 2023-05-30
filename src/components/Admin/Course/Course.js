import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import team1 from "./team-1.jpg";
const Course = ()=>{
    return(
        <>
            <Header />
            <div class="main-container">
            <Navbar />
            <div class="main">
            <div id="courses" class="course-container">
                <div class="course-header">
                    <h1 class="recent-Articles">Recent Courses</h1>
                    <div>
                        <button class="view">Create</button>
                        <button class="view">All</button>
                    </div>
                </div>
                <div class="course-list">
                    <div class="container">
                        <div class="course">
                            <div class="img">
                                <img src={team1} alt="" />
                            </div>
                            <div class="content">
                                <h2 class="course-title">Core Java</h2>
                                <h4>Lorem ipsum dolor sit amet elit. Natus, sint?</h4>
                                <div style={{display: "flex",justifyContent: "space-between"}}>
                                    <p class="lesson">10 lesson</p>
                                    <button type="button">View Course</button>
                                </div>
                            </div>
                        </div>

                        <div class="course">
                            <div class="img">
                                <img src={team1} alt="" />
                            </div>
                            <div class="content">
                                <h2 class="course-title">Core Java</h2>
                                <h4>Lorem ipsum dolor sit amet elit. Natus, sint?</h4>
                                <div style={{display:"flex",justifyContent: "space-between"}}>
                                    <p class="lesson">10 lesson</p>
                                    <button type="button">View Course</button>
                                </div>
                            </div>
                        </div>


                        <div class="course">
                            <div class="img">
                                <img src={team1} alt="" />
                            </div>
                            <div class="content">
                                <h2 class="course-title">Core Java</h2>
                                <h4>Lorem ipsum dolor sit amet elit. Natus, sint?</h4>
                                <div style={{display:"flex",justifyContent: "space-between"}}>
                                    <p class="lesson">10 lesson</p>
                                    <button type="button">View Course</button>
                                </div>
                            </div>
                        </div>

                        <div class="course">
                            <div class="img">
                                <img src={team1} alt="" />
                            </div>
                            <div class="content">
                                <h2 class="course-title">Core Java</h2>
                                <h4>Lorem ipsum dolor sit amet elit. Natus, sint?</h4>
                                <div style={{display:"flex",justifyContent: "space-between"}}>
                                    <p class="lesson">10 lesson</p>
                                    <button type="button">View Course</button>
                                </div>
                            </div>
                        </div>


                        <div class="course">
                            <div class="img">
                                <img src={team1} alt="" />
                            </div>
                            <div class="content">
                                <h2 class="course-title">Core Java</h2>
                                <h4>Lorem ipsum dolor sit amet elit. Natus, sint?</h4>
                                <div style={{display:"flex",justifyContent: "space-between"}}>
                                    <p class="lesson">10 lesson</p>
                                    <button type="button">View Course</button>
                                </div>
                            </div>
                        </div>


                        <div class="course">
                            <div class="img">
                                <img src={team1} alt="" />
                            </div>
                            <div class="content">
                                <h2 class="course-title">Core Java</h2>
                                <h4>Lorem ipsum dolor sit amet elit. Natus, sint?</h4>
                                <div style={{display:"flex",justifyContent: "space-between"}}>
                                    <p class="lesson">10 lesson</p>
                                    <button type="button">View Course</button>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            </div>
            </div>
           
        </>
    );
}
export default Course;