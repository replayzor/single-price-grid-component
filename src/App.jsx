function App() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen bg-[#E7EFF6] font-karla">
			<article className="md:grid md:grid-cols-2">
				<header className="bg-white md:col-span-2 md:w-[40rem] w-[20rem] py-6 px-6 rounded-t-md">
					<h1 className="text-[20px] text-primary-cyan font-[600]">
						Join our community
					</h1>
					<h2 className="my-4 font-bold text-primary-brightYellow">
						30-day, hassle-free money back guarantee
					</h2>
					<p className="text-sm leading-7 text-neutral-grayishBlue">
						Gain access to our full library of tutorials along with expert code
						reviews. Perfect for any developers who are serious about honing
						their skills.
					</p>
				</header>
				<section className="w-[20rem] md:rounded-bl-md py-6 px-6 bg-primary-cyan bg-opacity-90">
					<h1 className="pb-4 text-lg font-medium text-white">
						Monthly Subscription
					</h1>
					<p className="text-3xl text-white">
						$29
						<span className="pl-2 text-sm text-neutral-lightGray ">
							per month
						</span>
					</p>
					<p className="pt-2 pb-6 text-neutral-lightGray">
						Full access for less than $1 a day
					</p>
					<button
						type="button"
						className="w-full py-3 text-white rounded-md shadow-2xl bg-primary-brightYellow"
					>
						Sign Up
					</button>
				</section>
				<section className="w-[20rem] md:rounded-bl-none rounded-b-md py-4 px-6 bg-primary-cyan bg-opacity-70">
					<h1 className="mb-4 text-lg text-white md:mt-4">Why Us</h1>
					<p className="w-[200px] text-sm leading-5 pb-3 text-neutral-lightGray font-thin">
						Tutorials by industry experts Peer & expert code review Coding
						exercises <br />
						Access to our GitHub repos Community forum <br /> Flashcard decks
						<br /> New videos every week
					</p>
				</section>
				<footer>
					<p className="attribution">
						Challenge by{" "}
						<a
							href="https://www.frontendmentor.io?ref=challenge"
							rel="noreferrer"
							target="_blank"
						>
							Frontend Mentor
						</a>
						. Coded by{" "}
						<a
							href="https://github.com/replayzor"
							rel="noreferrer"
							target="_blank"
						>
							Ionut Oltean
						</a>
						.
					</p>
				</footer>
			</article>
		</main>
	);
}

export default App;
