


  import { Component } from "react"
  import UserProfile from "./components/UserProfile"
  import './App.css'

  const userDetailsList = [
    {
      uniqueNo: 1,
      name: "Harish Yadav Pilli",
      role: "Frontend Developer",
      imageUrl: "./harish.jpg"
    },
    {
      uniqueNo: 2,
      name: "Priya Verma",
      role: "UI/UX Designer",
      imageUrl: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      uniqueNo: 3,
      name: "Rohan Mehta",
      role: "Backend Developer",
      imageUrl: "https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
      uniqueNo: 4,
      name: "Ankita Singh",
      role: "Product Manager",
      imageUrl: "https://randomuser.me/api/portraits/women/14.jpg"
    },
    {
      uniqueNo: 5,
      name: "Sandeep Joshi",
      role: "DevOps Engineer",
      imageUrl: "https://randomuser.me/api/portraits/men/15.jpg"
    },
    {
      uniqueNo: 6,
      name: "Neha Desai",
      role: "QA Engineer",
      imageUrl: "https://randomuser.me/api/portraits/women/16.jpg"
    },
    {
      uniqueNo: 7,
      name: "Kunal Patel",
      role: "Full Stack Developer",
      imageUrl: "https://randomuser.me/api/portraits/men/17.jpg"
    },
    {
      uniqueNo: 8,
      name: "Meera Iyer",
      role: "Business Analyst",
      imageUrl: "https://randomuser.me/api/portraits/women/18.jpg"
    },
    {
      uniqueNo: 9,
      name: "Nikhil Reddy",
      role: "Software Architect",
      imageUrl: "https://randomuser.me/api/portraits/men/19.jpg"
    },
    {
      uniqueNo: 10,
      name: "Swati Kulkarni",
      role: "Project Manager",
      imageUrl: "https://randomuser.me/api/portraits/women/20.jpg"
    },
    {
      uniqueNo: 11,
      name: "Varun Nair",
      role: "Mobile App Developer",
      imageUrl: "https://randomuser.me/api/portraits/men/21.jpg"
    },
    {
      uniqueNo: 12,
      name: "Ritika Malhotra",
      role: "Technical Writer",
      imageUrl: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    {
      uniqueNo: 13,
      name: "Deepak Aggarwal",
      role: "Database Administrator",
      imageUrl: "https://randomuser.me/api/portraits/men/23.jpg"
    },
    {
      uniqueNo: 14,
      name: "Pooja Das",
      role: "Scrum Master",
      imageUrl: "https://randomuser.me/api/portraits/women/24.jpg"
    },
    {
      uniqueNo: 15,
      name: "Mahesh",
      role: "Cloud Engineer",
      imageUrl: "./Mahesh.jpg.jpg"
    },
    {
      uniqueNo: 16,
      name: "Sneha Sinha",
      role: "AI/ML Engineer",
      imageUrl: "https://randomuser.me/api/portraits/women/26.jpg"
    },
    {
      uniqueNo: 17,
      name: "Arvind Chauhan",
      role: "System Administrator",
      imageUrl: "./Hariprasad.jpg.JPG"
    },
    {
      uniqueNo: 18,
      name: "Ishita Bose",
      role: "Graphic Designer",
      imageUrl: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
      uniqueNo: 19,
      name: "Manoj Pillai",
      role: "Technical Lead",
      imageUrl: "https://randomuser.me/api/portraits/men/29.jpg"
    },
    {
      uniqueNo: 20,
      name: "Lavanya Rao",
      role: "Security Analyst",
      imageUrl: "https://randomuser.me/api/portraits/women/30.jpg"
    }
  ];

  class App extends Component {
    state = {
      searchInput: '',
    }

    onChangeSearchInput = event => {
      this.setState({ searchInput: event.target.value })
    }

    render() {
      const { searchInput } = this.state
      const searchResults = userDetailsList.filter(eachUser =>
        eachUser.name.toLowerCase().includes(searchInput.toLowerCase())
      )

      return (
        <div className="bg-container">
          <h1 className="users">Users List</h1>
          <input
            type="search"
            placeholder="Search By Name"
            onChange={this.onChangeSearchInput}
          />
          <div className="text">
            <div>S.NO</div>
            <div>UserProfile</div>
            <div>Name</div>
            <div className="role-text">Role</div>


          </div>
          <ul>
            {searchResults.map((eachItem,index) => (
              <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} serialNo={index + 1}/>
            ))}
          </ul>
        </div>
      )
    }
  }

  export default App
