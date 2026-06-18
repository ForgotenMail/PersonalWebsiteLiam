const complianceHtml = `<h1>Report Mosquitoes Online - Self-Initiated Compliance Report Test Plan</h1>
<p>This covers testing the “Self-Initiated Compliance Report” flow of Report Mosquitoes Online.</p>
<p><a href="https://staging-report.mosquitoes.online/district/delta-mvcd/compliance">https://staging-report.mosquitoes.online/district/delta-mvcd/compliance</a></p>
<h1>Begin Flow</h1>
<p>Members of the public will be given a QR code that goes to a district-specific URL. For example, Delta uses the URL <a href="https://report.mosquitoes.online/district/delta-mvcd/compliance">https://report.mosquitoes.online/district/delta-mvcd/compliance</a></p>
<ul>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Navigate to <a href="https://staging-report.mosquitoes.online/district/delta-mvcd/compliance">https://staging-report.mosquitoes.online/district/delta-mvcd/compliance</a></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The URL should change as soon as the page loads to contain the report’s public ID. For example, <a href="https://staging-report.mosquitoes.online/compliance/8C49FR7S6XMQ">https://staging-report.mosquitoes.online/compliance/8C49FR7S6XMQ</a>. The code will be the same as the code you received earlier.</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The bottom of the website says “reference number:” and the number it provides should be the same as the number at the end of your URL.</label></li>
</ul>
<h1>Flow Introduction</h1>
<h2>Navigation</h2>
<ul>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “get started” on the opening page</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image1.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Confirm the property address”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Upload photos of the area”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Property access permission”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Contact information”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “What happens next”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Review and submit your response”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Back”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Review and submit your response”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Back”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “What happens next”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Back”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Contact information”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Back”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Property access permission”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Back”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Upload photos of the area”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Back”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Confirm the property address”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Back”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are back on the starting page of the website.</label></li>
</ul>
<h2></h2>
<h2>Progress Bar</h2>
<ul>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Load the webpage</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You see the following: (Ensure everything looks identical to the following screenshot <em>Except the reference number should be different</em>)</label></p>
<pre><code>&lt;img src=&quot;pictures/test-plan-compliance/image2.png&quot; alt=&quot;&quot; style=&quot;max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;&quot;&gt;  
</code></pre>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “get started” on the opening page</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now at “Confirm property address”.The progress bar now says “2 of 7” and the blue has filled up 2/7s of the gray bar (Compare to screenshot)<img src="pictures/test-plan-compliance/image3.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “back”</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are back at the starting page. The progress bar now says “1 of 7” and is 1/7s full (compare to screenshot)<br>
<img src="pictures/test-plan-compliance/image2.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “get started”</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now at “Confirm property address”.The progress bar now says “2 of 7” (compare to screenshot)<img src="pictures/test-plan-compliance/image3.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now at “Upload photos of the area”. The progress bar says “3 of 7”<img src="pictures/test-plan-compliance/image4.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now at “Property access permission”. The progress bar says “4 of 7” and is 4/7s full.<img src="pictures/test-plan-compliance/image5.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now at “Contact information”. The progress bar says “5 of 7” and is 5/7 full.<img src="pictures/test-plan-compliance/image6.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now at “What happens next”. The progress bar says “6 of 7” and is now 6/7s full.<img src="pictures/test-plan-compliance/image7.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now at “Review and submit your response”. The progress bar says “7 of 7” and is now fully blue.</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image8.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Submit response</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The progress bar is gone and you now see “Response Received&quot; and additional information.<img src="pictures/test-plan-compliance/image9.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
</ul>
<h1>Link and ID</h1>
<ul>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Load the webpage</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You see the the following.<br>
<img src="pictures/test-plan-compliance/image10.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Close the tab (Ensure you know what your previous report ID was)</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You don’t see the compliance report window anymore.</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click on this link: <a href="https://staging-report.mosquitoes.online/district/delta-mvcd/compliance">https://staging-report.mosquitoes.online/district/delta-mvcd/compliance</a></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are taken to the starting page with the same ID as you had previously.</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click continue until you can submit the report, then submit it.</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You see this:</label></li>
</ul>
<h2></h2>
<ul>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image11.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Close that tab and click on this link, <a href="https://staging-report.mosquitoes.online/district/delta-mvcd/compliance">https://staging-report.mosquitoes.online/district/delta-mvcd/compliance</a></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: Your Report ID number will now be different from the previous ID number you had</label></li>
</ul>
<h1>Report Address</h1>
<ul>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Load the webpage</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You see opening page (should look the same as the screenshot in progress bar testing)</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “get started”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on “Confirm the Property Address”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the “Start typing address” box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: Box is outlined in orange and the cursor is blinking in the box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Type “<strong>1313 Disneyland Dr, Anaheim, CA 92802</strong>” into the address box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: Underneath the box auto-complete results appear<img src="pictures/test-plan-compliance/image12.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Select the first option “1313 Disneyland Drive”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The full address is now in the box<img src="pictures/test-plan-compliance/image13.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Locate the map and simply look at it</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The red dot should now be where Disneyland is**<img src="pictures/test-plan-compliance/image14.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;">**</label></li>
</ul>
<h1>Map Mechanics</h1>
<ul>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Load the webpage</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You see opening page (should look the same as the screenshot in progress bar testing)</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “get started”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on “Confirm the Property Address” (Ensure you don’t have an address in the box)</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click on the map</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: Top right corner now says “Map Active”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image15.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the “Map Active” button</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: Button is yellow and says “Map locked”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image16.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the map or the button to unlock the map. Then click the “+” on the left side</label></li>
</ul>
 <img src="pictures/test-plan-compliance/image17.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;">
<ul>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The map zooms in a little</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image18.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the “-” button</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The map zooms out a little and returns you to the original zoomed in level</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image19.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click on “Kansas”</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: A red dot appears, covering “Kansas”<img src="pictures/test-plan-compliance/image20.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the  “+” button</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The map zooms in on the red dot</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the “+” button two more times</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The map shows some more details of Kansas and stays centered on the red dot<img src="pictures/test-plan-compliance/image21.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the “-” button 3 times</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The map is zoomed out back to it’s original state</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Hold left click on the map, and drag your mouse left until the maps flips 180 degrees. Be careful not to move your mouse up and down, or you’ll change the angle you’re looking at the map.</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The map looks flipped 180 degrees and the compass (two triangles, one filled in and one empty facing opposite directions) now has the dark triangle on the bottom<img src="pictures/test-plan-compliance/image22.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the compass button</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The map rotates back to N-S orientation<img src="pictures/test-plan-compliance/image23.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Hold left click on the map and drag your mouse up</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The map is tilted so you see it at a different angle<img src="pictures/test-plan-compliance/image24.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Hold left click and drag your mouse up until the map looks flat again</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The map should look flat now instead of angled<img src="pictures/test-plan-compliance/image25.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Right click on the gray (sea) near “North atlantic ocean”. Move your mouse left and right</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The map should smoothly move back and forth, going far left will show you more ocean and going right should should you parts of Europe</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Right click on the sea again. Move your mouse up and down</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The map should smoothly move up and down, showing you greenland when you move your mouse up and the tops of south america when you move down</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Hit the “back button” on the page<img src="pictures/test-plan-compliance/image26.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image27.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the starting page now</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Get started”</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are back on the “Confirm the property address” screen. The map should be zoomed in on the spot you clicked (Kansas). The “i” icon on the bottom right corner will show some information. The map will be locked.<img src="pictures/test-plan-compliance/image28.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click on the “i” button</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The information will go away and it will be outlined in blue</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image29.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Unlock the map and zoom the furthest you can out.</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: Your map will look like this<img src="pictures/test-plan-compliance/image30.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the “i” icon</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The “i” will show the information again</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Asia”</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The red dot will move to the spot you clicked and the map will zoom in on the red dot</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the “-” button multiple times ~15 times</label></p>
</li>
<li>
<p><label style="cursor:pointer;display:inline-flex;align-items:flex-start;gap:6px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You should be zoomed out enough to see all of Asia</label></p>
</li>
</ul>
<h1>Adding Photos</h1>
<ul>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Load the webpage</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You see opening page (should look the same as the screenshot in progress bar testing)</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “get started”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on “Confirm the Property Address”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the “Upload photos of the Area” part</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “add photos”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: File selector for your computer appears</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Select a photo from your files and add it/open the file (differs for what computer you use)</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The photo appears in the bottom left corner <img src="pictures/test-plan-compliance/image31.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the little “x” on the picture</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The picture disappears and the box is empty again</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image32.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Add a picture (The exact same way as before.)</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The picture appears in the corner</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Add another picture</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: Two pictures are seen side by side in the left corner<img src="pictures/test-plan-compliance/image33.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Add another picture</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: Three pictures side by side<img src="pictures/test-plan-compliance/image34.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Add another picture</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: 4 pictures side by side<img src="pictures/test-plan-compliance/image35.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Add another picture</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: 5 pictures side by side<img src="pictures/test-plan-compliance/image36.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the “x” on the picture you just added</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: 4 pictures remain</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image35.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “x” on the next picture</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: 3 pictures remain<img src="pictures/test-plan-compliance/image34.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: “x” out the very first picture you added</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The other two pictures slide left to fill the empty space</label></li>
</ul>
<p>Before: <strong><img src="pictures/test-plan-compliance/image37.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></strong><br>
After: <img src="pictures/test-plan-compliance/image38.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></p>
<ul>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: “x” out the first picture</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The last picture is the only one to remain<br>
Before:</label></li>
</ul>
<p><img src="pictures/test-plan-compliance/image38.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;">After: <img src="pictures/test-plan-compliance/image39.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></p>
<ul>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: “x” out of the last picture</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: There are no more pictures in the box</label></li>
</ul>
<h1>Text Box in “Upload photos of the Area”</h1>
<ul>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “get started on the opening page”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on “Confirm the Property Address”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on “Upload Photos of the Area”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the text box under”Additional Comments (Optional)”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: Your cursor is in the box and the box is outlined by orange<img src="pictures/test-plan-compliance/image40.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Type the phrase “Hahah I love working for the coolest guy”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The words you type are now in the box <img src="pictures/test-plan-compliance/image41.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Delete the words (Backspace or click &amp; drag delete)</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The box is empty and back to its original look</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Spam the letter “k” in the box until it begins a new line</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The letter “k” goes to the end of the box before wrapping down in the new line<img src="pictures/test-plan-compliance/image42.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Delete all the “k”s</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The box is empty and back to its original look</label></li>
</ul>
<h1>Property Access Permission Buttons</h1>
<ul>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “get started” on the opening page</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on “Confirm the Property Address”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on “Upload photos of the area”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on “Property Access Permission”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Hover your mouse over “A technician may enter even if I am not home”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><strong><img src="pictures/test-plan-compliance/image43.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></strong></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The button is outlined in blue and the box turns gray (I am unable to provide screenshots, but it’s similar to other mouse hovering characteristics of this website except its blue and the box is gray)</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Hover your mouse over “A technician may enter, but I want to be present”<img src="pictures/test-plan-compliance/image44.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The button is outlined in blue and the box turns gray</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Hover your mouse over “I am not granting entry at this time”<img src="pictures/test-plan-compliance/image45.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The button is outlined in blue and the box turns gray</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click on “A technician may enter even if I am not home”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The circle is filled in with blue and options open under the box<br>
<img src="pictures/test-plan-compliance/image46.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click on “A technician may enter, but I want to be present”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The circle is filled in with blue and more options appear<img src="pictures/test-plan-compliance/image47.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click on “I am not granting entry at this time”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The circle is filled in blue and more options appear</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image48.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click on “A technician may enter even if I am not home”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The circle is filled blue and more options appear (refer to prior screenshots)</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the text box under “Access instructions (Optional)”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The box is outlined in orange and your cursor is inside.<img src="pictures/test-plan-compliance/image49.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Type “I live in the sleeping beauty castle in Disney land so just enter ig lol”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The words are in the box<img src="pictures/test-plan-compliance/image50.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Delete all the words in the box’</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The box is blank and back to its original look <img src="pictures/test-plan-compliance/image49.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click on the text box under “Gate Code (Optional)”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The box is highlighted in orange and your cursor is in the box<img src="pictures/test-plan-compliance/image51.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Type “The magic word is please” into the box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The words are in the box<img src="pictures/test-plan-compliance/image52.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Delete the words</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The box is empty and back to it’s original look<img src="pictures/test-plan-compliance/image51.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the square next to “Dog on Property?”<img src="pictures/test-plan-compliance/image53.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The square is filled in orange with a checkmark and additional words appear below<img src="pictures/test-plan-compliance/image54.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the box filled in orange</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The Dog on Property option is deselected and goes back to its original state<img src="pictures/test-plan-compliance/image53.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “A technician may enter, but I want to be present”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The circle is filled in with blue and a text box appears (refer to prior screenshots for more details)</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click on the text box below “Availability/Access Notes (optional)”<img src="pictures/test-plan-compliance/image55.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The box is outlined in orange and your cursor is in the box<img src="pictures/test-plan-compliance/image56.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Type “Bro i’m always at disneyland, you’ll never catch me, captain hook!”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The words are now in the box<img src="pictures/test-plan-compliance/image57.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Delete all the words from the box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The box is empty and back to it’s original state. Refer to prior screenshots for more details.</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the square next to the words “I would like to request a scheduled visit”<img src="pictures/test-plan-compliance/image58.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The box is checked in orange with a little white checkmark<br>
<img src="pictures/test-plan-compliance/image59.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the square that is filled in orange</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The box is no longer orange, and is now white.</label></li>
</ul>
<h1>Contact Information</h1>
<ul>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “get started” on the opening page</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image1.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Confirm the property address”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Upload photos of the area”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Property access permission”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Contact information”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the text box under “Name”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image60.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The box is outlined in orange and your cursor is in the box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image61.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;">\\</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Type “Alain Delon” into the box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: “Alain Delon” is now in the box (and in my heart)<img src="pictures/test-plan-compliance/image62.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: click the box under “Phone number (Optional)”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image63.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"><img src="pictures/test-plan-compliance/image64.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"><img src="pictures/test-plan-compliance/image65.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The box is outlined in orange and your cursor is in the box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image66.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Type “1911911991” into the box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: “1911911991” is now in the box<img src="pictures/test-plan-compliance/image67.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Look at the box next to “You may send text messages to this number”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The box should already be filled in<img src="pictures/test-plan-compliance/image68.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the filled in box next to “You may send text messages to this number”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The box is now unselected and white<img src="pictures/test-plan-compliance/image69.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the box under “Email Address (Optional)”<br>
<img src="pictures/test-plan-compliance/image70.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The box is outlined in orange and your cursor is in the box<img src="pictures/test-plan-compliance/image71.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Type “alain.is.cool@france.com” in the text box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: “alain.is.cool@france.com” is now in the box<br>
<img src="pictures/test-plan-compliance/image72.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Look at the page as a whole</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: Compare what you see with the following screenshot. Ensure everything matches<img src="pictures/test-plan-compliance/image73.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Delete the text from “Name”, “Phone number”, and “Email address”.</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The page should look like this: <img src="pictures/test-plan-compliance/image74.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
</ul>
<h1>Review and Submit your response</h1>
<ul>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the “get started” button on the starting page</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on “Confirm the Property Address”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Type “Disneyland 1313” into the address box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: fill in options appear</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image75.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the top option</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The address gets fully filled in and the map has a dot on the specific address</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image76.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on “Upload photos of the area”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Upload a photo</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The photo is in the little box<img src="pictures/test-plan-compliance/image77.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"><img src="pictures/test-plan-compliance/image78.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"><img src="pictures/test-plan-compliance/image79.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Write “The Mosquitoes are so gross :(“ into the text box under “additional comments”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: “The mosquitoes are so gross :(“ is now in the box<img src="pictures/test-plan-compliance/image80.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on “Property Access Permission”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the box “A technician may enter even if I am not home”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The box next to the option is filled in blue and more options appear</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image81.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Type “Just walk through the front door and into the backyard” into the box under “Access Instructions”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result; “Just walk through the front door and into the backyard” is now in the box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image82.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Write “Yell LET IT GO LET IT GO really loudly” under “Gate code (optional)</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: Yell LET IT GO LET IT GO really loudly is now in the box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image83.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Check the box next to “Dog on property”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The box is filled in with orange and a little white checkmark<img src="pictures/test-plan-compliance/image84.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on “Contact Information”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Write “Alain Delon” in the name box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The name “Alain Delon” is now in the box<img src="pictures/test-plan-compliance/image85.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Write “5551234567” into the phone number box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result “5551234567” is now in the box<img src="pictures/test-plan-compliance/image86.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: write “alain.is.cool@france.com “ in the email box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: “alain.is.cool@france.com” is now in the box<img src="pictures/test-plan-compliance/image87.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on “What happens next”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on “Review and submit your response” with all your information filled out<img src="pictures/test-plan-compliance/image88.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Submit the response</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You get a screen that looks like the following<img src="pictures/test-plan-compliance/image89.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"><strong><img src="pictures/test-plan-compliance/image90.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"><img src="pictures/test-plan-compliance/image91.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></strong></label></li>
</ul>
<h1>Retaining Information</h1>
<ul>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the “get started” button on the starting page</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on “Confirm the Property Address”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Type “Disneyland 1313” into the address box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: fill in options appear</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image75.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the top option</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The address gets fully filled in and the map has a dot on the specific address</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image76.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “back”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on the starting page</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “get started”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on the address page, with the disneyland address still in the box and the map with the dot</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image76.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on “Upload photos of the area”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Upload a photo</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The photo is in the little box<img src="pictures/test-plan-compliance/image77.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"><img src="pictures/test-plan-compliance/image78.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"><img src="pictures/test-plan-compliance/image79.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Write “The Mosquitoes are so gross :(“ into the text box under “additional comments”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: “The mosquitoes are so gross :(“ is now in the box<img src="pictures/test-plan-compliance/image80.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “back”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on the address page and the address information is still present</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on “Upload photos of the area” with all the information you added previously still there. Except, the photo will no longer be visible and there will be words under the add photo box saying you already added a photo<img src="pictures/test-plan-compliance/image92.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on “Property Access Permission”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click the box “A technician may enter even if I am not home”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The box next to the option is filled in blue and more options appear</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image81.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Type “Just walk through the front door and into the backyard” into the box under “Access Instructions”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result; “Just walk through the front door and into the backyard” is now in the box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image82.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Write “Yell LET IT GO LET IT GO really loudly” under “Gate code (optional)</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: Yell LET IT GO LET IT GO really loudly is now in the box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image83.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Check the box next to “Dog on property”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The box is filled in with orange and a little white checkmark<img src="pictures/test-plan-compliance/image84.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “back”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on “Upload photos of the property” All the information should still be there and look the same. <img src="pictures/test-plan-compliance/image92.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on “Property Access Permission” and all the information should be the same and look the same</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image93.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on “Contact Information”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Write “Alain Delon” in the name box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The name “Alain Delon” is now in the box<img src="pictures/test-plan-compliance/image94.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Write “5551234567” into the phone number box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result “5551234567” is now in the box<img src="pictures/test-plan-compliance/image95.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: write “alain.is.cool@france.com “ in the email box</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: “alain.is.cool@france.com” is now in the box<img src="pictures/test-plan-compliance/image96.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “back”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on “Property Access Permission&quot; and all the prior information should still be there.<img src="pictures/test-plan-compliance/image97.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on “Contact Information” and all of the information you input earlier is still there</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image98.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on “What happens next”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are now on “Review and submit your response” with all your information filled out<img src="pictures/test-plan-compliance/image99.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Submit the response</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You get a screen that looks like the following<img src="pictures/test-plan-compliance/image89.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"><strong><img src="pictures/test-plan-compliance/image90.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"><img src="pictures/test-plan-compliance/image91.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></strong></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Go to the URL and delete the “/complete” and press enter <img src="pictures/test-plan-compliance/image100.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The URL does not have the “/complete” and you are now at the starting page but the sequence of numbers and letters in the URL matches the sequence of letters and numbers at the bottom of the website</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image101.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"><img src="pictures/test-plan-compliance/image102.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"><img src="pictures/test-plan-compliance/image103.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image104.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"><img src="pictures/test-plan-compliance/image105.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"><img src="pictures/test-plan-compliance/image106.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
</ul>
<h1></h1>
<ul>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “get started” on the opening page</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image1.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Confirm the property address” with all of the information still there. <img src="pictures/test-plan-compliance/image107.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Upload photos of the area”. All the information is still there. <img src="pictures/test-plan-compliance/image108.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Property access permission” All the information is still there. <img src="pictures/test-plan-compliance/image109.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Contact information”All the information is still there. <img src="pictures/test-plan-compliance/image110.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “What happens next”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Review and submit your response” All the information is still there. <img src="pictures/test-plan-compliance/image111.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
</ul>
<h1>Submission Review Sufficiency</h1>
<ul>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “get started” on the opening page</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image1.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Confirm the property address”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Input an address, Ex “Disneyland 1313” and click the auto-fill option</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The address you picked is in the address box fully filled out. The map has a red dot on where your address is on the world map.</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Upload photos of the area”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Property access permission”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Contact information”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “What happens next”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Review and submit your response” and it looks as follows, <img src="pictures/test-plan-compliance/image112.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Submit the response</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You get this warning- <img src="pictures/test-plan-compliance/image113.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Go to the URL and delete the “/complete” and press enter <img src="pictures/test-plan-compliance/image100.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: The URL does not have the “/complete” and you are now at the starting page but the sequence of numbers and letters in the URL matches the sequence of letters and numbers at the bottom of the website</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image101.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"><img src="pictures/test-plan-compliance/image102.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"><img src="pictures/test-plan-compliance/image103.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image104.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"><img src="pictures/test-plan-compliance/image105.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"><img src="pictures/test-plan-compliance/image106.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
</ul>
<h1></h1>
<ul>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “get started” on the opening page</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;"><img src="pictures/test-plan-compliance/image1.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Confirm the property address” with all of the information still there.</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Upload Photos of the Area”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Upload one photo.</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You have one photo in the photo’s added box.</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Property access permission”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Contact information”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “What happens next”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Click “Continue”</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You are on the page “Review and submit your response” and it looks as follows- <img src="pictures/test-plan-compliance/image114.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Action: Submit the response</label></li>
<li><label style="cursor:pointer;display:flex;align-items:flex-start;gap:8px;"><input type="checkbox" style="margin-top:3px;accent-color:#22c55e;flex-shrink:0;">Result: You get this response <img src="pictures/test-plan-compliance/image115.png" alt="" style="max-width:100%;border:1px solid #14532d;border-radius:6px;margin:8px 0;"></label></li>
</ul>
`;

export default complianceHtml;
