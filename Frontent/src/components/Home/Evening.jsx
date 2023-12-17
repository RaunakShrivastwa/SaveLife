import React from 'react'

function Evening() {
    return (
        <div>
            <div className='p-md-5 text-center'>

                <h2>What to do for fitness in the evening</h2>
            </div>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">

                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src="https://img.freepik.com/free-photo/side-view-elder-couple-doing-yoga-outside_23-2148729826.jpg?size=626&ext=jpg" class="d-block w-100" alt="..." />
                    </div>

                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://img.freepik.com/free-photo/people-having-happy-retirement-activity_23-2149168886.jpg?size=626&ext=jpg&ga=GA1.1.767874360.1702633317&semt=ais" class="d-block w-100" alt="..." />
                    </div>

                    <div class="carousel-item">
                        <img src="https://img.freepik.com/free-photo/happy-mature-couple-doing-stretching-exercises-with-help-physiotherapist-home_637285-7850.jpg?size=626&ext=jpg&ga=GA1.1.767874360.1702633317&semt=ais" class="d-block w-100" alt="..." />
                    </div>

                    <div class="carousel-item">
                        <img src="https://img.freepik.com/premium-photo/fitness-laptop-retirement-with-couple-living-room-virtual-class-health-yoga-exercise-internet-workout-pilates-with-old-man-elderly-woman-training-home-gym-wellness_590464-89249.jpg?size=626&ext=jpg&ga=GA1.1.767874360.1702633317&semt=ais" class="d-block w-100" alt="..." />
                    </div>

                    <div class="carousel-item">
                        <img src="https://img.freepik.com/free-photo/happy-senior-man-watching-tv-while-relaxing-bed-evening_637285-10451.jpg?size=626&ext=jpg&ga=GA1.1.767874360.1702633317&semt=ais" class="d-block w-100" alt="..." />
                    </div>

                    <div class="carousel-item">
                        <img src="https://img.freepik.com/free-photo/beautiful-old-couple-prepare-food-kitchen_1157-28257.jpg?size=626&ext=jpg&ga=GA1.1.767874360.1702633317&semt=ais" class="d-block w-100" alt="..." />
                    </div>

                    <div class="carousel-item">
                        <img src="https://img.freepik.com/free-photo/happy-mature-couple-doing-stretching-exercises-with-help-physiotherapist-home_637285-7850.jpg?size=626&ext=jpg&ga=GA1.1.767874360.1702633317&semt=ais" class="d-block w-100" alt="..." />
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default Evening