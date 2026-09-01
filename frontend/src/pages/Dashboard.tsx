const branches = [
  {
    name: "MAIN",
    location: "Guwahati",
    members: "524",
    attendance: "72%",
  },
  {
    name: "CITY",
    location: "Guwahati",
    members: "417",
    attendance: "64%",
  },
  {
    name: "NORTH",
    location: "Assam",
    members: "307",
    attendance: "58%",
  },
];

const activity = [
  {
    type: "MEMBERSHIP",
    title: "Rahul Das joined Premium",
    time: "08 min",
  },
  {
    type: "RENEWAL",
    title: "Priya Sharma renewed Annual",
    time: "24 min",
  },
  {
    type: "STORE",
    title: "Order #MF-10482 · ₹3,450",
    time: "41 min",
  },
  {
    type: "TRAINING",
    title: "Arjun completed PT session",
    time: "01 hr",
  },
];

export default function Dashboard() {
  return (
    <div className="mf-dashboard">

      {/* TOP BAR */}

      <header className="mf-topbar">

        <div className="mf-mobile-brand">
          <span>মন</span>FIT
        </div>

        <div className="mf-topbar-right">
          <button className="mf-icon-button">⌕</button>
          <button className="mf-icon-button">♧</button>

          <div className="mf-profile">
            <div className="mf-profile-avatar">A</div>

            <div>
              <strong>Akash Rao</strong>
              <span>Owner</span>
            </div>

            <span className="mf-chevron">⌄</span>
          </div>
        </div>

      </header>


      {/* HERO */}

      <section className="mf-hero">

        <div className="mf-hero-copy">

          <p className="mf-kicker">
            BUSINESS / 01 SEPTEMBER 2026
          </p>

          <h1>
            BUILD
            <br />
            <span>BETTER.</span>
          </h1>

          <p className="mf-hero-description">
            Your complete view of the business —
            gyms, people, fitness and commerce.
          </p>

        </div>

        <div className="mf-hero-mark">
          <span>মন</span>
          <strong>FIT</strong>
          <small>FITNESS BUSINESS PLATFORM</small>
        </div>

      </section>


      {/* KEY NUMBERS */}

      <section className="mf-numbers">

        <div className="mf-number-large">

          <p className="mf-kicker">TOTAL MEMBERS</p>

          <div className="mf-number-value">
            1,248
            <span>+8.4%</span>
          </div>

          <p className="mf-number-note">
            Across 3 active branches
          </p>

        </div>


        <div className="mf-number">

          <p className="mf-kicker">MONTHLY REVENUE</p>

          <strong>₹4.82L</strong>

          <span>+12.6%</span>

        </div>


        <div className="mf-number">

          <p className="mf-kicker">TODAY'S CHECK-INS</p>

          <strong>386</strong>

          <span>31% of members</span>

        </div>


        <div className="mf-number">

          <p className="mf-kicker">EXPIRING SOON</p>

          <strong>42</strong>

          <span>Next 7 days</span>

        </div>

      </section>


      {/* BRANCH SECTION */}

      <section className="mf-section">

        <div className="mf-section-heading">

          <div>
            <p className="mf-kicker">NETWORK / 03</p>
            <h2>YOUR GYMS</h2>
          </div>

          <button className="mf-text-button">
            MANAGE BRANCHES →
          </button>

        </div>


        <div className="mf-branches">

          {branches.map((branch, index) => (

            <div className="mf-branch" key={branch.name}>

              <div className="mf-branch-number">
                0{index + 1}
              </div>

              <div className="mf-branch-main">

                <div>
                  <p>{branch.location}</p>
                  <h3>{branch.name}</h3>
                </div>

                <div className="mf-branch-stats">

                  <div>
                    <span>MEMBERS</span>
                    <strong>{branch.members}</strong>
                  </div>

                  <div>
                    <span>ATTENDANCE</span>
                    <strong>{branch.attendance}</strong>
                  </div>

                </div>

              </div>

              <div className="mf-branch-arrow">
                ↗
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* BOTTOM AREA */}

      <section className="mf-bottom-grid">


        {/* ACTIVITY */}

        <div className="mf-panel">

          <div className="mf-panel-heading">

            <div>
              <p className="mf-kicker">LIVE FEED</p>
              <h2>WHAT'S HAPPENING</h2>
            </div>

            <span>● LIVE</span>

          </div>


          <div className="mf-activity">

            {activity.map((item) => (

              <div className="mf-activity-row" key={item.title}>

                <div className="mf-activity-type">
                  {item.type}
                </div>

                <strong>{item.title}</strong>

                <span>{item.time}</span>

              </div>

            ))}

          </div>

        </div>


        {/* QUICK ACTIONS */}

        <div className="mf-action-panel">

          <p className="mf-kicker">QUICK ACTIONS</p>

          <h2>
            GET
            <br />
            THINGS
            <br />
            <span>DONE.</span>
          </h2>


          <div className="mf-actions">

            <button>
              <span>01</span>
              ADD MEMBER
              <b>+</b>
            </button>

            <button>
              <span>02</span>
              NEW MEMBERSHIP
              <b>+</b>
            </button>

            <button>
              <span>03</span>
              RECORD PAYMENT
              <b>+</b>
            </button>

            <button>
              <span>04</span>
              ADD PRODUCT
              <b>+</b>
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}