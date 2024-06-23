import AddPost from '@/src/components/AddPost';
import Stories from '@/src/components/Stories';
import Feed from '@/src/components/feed/Feed';
import LeftMenu from '@/src/components/leftMenu/LeftMenu';
import RightMenu from '@/src/components/rightMenu/RightMenu';

const Homepage = () => {
	return (
		<div className="flex gap-6 pt-6">
			<div className="hidden xl:block w-[20%]">
				<LeftMenu type="home" />
			</div>
			<div className="w-full lg:w-[70%] xl:w-[50%]">
				<div className="flex flex-col gap-6">
					<Stories />
					<AddPost />
					<Feed />
				</div>
			</div>
			<div className="hidden lg:block w-[30%]">
				<RightMenu />
			</div>
		</div>
	);
};

export default Homepage;