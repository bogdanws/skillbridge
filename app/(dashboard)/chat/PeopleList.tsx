import PersonButton from './PersonButton';

export default function PeopleList() {
	return <div className={'w-80 h-full bg-primary-700 flex flex-col'}>
		<PersonButton selected={true}/>
		<PersonButton/>
	</div>
}