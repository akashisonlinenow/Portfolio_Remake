# Personal Portfolio

My Portfolio to showcase projects. Build with [Next.js](https://nextjs.org/), [Material UI](https://mui.com/) and [Framer Motion](https://www.framer.com/motion/).

Checkout the **[Live Site](https://jayesh-singh.vercel.app/)**.

## Install & Run

Make Sure you have Node `18.0.0` or higher and prefer pnpm `7.28.0` or higher to install stuff

Install dependencies  with:

``` bash
pnpm install
# or
npm install
```

Once done, Startup a local server with:

``` bash
pnpm dev
# or
npm run dev
```

To create a production build:

``` bash
pnpm build
# or
npm run build
```

***

## To Personalize

**Step I :**  [Fork](https://github.com/KingBael09/Portfolio_Remake/fork) the Repo[^1].

**Step II :** Create a `.env.local` file & populate it.

**Step III :** Then navigate to `/data` folder & update relevant data

### Details

<details><summary>Environment Variables</summary>

#### Environment Variables

| Variables | Default | Description |
| :--- | :---: | :---: |
| `NEXT_PUBLIC_GITHUB_USERNAME` | KingBael09 | Your Github Username |
| `NEXT_PUBLIC_GITHUB_REPO_NAME` | Portfolio_Remake | Name of the Forked Repo |
| `NEXT_PUBLIC_FIRST_NAME` | Jayesh |  First Name to be displayed  |
| `NEXT_PUBLIC_LAST_NAME` | Singh |  Last Name to be displayed   |
| `NEXT_PUBLIC_LOCATION` | India |  Location to be displayed   |

</details>

<details><summary>Content of /data Folder
</summary>

#### Files

| Variables | Description |
| :--- | :--- |
| `aboutData.tsx` | Contains HTML for About Page |
| `contactData.tsx` | Array of objects containing links & icons for contact <br/><sub>Used in Footer and Contact Modal</sub> |
| `failSafe.tsx` | Contains the fail safe data of Projects <br/> In case GitHub's API Reaches its limit [^2]  |
| `link.ts` |  Contains the link to Resume & deployment [^3]   |
| `pannelData.tsx` |  Array of Panel Items<br/><sub>Used in Vertical Navbar/Panel</sub>   |
| `Resume.pdf` |  Your Resume [^3]   |
| `skillsData.tsx` |  Contains Array of Skills and Tools [^4]  |
| `timelineData.tsx` |  Contains the timeline data <br/><sub>Used in Timeline on Homepage</sub>   |

</details>

[^1]: *Forking Repo is actually needed to get the Resume Linking Function.*
[^2]: *It is reccomended to create a Fail Safe from : [API Link](https://api.github.com/users/KingBael09/repos)*
[^3]: *Link String remains unchanged if resume uploaded in same folder*
[^4]: *Each Skill can contain SubSkills*
