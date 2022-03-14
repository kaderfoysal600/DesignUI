import React from "react";
import SocialElementLeft from "../components/SocialElementLeft";

export default function SocialLeft() {
  return <div>
                 
                    <ul className="social horizontal-list block">{/* SOCIAL (LEFT-CONTAINER)  */}
                    <SocialElementLeft name='facebook' className = 'zocial-facebook' number = '248k'/>
                    <SocialElementLeft name='twitter' className = 'zocial-twitter' number = '30k'/>
                    <SocialElementLeft name='googleplus' className = 'zocial-googleplus' number = '124k'/>
                    <SocialElementLeft name='mailbox' className = 'fontawesome-envelope' number = '89k'/>
                </ul>
  </div>;
}
