import {useState, useEffect, useRef} from 'react'
import cx from 'classnames'
import Header from 'sections/header/basic.js'

import layout from 'styles/layout.module.scss'
import global from 'styles/global.module.scss'

export default () => {
  useEffect(() => scrollBG(".color-change-bg", ["#134a89", "#6D289A", "#1ea185", "#134a89" ], 3500));

  return (
    <div className={cx(layout.h100_vh, layout.w100_vw, layout.f_row, layout.justify_center, layout.align_center)}>
      <Header />
      <h1 className={global.text_complementary}>Devicarus</h1>
    </div>
  )
}


/*

<article id="main" className="overflow-hidden">
			<div className="pb-5 color-change-bg overflow-hidden">
				<div className="pb-5 container">
					<div className="row align-items-center" id="container">
						<div className="col-12">
							<div className="purple-gradient mt-5 d-flex flex-column p-5 text-center overflow-visible" id="parallaxHeader">
								<h1 className="white qHeader">
									Quest: A Creative Landing Page Theme For Easy Use
								</h1>
								<h5 className="white qHeader2">
									Designed By Project Icarus
								</h5>
								<div className="my-4 dark">
									<a className="btn btn-lg btn-primary btn-purple-basic" href="https://github.com/icarus612/questLandingPage">Visit Github</a>
									<a className="btn btn-lg btn-primary btn-purple-basic" target='_blank' href="https://www.projecticarus.net">Main Site</a>
								</div>
							</div>
							<Throbber bottom id="first" mobile="right" />
						</div>
						<Swoosh id="mv1" startEl="first" endEl="second" />
						<div className="col-xs-12 col-lg-6">
							<Throbber top id="second" mobile="left" />
							<div className="purple-gradient d-flex flex-column p-5 text-left overflow-visible">
								<h2 className="white">
									JavaScript 
								</h2>
								<h5 className="my-3 white">
									JavaScript is amazing for so many reasons, and if you don't believe me, look uo "how to disable Javascript in my browser", and play around online for 10-20 minutes. (Most pages wont even let you view them without JS enabled)
								</h5>
								<h5>
									Most of my pages are made to show off JavaScript animation, that are fun, reactive and interactive with the user.
								</h5>
							</div>
							<Throbber bottom id="third" mobile="left" />
						</div>
						<div className="col-xs-12 col-lg-6">
							<div className="hero hero-video intro">
							</div>
						</div>
						<Swoosh id="mv2" startEl="third" endEl="fourth" />
						<div className="d-none d-md-block col-md-4">
							<div className="order-lg-1 mt-5 mt-lg-0 mx-lg-5"></div>
						</div>
						<div className="col-sm-12 col-md-8">
							<Throbber top id="fourth" mobile="right" />
							<div className="purple-gradient order-lg-2 d-flex flex-column p-5 text-left overflow-visible">
								<h2 className="white">
									Animations with anime.js
								</h2>
								<h5>
									This is whats going on behind the scenes with the dots. (to see the dots animation repo <a target='_blank' href="https://github.com/icarus612/dots">click here</a>
								</h5>
								<p>I'm using a modified version here to dynamically change the distance if the page size changes. (try it out)</p>
							</div>
							<Throbber bottom id="fifth" mobile="right" />
						</div>
						<Swoosh id="mv3" startEl="fifth" endEl="sixth" />
						<div className="col-xs-12 col-md-8 col-lg-6">
							<Throbber top id="sixth" mobile="left" />
							<div className="purple-gradient d-flex flex-column p-5 text-left overflow-visible">
								<h2 className="white">
									Use as you wish 
								</h2>
								<h5 className="my-3 pb-3 white">
									This landing page is avalible for download (obviously), and others like it. Check out <a target='_blank' href='https://angel-icarus.netlify.com'>this page</a> for more cool js anamations in action. 
									The link to either github is here:
								</h5>
								<div className="my-4 text-center dark">
									<a className="btn btn-lg btn-primary btn-purple-basic" target='_blank' href="https://github.com/icarus612/questLandingPage">Quest</a>
									<a className="btn btn-lg btn-primary btn-purple-basic" target='_blank' href="https://github.com/icarus612/angelicarus">Icarus</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="py-5 position-relative overflow-hidden pt-5" id='contactMe'>
				<div className="container">
					<div className="col-12 py-md-3 text-center text-white my-4">
						<h3 className="my-4 dark">
							Need web development? Check out my website! 
						</h3>
						<div className="d-flex flex-column flex-md-row justify-content-between align-items-around">
							<div className="my-4 col-12 dark">
								<a className="btn btn-lg btn-primary btn-purple" href="https://github.com/icarus612/questLandingPage">Visit Github</a>
								<a className="btn btn-lg btn-primary btn-purple" href="https://www.projecticarus.net">See Site</a>
							</div>
						</div>
					</div>

				</div>
			</section>
		</article>

*/