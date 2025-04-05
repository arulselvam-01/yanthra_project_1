import React from 'react'
import "./styles/app_man.css"

export const App_man = () => {
  return (
    <>
        <div className="window">
            {/* left menu containner */}
            <div className="left_containner">

                {/* back button */}
                <div className="back_button">{"<"}</div>

                {/* profile containner */}
                <div className="profile_containner">
                    <div className="profile"></div>
                    <div className="profile_name">Arulselvam</div>
                </div>

                {/* menu_containner */}
                <div className="menu_containner">
                    {/* sales management */}
                    <ul className="salesforce_management_con">
                        SALESFORCE MANAGEMENT
                        <li>Visit Manager</li>
                        <li>Doctor List</li>
                        <li>Expense Claim</li>
                        <li>Contents</li>
                        <li>Patient List</li>
                        <li>Appointment Manager</li>
                    </ul>

                    {/* human resource*/}
                    <ul className="human_resource_con">
                        HUMAN RESOURCE
                        <li>user</li>
                        <li>payroll</li>
                        <li>reimbursement</li>
                        <li>letters</li>
                        <li>leave management</li>
                    </ul>

                    {/* marketing automations */}
                    <ul className="marketing_automation_con">
                        MARKETING AUTOMATIONS
                        <li>segments</li>
                        <li>templates</li>
                        <li>campaigns</li>
                    </ul>

                    {/* configurations */}
                    <ul className="configuration_con">
                        CONFIGURATIONS
                        <li>Settings</li>
                    </ul>


                </div>
            </div>




            {/* right window */}
            <div className="right_containner">

                <div className="top_search_containner">
                    <div className="search_bar">
                        <img src="./search.svg" alt="" />
                        <input type="text" placeholder='Search' />
                    </div>

                    <img src="./search.svg" alt="" />
                    <img src="./bell.svg" alt="" />
                    <div className="search_bar_profile"></div>
                </div>

                {/* appointment manager */}

                <div className="app_man_con">
                    <div className="app_man_heading">
                        Appointment Manager
                    </div>

                    <div className="new_sechedule_con">
                        <img src="./cycle.svg" alt="" />
                        <img src="./doctor.svg" alt="" />
                        <button>+ New Sechedule</button>
                    </div>

                    <div className="display_con">
                        <div className="left_profile_con">
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Territory</th>
                                    </tr>
                                </thead>

                                <tr>
                                    <td>
                                        <img src="./profile.svg" alt="" />
                                    </td>
                                    <td className='name' >arul
                                        <div className="hash">jdnfuy347ghurfc7834</div>
                                    </td>
                                    <td><div className="loco">chennai</div></td>
                                </tr>
                                <tr>
                                    <td>
                                    <img src="./profile.svg" alt="" />
                                    </td>
                                    <td className='name'>robert
                                    <div className="hash">jdnfuy347ghurfc7834</div>
                                    </td>
                                    <td><div className="loco">chennai</div></td>
                                </tr>
                                <tr>
                                    <td>
                                    <img src="./profile.svg" alt="" />
                                    </td>
                                    <td className='name'>leo
                                    <div className="hash">jdnfuy347ghurfc7834</div>
                                    </td>
                                    <td><div className="loco">chennai</div></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="./profile.svg" alt="" />
                                    </td>
                                    <td className='name'>mani
                                    <div className="hash">jdnfuy347ghurfc7834</div>
                                    </td>
                                    <td><div className="loco">chennai</div></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="./profile.svg" alt="" />
                                    </td>
                                    <td className='name'>rohith
                                    <div className="hash">jdnfuy347ghurfc7834</div>
                                    </td>
                                    <td><div className="loco">chennai</div></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="./profile.svg" alt="" />
                                    </td>
                                    <td className='name'>michael sree
                                    <div className="hash">jdnfuy347ghurfc7834</div>
                                    </td>
                                    <td><div className="loco">chennai</div></td>
                                </tr>
                            </table>
                        </div>

                        <div className="right_menu_con">
                            <div className="app_man_menu">
                                <li className='blue' >Upcomming
                                    <div className="round_num">0</div>
                                </li>
                                <li>Completed
                                    <div className="round_num">0</div>
                                </li>
                                <li>Cancelled
                                    <div className="round_num">0</div>
                                </li>
                            </div>

                            <div className="no_data">
                                No data found
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}
