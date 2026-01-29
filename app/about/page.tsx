import ScrollAnimation from "@/components/ScrollAnimation";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ScrollAnimation>
        <h1 className="text-4xl font-bold mb-8 text-center">About Hearts in Action</h1>
      </ScrollAnimation>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary-600">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Hearts in Action is a student-led club at the University of Ottawa dedicated to making
            a positive impact in our community through fundraising, volunteer work, and raising
            awareness for important causes.
          </p>
          <p className="text-gray-700">
            We believe that every small action can create a ripple effect of positive change, and
            we're committed to providing opportunities for students to get involved and make a difference.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">What We Do</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Organize fundraising events to support local and global causes</li>
            <li>Partner with charities and non-profit organizations</li>
            <li>Create volunteer opportunities for students</li>
            <li>Raise awareness about important social issues</li>
            <li>Build a community of like-minded individuals passionate about making a difference</li>
            <li>Develop leadership and organizational skills in our members</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary-600">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold mb-2 text-primary-700">Compassion</h3>
              <p className="text-gray-700">
                We approach every cause with empathy and understanding, recognizing the importance
                of each individual's story.
              </p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold mb-2 text-red-700">Action</h3>
              <p className="text-gray-700">
                We don't just talk about change—we actively work to make it happen through events,
                fundraising, and volunteer work.
              </p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold mb-2 text-primary-700">Community</h3>
              <p className="text-gray-700">
                We believe in the power of coming together, building strong relationships, and
                supporting one another.
              </p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold mb-2 text-red-700">Transparency</h3>
              <p className="text-gray-700">
                We maintain open communication about our goals, progress, and how funds are used,
                ensuring accountability to our members and donors.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary-600">Join Us</h2>
          <p className="text-gray-700 mb-4">
            Whether you're interested in organizing events, volunteering, or simply learning more
            about how you can make a difference, we welcome you to join Hearts in Action.
          </p>
          <p className="text-gray-700">
            No experience is necessary—just a passion for helping others and a willingness to get
            involved. Together, we can create meaningful change in our community and beyond.
          </p>
        </section>
      </div>
    </div>
  );
}
