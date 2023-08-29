import ProposalWrapper from "@/components/proposals/ProposalWrapper";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import Textarea from "@/components/ui/textarea";

export default function Resources() {
    return (
        <>
            <ProposalWrapper title={'Resources / Tool Kit Implemented'}>
                <div className="w-full">
                    <div className={'flex justify-between items-center gap-6 mb-3'}>
                        <h3 className={'text-[18px] font-semibold'}>Introduction</h3>
                        <div className={'flex items-center text-primary'}>
                            <Checkbox id={'resourcesIntro'}/><Label htmlFor={'resourcesIntro'}
                                                                    className={'ml-2'}>Include?</Label>
                        </div>
                    </div>

                    <Textarea>
                        {`
                            <h4>NSS Team</h4>
                            <ul>
                            <li>Joe Farrar : CMO</li>
                            <li>Christine Abbate : Project Manager / SEO Specialist</li>
                            <li>Blane Perun : SEO / SEM / SMO Specialist</li>
                            <li>Peter Roesler : SEO / SEM / SMO Specialist</li>
                            <li>Sean Josiah : Senior Programmer / Database Administrator</li>
                            <li>Donald Cogswell : Senior Programmer / Database Administrator</li>
                            <li>Ryan Sammy : SEO / SEM / SMO Specialist</li>
                            <li>Terri Polk : SEO Content Writer</li>
                            <li>David Perry : Senior IT Specialist</li>
                            <li>Sean Cook : Senior Joomla Designer, Flash Developer</li>
                            <li>Rick Potratz Junior Programmer / Database Administrator</li>
                            <li>Jesper Dinesen : Joomla / Opensource Programmer</li>
                            <li>Drausio R. Haddad : Web Designer</li>
                            <li>Lee Bankewitz : Programmer</li>
                            <li>Kolitha de Silva : MOSS Technician</li>
                            </ul>
                            <h4>Extensive knowledge of</h4>
                            
                            <ul>
                            <li>Search Engine Optimization</li>
                            <li>Search Engine Marketing</li>
                            <li>Social Media Optimization</li>
                            <li>SEO / SEM / SMO Tools, Tricks, Trade</li>
                            <li>A / B Split Testing</li>
                            <li>XHTML Strict 1.0/ CSS</li>
                            <li>Link Building</li>
                            <li>Link Baiting</li>
                            <li>Link Directories - Creation / Maintenance / Management</li>
                            <li>Article Syndication</li>
                            <li>Content Creation</li>
                            <li>Social Bookmarking</li>
                            <li>Blogs - Creation / Maintenance / Management</li>
                            <li>eCommerce</li>
                            <li>Web Analytics</li>
                            <li>Dreamweaver</li>
                            <li>Fireworks</li>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>3-D imaging</li>
                            <li>ASP</li>
                            <li>PHP</li>
                            <li>SQL Server</li>
                            <li>Flash</li>
                            <li>Web Design</li>
                            <li>Programming</li>
                            <li>Database design / implementation</li>
                            <li>Server setup / maintenance</li>
                            </ul>
                            <ol>
                            <li>Incorporation of Cascading Style Sheets to make website presentation more consistent across different browsers including the way it is seen by people using IE 6, IE 7, FireFox or Safari Browsers.</li>
                            <li>Most modern, design practices available.</li>
                            <li>Ability to setup the Hosting / maintain the site/ add email addresses as needed/ add or delete pages on a dedicated server.</li>
                            </ol>
                            <p>If there is a problem we will assist you even if it is after Business hour(s).  After hours / weekend hours rate is 2x our prevailing rate hourly of $!RATE!.00</p>
                      `}

                    </Textarea>
                </div>

            </ProposalWrapper>
        </>
    )
}

